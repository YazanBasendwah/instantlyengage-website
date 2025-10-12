// EmailJS Setup Instructions
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create email templates with the following IDs:
//    - customer_confirmation_template
//    - admin_notification_template
// 4. Replace the placeholders below with your actual values

export const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  CUSTOMER_TEMPLATE_ID: 'customer_confirmation_template',
  ADMIN_TEMPLATE_ID: 'admin_notification_template'
};

// Customer Confirmation Email Template (use this in EmailJS):
/*
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
*/

// Admin Notification Email Template (use this in EmailJS):
/*
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
*/

// Initialize EmailJS (call this in your main app)
export const initializeEmailJS = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.onload = () => {
    (window as any).emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  };
  document.head.appendChild(script);
};