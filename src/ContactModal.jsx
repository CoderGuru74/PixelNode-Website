import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { X, Mail } from 'lucide-react';

const ContactModal = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          onClose(); // Close modal on success
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 animate-modal-fade-in">
      <div className="bg-gray-900 border border-blue-500/50 rounded-xl p-8 max-w-lg w-full mx-4 relative animate-modal-slide-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white">Book a Free Call</h3>
          <p className="text-gray-400">Fill out the form below and we will get back to you shortly.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" name="from_name" required className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" name="from_email" required className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;