'use client';

import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/lib/variants';

const Contact = () => {
  // State to hold form data, loading status, error, and success messages
  const [formData, setFormData] = useState({ email: '', name: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setSuccess(result.message);
        setFormData({ email: '', name: '', subject: '', message: '' });  // Reset form after successful submission
      } else {
        setError(result.message || 'An error occurred.');
        console.error('Server response error:', result);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Fetch error:', error);  // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='Contact' className='bg-[url(/contact/contact-bg.png)] py-28'>
      <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            let&apos;s work <br /> <span className='under-line'>together</span>
          </h1>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10'
        >
          {/* Email Input */}
          <input
            name='email'
            type='email'
            placeholder='Your email'
            required
            value={formData.email}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />

          {/* Name Input */}
          <input
            name='name'
            type='text'
            placeholder='Your name'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />

          {/* Subject Input */}
          <input
            name='subject'
            type='text'
            placeholder='Subject'
            required
            value={formData.subject}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />

          {/* Message Input */}
          <textarea
            name='message'
            placeholder='Your message'
            required
            value={formData.message}
            onChange={handleChange}
            className='mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          ></textarea>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-50 mt-12 flex items-center justify-between gap-x-2 rounded-full bg-blue px-4 py-3 transition-all duration-300 hover:bg-lighted hover:text-secondary hover:transition-all'
            disabled={loading}
          >
            <p className='text-md capitalize'>{loading ? 'Sending...' : 'Send Message'}</p>
            <Send className='h-5 w-5' />
          </button>

          {/* Display Error Message */}
          {error && <p className='text-red-500'>{error}</p>}

          {/* Display Success Message */}
          {success && <p className='text-green-500'>{success}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
