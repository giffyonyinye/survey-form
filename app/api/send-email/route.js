// pages/api/send-email.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const data = await resend.emails.send({
        from: 'giffyonyinye@gmail.com', // Your verified sender email address
        to: 'helenjosie90@gmail.com', // Your verified
        subject: "Test",
        html: `<p>${message}</p>`, // HTML message body
      });

      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
