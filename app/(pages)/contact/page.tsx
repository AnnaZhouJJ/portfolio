import ContactForm from '@/app/components/ContactForm';
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

// Server action
async function sendEmail(formData: FormData) {
  'use server';
  
  try {
    // Validate environment variables first
    if (!process.env.EMAILJS_SERVICE_ID || 
        !process.env.EMAILJS_TEMPLATE_ID || 
        !process.env.EMAILJS_PUBLIC_KEY || 
        !process.env.EMAILJS_PRIVATE_KEY) {
      console.error('Missing environment variables');
      throw new Error('Email service not properly configured');
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'origin': 'https://api.emailjs.com',
        'User-Agent': 'Mozilla/5.0',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          from_email: formData.get('email'),
          message: formData.get('message'),
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('EmailJS API Error:', errorData);
      throw new Error(`Email API error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false };
  }
}
//Tab title
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Get in touch with Anna Zhou",
};

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-24">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12 mt-16">
        <ContactForm onSubmit={sendEmail} />
      </div>
      <Footer />
    </div>
  );
}
  