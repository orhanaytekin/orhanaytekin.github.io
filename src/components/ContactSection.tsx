"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import TitleComponent from './TitleComponent';
import FormFieldComponent from './FormFieldComponent';
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
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
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
    <section className="grid-container fade-in">
      <TitleComponent text="Contact Me" />
      <form onSubmit={handleSubmit} className="grid-container">
        <div className="w-full max-w-4xl mx-auto space-y-6"> {/* Added space-y-6 for vertical spacing */}
          <DraggableResizableComponent>
            <FormFieldComponent
              label="Name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              className="w-full"
            />
          </DraggableResizableComponent>
          <DraggableResizableComponent>
            <FormFieldComponent
              label="Email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              className="w-full"
            />
          </DraggableResizableComponent>
          <DraggableResizableComponent>
            <FormFieldComponent
              label="Message"
              id="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              className="w-full"
            />
          </DraggableResizableComponent>
          <div className="flex justify-center pt-6"> {/* Added pt-6 for extra padding above the button */}
            <DraggableResizableComponent>
              <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Send Message
              </button>
            </DraggableResizableComponent>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;