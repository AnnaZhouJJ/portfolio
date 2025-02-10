'use client';

import { FormEvent, useState } from 'react';
import Footer from "@/app/components/Footer";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-24">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {"Let's get in touch!"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label htmlFor="firstName" className="block text-lg text-gray-700 mb-2">
                First name <span className="text-gray-700">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-lg text-gray-700 mb-2">
                Last name <span className="text-gray-700">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
              Email <span className="text-gray-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
              Write a message <span className="text-gray-700">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
  