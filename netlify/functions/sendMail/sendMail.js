const axios = require("axios");

exports.handler = async (event, context) => {
  const API_KEY = process.env.MAIL_API_KEY;

  const SENDER_EMAIL = 'contact@postersglobal.com'; 
  const mail = JSON.parse(event.body);

  const data = new URLSearchParams({
    'apikey': API_KEY,
    'subject': 'subject',
    'from': SENDER_EMAIL,
    'to': 'contact@postersglobal.com',
    'bodyHtml': `
        <div style="text-align: center; padding: 10px; border-bottom: 1px solid #eee;">
            <h2>Support Request</h2>
        </div>
        <div style="padding: 20px 0;">
            <p><strong>From:</strong> ${mail.name}</p>
            <p><strong>Email:</strong> ${mail.email}</p>
            <p><strong>Subject:</strong> ${mail.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${mail.message}</p>
        </div>
        <div style="text-align: center; border-top: 1px solid #eee; padding: 10px; font-size: 12px; color: #666;">
            This is an automated message sent from the Contact Us form. Please do not reply directly to this email.
        </div>
    `,
    'isTransactional': true
  });

  try {
    const response = await axios.post('https://api.elasticemail.com/v2/email/send', data);
    console.log(response.data);
    // Handle response here
  } catch (error) {
    console.error(error);
    // Handle error here
  }
};