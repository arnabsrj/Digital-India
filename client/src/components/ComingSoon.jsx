import React, { useState } from 'react';
// import axios from 'axios';
import Countdown from './Countdown';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await axios.post('http://localhost:5000/api/subscribers', { email });
      setMessage(res.data.msg);
      setEmail('');
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse-slow">
          Something Amazing Is Coming Soon
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          We're working hard to launch our new website. Subscribe to get notified when we go live!
        </p>
        
        <Countdown targetDate="2023-12-31T00:00:00" />
        
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow max-w-md"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Notify Me'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 font-medium ${message.includes('Successfully') ? 'text-green-300' : 'text-red-300'}`}>
              {message}
            </p>
          )}
        </div>
        
        <div className="mt-16 flex justify-center space-x-6">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition duration-300 transform hover:-translate-y-1"
              aria-label={social}
            >
              <i className={`fab fa-${social} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 text-sm opacity-70">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default ComingSoon;