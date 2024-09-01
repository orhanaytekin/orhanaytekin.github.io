"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SOCIALS } from '../constants/socials';
import DraggableResizableComponent from './DraggableResizableComponent';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = 'This field is required';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'This field is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'This field is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      ).then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
    }
  };

  return (
    <DraggableResizableComponent>
      <section className="fade-in">
        <h2 className="text-3xl mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="mt-8">
          <h3 className="text-2xl mb-2">Connect with me</h3>
          <div className="flex">
            <a href={SOCIALS.linkedin}>LinkedIn</a>
            <a href={SOCIALS.github}>GitHub</a>
            <a href={SOCIALS.bento}>Bento</a>
            <a href={SOCIALS.medium}>Medium</a>
            <a href={SOCIALS.twitter}>Twitter</a>
            <a href={SOCIALS.goodreads}>Goodreads</a>
            <a href={SOCIALS.letterboxd}>Letterboxd</a>
            <a href={SOCIALS.spotify}>Spotify</a>
            <a href={SOCIALS.whatsapp}>WhatsApp</a>
            <a href={SOCIALS.gmail}>Gmail</a>
          </div>
        </div>
      </section>
    </DraggableResizableComponent>
  );
};

export default ContactSection;