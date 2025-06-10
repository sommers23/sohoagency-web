import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log("Assessment API route called");
    
    const formData = await request.json();
    console.log("Form data received:", formData);
    
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'noreply@sohoagency.co',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password'
      }
    });

    // Format the challenges array
    const challengesText = formData.challenges && formData.challenges.length > 0 
      ? formData.challenges.join('\n• ') 
      : 'None specified';

    // Create email content
    const emailContent = `
New Free Assessment Submission - Soho Agency

BUSINESS INFORMATION:
• Business Name: ${formData.businessName}
• Website URL: ${formData.websiteUrl}
• Contact Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

BUSINESS DETAILS:
• Primary Goal: ${formData.primaryGoal}
• Monthly Revenue Range: ${formData.monthlyRevenue || 'Not specified'}

CURRENT CHALLENGES:
• ${challengesText}

SUBMISSION DATE: ${new Date().toLocaleString()}

---
This assessment was submitted through the Soho Agency website.
Please follow up with this lead within 24 hours.
    `.trim();

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@sohoagency.co',
      to: 'info@sohoagency.co',
      subject: `New Assessment Submission - ${formData.businessName || formData.name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>').replace(/•/g, '&bull;')
    };

    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to info@sohoagency.co");

    // Also send confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL_USER || 'noreply@sohoagency.co',
      to: formData.email,
      subject: 'Thank you for your free assessment - Soho Agency',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Thank you for your interest in Soho Agency!</h2>
          <p>Hi ${formData.name},</p>
          <p>We've received your free e-commerce assessment submission and our AI is already analyzing your responses to prepare personalized insights.</p>
          
          <h3>What happens next?</h3>
          <ul>
            <li>AI-powered analysis of your business (within 2 hours)</li>
            <li>Custom strategy development (within 24 hours)</li>
            <li>Personal consultation call to discuss findings</li>
            <li>Implementation roadmap tailored to your goals</li>
          </ul>
          
          <p>You'll receive your custom strategy within 24 hours at this email address.</p>
          
          <p>If you have any immediate questions, feel free to reach out to us at <a href="mailto:info@sohoagency.co">info@sohoagency.co</a> or call us at (555) 123-4567.</p>
          
          <p>Best regards,<br>The Soho Agency Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            This email was sent because you submitted a free assessment on our website. 
            If you did not request this, please ignore this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(confirmationEmail);
    console.log("Confirmation email sent to user");

    return NextResponse.json({ 
      success: true, 
      message: 'Assessment submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing assessment:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit assessment. Please try again.' 
      },
      { status: 500 }
    );
  }
}