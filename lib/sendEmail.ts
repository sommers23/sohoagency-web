import nodemailer from 'nodemailer';

export async function sendEmail({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: 'info@sohoagency.co',
      pass: process.env.EMAIL_PASS, // Set in .env.local
    }
  });

  const mailOptions = {
    from: '"Soho Agency" <info@sohoagency.co>',
    to: 'your@email.com', // Your destination
    subject: `New Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
}
