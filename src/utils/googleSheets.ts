// Google Sheets Integration Setup Instructions
// 
// OPTION 1: Google Apps Script (Recommended)
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Replace the default code with the script below
// 4. Deploy as a web app with execute permissions for "Anyone"
// 5. Copy the web app URL and replace GOOGLE_SHEETS_URL in BookingCalendar.tsx

/*
Google Apps Script Code (paste this in script.google.com):

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
*/

// OPTION 2: Zapier Integration (Alternative)
// 1. Create a Zapier account (free tier available)
// 2. Create a new Zap with Webhook trigger
// 3. Connect to Google Sheets as the action
// 4. Use the webhook URL in place of GOOGLE_SHEETS_URL

export const GOOGLE_SHEETS_CONFIG = {
  // Replace this with your Google Apps Script web app URL
  WEB_APP_URL: 'YOUR_GOOGLE_SHEETS_WEB_APP_URL',
  
  // Or use Zapier webhook URL
  ZAPIER_WEBHOOK_URL: 'YOUR_ZAPIER_WEBHOOK_URL'
};

// Instructions to get your Google Sheets setup:
// 1. Create a new Google Sheet
// 2. Note the spreadsheet ID from the URL
// 3. Follow the Google Apps Script instructions above
// 4. Deploy and get the web app URL
// 5. Replace the URL in BookingCalendar.tsx