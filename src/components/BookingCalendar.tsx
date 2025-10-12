import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, isSameDay, isWeekend, isBefore, startOfDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Calendar, User, School, Phone, Mail, MessageSquare } from 'lucide-react';
import { getBookedSlots, addBookedSlot, removeBookedSlot, clearOldBookings } from '../utils/bookingStorage';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingData {
  name: string;
  schoolName: string;
  country: string;
  phone: string;
  email: string;
  bestTimeToCall: string;
  message: string;
  selectedDate: string;
  selectedTime: string;
}

const BookingCalendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());

  // Load booked slots on component mount
  useEffect(() => {
    clearOldBookings(); // Clean up old bookings
    const slots = getBookedSlots();
    setBookedSlots(slots);
  }, []);

  const [formData, setFormData] = useState<BookingData>({
    name: '',
    schoolName: '',
    country: 'Saudi Arabia',
    phone: '',
    email: '',
    bestTimeToCall: 'Morning',
    message: '',
    selectedDate: '',
    selectedTime: ''
  });

  // Generate time slots (1 PM - 9 PM, 30-minute intervals, Riyadh Time)
  const timeSlots: TimeSlot[] = [
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true },
    { time: '8:00 PM', available: true },
    { time: '8:30 PM', available: true },
  ];

  const countries = [
    'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'Egypt', 'Jordan', 'Lebanon', 'Morocco', 'Tunisia', 'Algeria',
    'Pakistan', 'India', 'Turkey', 'UK', 'USA', 'Canada', 'Australia', 'Other'
  ];

  const bestTimesToCall = ['Early Afternoon 1-3PM', 'Mid Afternoon 3-6PM', 'Evening 6-9PM'];

  // Get week days (Sunday to Thursday for Middle East)
  const getWeekDays = (startDate: Date) => {
    const start = startOfWeek(startDate, { weekStartsOn: 0 }); // Sunday
    const days = [];
    for (let i = 0; i < 5; i++) {
      days.push(addDays(start, i));
    }
    return days;
  };

  const weekDays = getWeekDays(currentWeek);

  const handleDateSelect = (date: Date) => {
    // Check if it's Friday (5) or Saturday (6) - weekend in Middle East
    const dayOfWeek = date.getDay();
    // Block same day bookings - only allow tomorrow and beyond
    const tomorrow = addDays(startOfDay(new Date()), 1);
    if (dayOfWeek === 5 || dayOfWeek === 6 || isBefore(date, tomorrow)) return;
    setSelectedDate(date);
    setSelectedTime('');
    setShowForm(false);
  };

  const handleTimeSelect = (time: string) => {
    if (!selectedDate) return;
    const slotKey = `${format(selectedDate, 'yyyy-MM-dd')}-${time}`;
    if (bookedSlots.has(slotKey)) return;
    
    setSelectedTime(time);
    setFormData(prev => ({
      ...prev,
      selectedDate: format(selectedDate, 'EEEE, MMMM d, yyyy'),
      selectedTime: time
    }));
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToGoogleSheets = async (data: BookingData) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIfyqSTCxvrnDjC1z4bVa7_IXtJwhFXO8NX8RpRA88ZdI5oCQZb5BscW8bDQ1nLxVX/exec';
    
    // Convert 12-hour time to 24-hour format
    const convertTo24Hour = (time12h: string): string => {
      const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
      if (hours === '12') {
        hours = '00';
      }
      if (modifier === 'PM') {
        hours = (parseInt(hours, 10) + 12).toString();
      }
      return `${hours.padStart(2, '0')}:${minutes}`;
    };

    // Convert date to YYYY-MM-DD format
    const formatDate = (dateString: string): string => {
      if (!selectedDate) return '';
      return format(selectedDate, 'yyyy-MM-dd');
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          name: data.name,
          schoolName: data.schoolName,
          country: data.country,
          phone: data.phone,
          email: data.email,
          selectedDate: formatDate(data.selectedDate),
          selectedTime: convertTo24Hour(data.selectedTime),
          preferredCallTime: data.bestTimeToCall,
          message: data.message
        })
      });
      
      // With no-cors mode, we can't read the response
      // Just assume success if no error was thrown
      console.log('Data sent to Google Sheets successfully');
      return { success: true };
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  };

  const sendEmails = async (data: BookingData) => {
    // EmailJS configuration (you'll need to set this up)
    const emailjs = (window as any).emailjs;
    
    if (!emailjs) {
      console.error('EmailJS not loaded');
      return;
    }

    try {
      // Send confirmation email to customer
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'customer_confirmation_template',
        {
          to_email: data.email,
          customer_name: data.name,
          school_name: data.schoolName,
          country: data.country,
          selected_date: data.selectedDate,
          selected_time: data.selectedTime,
          phone: data.phone
        },
        'YOUR_PUBLIC_KEY'
      );

      // Send notification email to you
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'admin_notification_template',
        {
          customer_name: data.name,
          school_name: data.schoolName,
          country: data.country,
          phone: data.phone,
          email: data.email,
          selected_date: data.selectedDate,
          selected_time: data.selectedTime,
          message: data.message,
          best_time: data.bestTimeToCall
        },
        'YOUR_PUBLIC_KEY'
      );
    } catch (error) {
      console.error('Email sending error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setIsSubmitting(true);

    try {
      // Mark slot as booked immediately to prevent double booking
      const slotKey = `${format(selectedDate, 'yyyy-MM-dd')}-${selectedTime}`;
      setBookedSlots(prev => new Set([...prev, slotKey]));
      
      // Save to local storage immediately
      addBookedSlot(
        format(selectedDate, 'yyyy-MM-dd'),
        selectedTime,
        formData.name,
        formData.schoolName
      );

      // Send to Google Sheets
      await sendToGoogleSheets(formData);

      // Send emails (if configured)
      try {
        await sendEmails(formData);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with booking even if email fails
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Booking error:', error);
      // Remove the slot from booked slots if there was an error
      const slotKey = `${format(selectedDate, 'yyyy-MM-dd')}-${selectedTime}`;
      setBookedSlots(prev => {
        const newSet = new Set(prev);
        newSet.delete(slotKey);
        return newSet;
      });
      
      // Remove from local storage if error occurred
      removeBookedSlot(format(selectedDate, 'yyyy-MM-dd'), selectedTime);
      
      alert('There was an error processing your booking. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextWeek = () => {
    setCurrentWeek(addDays(currentWeek, 7));
  };

  const prevWeek = () => {
    const newWeek = addDays(currentWeek, -7);
    if (!isBefore(newWeek, startOfDay(new Date()))) {
      setCurrentWeek(newWeek);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">Thank You!</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-6">Your call is confirmed.</h2>
          <p className="text-lg text-blue-600 font-semibold mb-6">Check your email for Google Meet details and call information.</p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-semibold mb-2">Your call is scheduled for:</p>
            <p className="text-base sm:text-lg font-bold text-blue-900 break-words">{formData.selectedDate}</p>
            <p className="text-base sm:text-lg font-bold text-blue-900">{formData.selectedTime} (Riyadh Time)</p>
            <p className="text-sm sm:text-base text-blue-700 mt-2">Country: {formData.country}</p>
          </div>
          <div className="text-left space-y-3 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">What happens next:</h3>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
              <p className="text-sm sm:text-base text-gray-600">I'll send you the Google Meet link via email 15 minutes before our call</p>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
              <p className="text-sm sm:text-base text-gray-600 break-words">We'll call you at {formData.phone} at the scheduled time</p>
            </div>
            <div className="flex items-start space-x-3">
              <School className="w-5 h-5 text-blue-500 mt-0.5" />
              <p className="text-sm sm:text-base text-gray-600 break-words">We'll discuss a custom growth strategy for {formData.schoolName} in {formData.country}</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-6">Questions before our call? Just reply to the email you'll receive.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-6 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight px-2">
             Let's Fill Your <span className="text-black-500">Classrooms!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Book a free 30-minute strategy call to discover how InstantlyEngage can get your school 10-30 new tour bookings every month
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-500" />
                Select Date & Time
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevWeek}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  disabled={isBefore(addDays(currentWeek, -7), startOfDay(new Date()))}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 min-w-[140px] sm:min-w-[200px] text-center">
                  {format(weekDays[0], 'MMM d')} - {format(weekDays[4], 'MMM d, yyyy')}
                </span>
                <button
                  onClick={nextWeek}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-6">
              {weekDays.map((day, index) => {
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                // Block same day - only allow tomorrow and beyond
                const tomorrow = addDays(startOfDay(new Date()), 1);
                const isPast = isBefore(day, tomorrow);
                const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
                const dayOfWeek = day.getDay();
                const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Friday & Saturday
                
                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPast || isWeekend}
                    className={`p-2 sm:p-3 md:p-4 rounded-lg text-center transition-all ${
                      isSelected
                        ? 'bg-blue-500 text-white shadow-lg'
                        : isPast || isWeekend
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-medium">{dayNames[index]}</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold">{format(day, 'd')}</div>
                  </button>
                );
              })}
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  Available Times (Riyadh Time)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => {
                    const slotKey = `${format(selectedDate, 'yyyy-MM-dd')}-${slot.time}`;
                    const isBooked = bookedSlots.has(slotKey);
                    const isSelected = selectedTime === slot.time;
                    
                    return (
                      <button
                        key={slot.time}
                        onClick={() => handleTimeSelect(slot.time)}
                        disabled={isBooked}
                        className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-blue-500 text-white shadow-lg'
                            : isBooked
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
            {!showForm ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">Select Date & Time</h3>
                  <p className="text-sm sm:text-base text-gray-500 px-4">Choose your preferred date and time to continue</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-500" />
                  Your Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your school name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Time to Call
                  </label>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {bestTimesToCall.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message/Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your school's current challenges or any specific questions you have..."
                  />
                </div>

                {/* Selected Date/Time Display */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Selected Appointment:</h4>
                  <p className="text-sm sm:text-base text-blue-700 break-words">
                    📅 {formData.selectedDate} at {formData.selectedTime} (Riyadh Time)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-base sm:text-lg"
                >
                  {isSubmitting ? 'Booking Your Call...' : 'Book My Free Strategy Call'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By booking this call, you agree to receive communication from us about your school's growth opportunities.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 lg:mt-16 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            What You'll Get on This Call
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">School Analysis</h3>
              <p className="text-sm sm:text-base text-gray-600">We'll analyze your current enrollment challenges and identify opportunities for growth.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Custom Strategy</h3>
              <p className="text-sm sm:text-base text-gray-600">Get a personalized marketing strategy designed specifically for your school's needs, goals, and local market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Growth Plan</h3>
              <p className="text-sm sm:text-base text-gray-600">Learn exactly how we can help you get 10-30 new tour bookings every month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;