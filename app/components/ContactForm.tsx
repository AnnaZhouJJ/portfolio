'use client';

import { useState } from 'react';

interface ContactFormProps {
  onSubmit: (formData: FormData) => Promise<{ success: boolean }>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const result = await onSubmit(formData);
      setStatus(result.success ? 'success' : 'error');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
          <svg 
            className="w-8 h-8 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Thank you for your message!
        </h2>
        <p className="text-gray-800 text-lg">
          {"Your message was sent successfully. I'll get back to you soon!"}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        {"Let's get in touch!"}
      </h1>
      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
              First name <span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
              Last name <span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-gray-900"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email <span className="text-gray-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Write a message <span className="text-gray-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-gray-900 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 
            transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Submit'}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again. You can also email me at <a href="annauiuxdesign@gmial.com" className="text-blue-500 hover:text-blue-600">annauiuxdesign@gmail.com</a>.
          </p>
        )}
      </form>
    </>
  );
} 