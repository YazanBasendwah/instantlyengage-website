// Local Storage Management for Booked Slots
// This provides immediate slot blocking until backend is connected

export interface BookedSlot {
  date: string;
  time: string;
  customerName: string;
  schoolName: string;
  timestamp: string;
}

const STORAGE_KEY = 'instantlyengage_booked_slots';

export const getBookedSlots = (): Set<string> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Set();
    
    const slots: BookedSlot[] = JSON.parse(stored);
    const slotKeys = slots.map(slot => `${slot.date}-${slot.time}`);
    return new Set(slotKeys);
  } catch (error) {
    console.error('Error loading booked slots:', error);
    return new Set();
  }
};

export const addBookedSlot = (date: string, time: string, customerName: string, schoolName: string): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const existingSlots: BookedSlot[] = stored ? JSON.parse(stored) : [];
    
    const newSlot: BookedSlot = {
      date,
      time,
      customerName,
      schoolName,
      timestamp: new Date().toISOString()
    };
    
    existingSlots.push(newSlot);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSlots));
  } catch (error) {
    console.error('Error saving booked slot:', error);
  }
};

export const removeBookedSlot = (date: string, time: string): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const existingSlots: BookedSlot[] = JSON.parse(stored);
    const filteredSlots = existingSlots.filter(
      slot => !(slot.date === date && slot.time === time)
    );
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSlots));
  } catch (error) {
    console.error('Error removing booked slot:', error);
  }
};

export const clearOldBookings = (): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const existingSlots: BookedSlot[] = JSON.parse(stored);
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000)); // 7 days ago
    
    const recentSlots = existingSlots.filter(slot => {
      const slotDate = new Date(slot.timestamp);
      return slotDate > cutoffDate;
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSlots));
  } catch (error) {
    console.error('Error clearing old bookings:', error);
  }
};