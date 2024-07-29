import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Footer from '../Components/Footer';

export default function Support() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
      interval: 200,
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
      interval: 200,
    });

    sr.reveal('.reveal-top', {
      origin: 'top',
      interval: 200,
    });

    sr.reveal('.reveal-bottom', {
      origin: 'bottom',
      interval: 200,
    });
  }, []);

  return (
    <div>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center reveal-top">SUPPORT</h1>
        <div className="bg-white p-6 shadow-lg rounded-lg reveal-bottom">
          <form action="#" method="POST">
            <div className="mb-4 reveal-left">
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className="mb-4 reveal-right">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-6 reveal-left">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded reveal-bottom"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer className="reveal-bottom" />
    </div>
  );
}
