# InstantlyEngage Booking System

## 🎯 Let's Fill Your Classrooms!

A complete booking system for InstantlyEngage (school marketing business) that helps schools schedule strategy calls to grow their enrollment.

## 🚀 Features

### **📅 Professional Calendar Interface**
- Available time slots: **Sunday-Thursday 1PM-9PM (Riyadh Time)**
- 30-minute booking slots
- Automatically blocks Friday & Saturday (Middle East weekend)
- Clean, Calendly-style design
- Mobile-responsive interface

### **📋 Comprehensive Booking Form**
- Required fields: Name, School Name, Country, Phone, Email
- Country dropdown with 20 countries (Saudi Arabia, UAE, Qatar, etc.)
- Best time to call preference (Early Afternoon, Mid Afternoon, Evening)
- Optional message field
- Form validation and error handling

### **✅ Professional Confirmation**
- Large "🎯 Let's Fill Your Classrooms!" headline
- Booking confirmation with date/time in Riyadh timezone
- Clear next steps explanation
- Professional presentation

### **🔗 Complete Integration**
- Google Sheets data storage
- Email confirmations to customers
- Email notifications to admin
- Real-time slot blocking to prevent double-booking

## 📍 Access the Booking System

The booking system is available at: **`/booking`**

All "Book A Call" buttons throughout the site now direct to this professional booking system.

## 🛠️ Setup Instructions

### 1. EmailJS Setup (Free Email Service)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create two email templates:

**Customer Confirmation Template ID: `customer_confirmation_template`**
```
Subject: Your Call is Scheduled - Let's Fill Your Classrooms! 🎯

Hi {{customer_name}},

Great news! Your call is confirmed for:

📅 Date: {{selected_date}}
⏰ Time: {{selected_time}} (Riyadh Time)
📞 We'll call you at: {{phone}}
🌍 Country: {{country}}

🎯 **Let's Fill Your Classrooms!**

What to expect on our call:
✅ Analysis of your current enrollment challenges in {{country}}
✅ Custom strategy for {{school_name}}
✅ How we get schools 10-30 new tour bookings monthly
✅ Real examples from schools we've helped grow

Questions before our call? Just reply to this email.

Looking forward to helping {{school_name}} grow!

Best regards,
Yazan Basendwah
Founder Of InstantlyEngage
School Growth Specialist
```

**Admin Notification Template ID: `admin_notification_template`**
```
Subject: 🚨 NEW BOOKING - {{school_name}} from {{country}}

🎯 Let's Fill Their Classrooms!

New call scheduled:

👤 Name: {{customer_name}}
🏫 School: {{school_name}}  
🌍 Country: {{country}}
📞 Phone: {{phone}}
📧 Email: {{email}}
📅 Date/Time: {{selected_date}} at {{selected_time}} (Riyadh Time)
⏰ Preferred Call Time: {{preferred_call_time}}
💬 Message: {{message}}

Time to prep for this call and help them grow!

- Yazan
```

4. Update `src/components/BookingCalendar.tsx` with your EmailJS credentials:
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_PUBLIC_KEY` with your public key

### 2. Google Sheets Setup

**Option A: Google Apps Script (Recommended)**

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 10).setValues([[
        'Timestamp', 'Name', 'School Name', 'Country', 'Phone', 'Email', 
        'Selected Date', 'Selected Time (Riyadh)', 'Preferred Call Time', 'Message'
      ]]);
    }
    
    // Add the booking data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.schoolName,
      data.country,
      data.phone,
      data.email,
      data.selectedDate,
      data.selectedTime,
      data.bestTimeToCall,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Create a new Google Sheet and copy its ID from the URL
5. Replace `YOUR_SPREADSHEET_ID` in the script
6. Deploy as web app with execute permissions for "Anyone"
7. Copy the web app URL
8. Update `src/components/BookingCalendar.tsx` - replace `YOUR_GOOGLE_SHEETS_WEB_APP_URL`

**Option B: Zapier (Alternative)**

1. Create a [Zapier](https://zapier.com/) account (free tier available)
2. Create a new Zap with Webhook trigger
3. Connect to Google Sheets as the action
4. Use the webhook URL in `BookingCalendar.tsx`

### 3. Deployment Instructions

#### **As Standalone Application:**
1. This booking system works as a standalone page at `/booking`
2. You can link to it from any external website
3. Direct URL: `https://yourdomain.com/booking`

#### **Linking from External Sites:**
Update all your "Book A Call" buttons to point to:
```html
<a href="https://yourdomain.com/booking">Book A Call</a>
```

### 4. Features Included

✅ **Professional Calendar Interface**
- Sunday-Thursday availability (Middle East business days)
- 1PM-9PM Riyadh Time slots
- Prevents double booking
- Mobile responsive

✅ **Comprehensive Booking Form**
- 20 country dropdown options
- Required fields validation
- Best time to call preferences
- Optional message field

✅ **Automated Integrations**
- Google Sheets data storage
- Email confirmations to customers
- Email notifications to admin
- Real-time slot blocking

✅ **Professional Confirmation Page**
- Prominent "Let's Fill Your Classrooms!" branding
- Booking confirmation details
- Next steps explanation
- Professional presentation

### 5. Customization

To customize the booking system:

1. **Time Slots**: Edit the `timeSlots` array in `BookingCalendar.tsx`
2. **Available Days**: Modify the date selection logic (currently Sunday-Thursday)
3. **Countries**: Update the `countries` array
4. **Styling**: Modify Tailwind classes throughout the component
5. **Email Templates**: Update templates in EmailJS dashboard

### 6. Testing

1. Test the booking flow end-to-end
2. Verify Google Sheets integration
3. Check email delivery (including spam folders)
4. Test on mobile devices
5. Verify Riyadh timezone display

### 7. Going Live

1. Deploy your application
2. Test the `/booking` route
3. Update all "Book A Call" buttons to point to `/booking`
4. Monitor bookings in your Google Sheet
5. Set up email notifications on your phone

## 🎯 Business Impact

This booking system helps you:
- **Capture more leads** with professional booking experience
- **Reduce friction** in the booking process
- **Automate follow-up** with email confirmations
- **Track all bookings** in Google Sheets
- **Present professionally** to potential clients

## 📱 Mobile Optimized

The entire booking system is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎨 Professional Design

- Matches InstantlyEngage brand colors (blue theme)
- Clean, modern interface
- Smooth animations and transitions
- Professional typography
- Intuitive user experience
- Prominent "Let's Fill Your Classrooms!" branding

## Support

If you need help with setup:
1. Check the browser console for errors
2. Verify all API keys and URLs are correct
3. Test each integration separately
4. Ensure CORS is properly configured for your domain

## 🎯 Let's Fill Those Classrooms!

The booking system is now fully integrated into your InstantlyEngage website and ready to help you grow schools across the Middle East and beyond!