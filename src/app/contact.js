// src/app/contact.js
import React from 'react';
import { Mail, Send } from 'lucide-react';

function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl mx-auto p-8 bg-gray-900 rounded-xl border border-blue-500/20 shadow-2xl shadow-blue-500/20">
        <h2 className="text-3xl font-bold mb-6 text-center">Book a Free Call</h2>
        <p className="text-gray-300 text-center mb-8">Fill out the form below and we will get back to you shortly.</p>
        <form action="https://formspree.io/f/mblkkpyp" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm p-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm p-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea name="message" id="message" rows="4" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm p-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105">
            Send Message <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;