import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';  // Import motion

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          event: '',
          date: '',
          time: '',
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12" id="seva">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Book Seva & Bhajana
          </span>
        </h1>
      </div>
      
      {/* Apply motion for animation */}
      <motion.form
        className="w-full max-w-lg mx-auto bg-transparent bg-opacity-50 rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}  // Set initial state (invisible)
        animate={{ opacity: 1 }}  // Set animate state (visible)
        transition={{ duration: 1 }}  // Animation duration
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="date">
              Preferred Date
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Time field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="time">
              Preferred Time
            </label>
            <input
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="time"
              type="time"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" htmlFor="event">
              Select Seva and Bhajana
            </label>
            <select
              className="appearance-none block w-full bg-slate-900 bg-opacity-50 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-75"
              id="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="Seva1">Seva 1</option>
              <option value="Seva2">Seva 2</option>
              <option value="Bhajana1">Bhajana 1</option>
              <option value="Bhajana2">Bhajana 2</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="w-full md:w-auto bg-blue-500 bg-opacity-75 hover:bg-opacity-100 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </motion.form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Form;
