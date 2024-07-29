import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Footer from '../Components/Footer';

export default function Payfees() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal('.reveal', { interval: 200 });
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-10 reveal">PAYFEES</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-8 reveal">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">Payment</h2>
              <form>
                <div className="mt-4">
                  <label className="block text-zinc-700 dark:text-zinc-200">Pay With</label>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="paymentType" value="card" checked />
                      <span className="ml-2">Card</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="paymentType" value="bank" />
                      <span className="ml-2">Bank</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="paymentType" value="transfer" />
                      <span className="ml-2">Transfer</span>
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-zinc-700 dark:text-zinc-200">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9101 1121"
                    className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-200">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-200">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" checked />
                    <span className="ml-2 text-zinc-700 dark:text-zinc-200">Save card details</span>
                  </label>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Pay USD 29.99
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-8 reveal">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">Payment</h2>
              <form>
                <div className="mt-4">
                  <label className="block text-zinc-700 dark:text-zinc-200">Pay With</label>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="paymentType" value="card" checked />
                      <span className="ml-2">Card</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="paymentType" value="bank" />
                      <span className="ml-2">Bank</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="paymentType" value="transfer" />
                      <span className="ml-2">Transfer</span>
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-zinc-700 dark:text-zinc-200">Enter your 4-digit pin to confirm this payment</label>
                  <div className="mt-1 grid grid-cols-4 gap-4">
                    <input
                      type="password"
                      maxLength="1"
                      className="block w-full h-16 rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                    <input
                      type="password"
                      maxLength="1"
                      className="block w-full h-16 rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                    <input
                      type="password"
                      maxLength="1"
                      className="block w-full h-16 rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                    <input
                      type="password"
                      maxLength="1"
                      className="block w-full h-16 rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Confirm Payment
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
