import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Footer from '../Components/Footer';

export default function Tc() {
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
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-zinc-800 dark:text-white mb-6 reveal-left">
          T.C. REQUEST
        </h1>
        <div className="overflow-x-auto reveal-right">
          <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
            <thead className="text-xs text-zinc-700 uppercase bg-orange-200 dark:bg-orange-700 dark:text-zinc-200">
              <tr>
                <th scope="col" className="py-3 px-6">Time</th>
                <th scope="col" className="py-3 px-6">1</th>
                <th scope="col" className="py-3 px-6">2</th>
                <th scope="col" className="py-3 px-6">3</th>
                <th scope="col" className="py-3 px-6">4</th>
                <th scope="col" className="py-3 px-6">5</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(9)].map((_, index) => (
                <tr
                  key={index}
                  className={`bg-orange-100 dark:bg-orange-900 ${
                    index % 2 === 0 ? 'reveal-left' : 'reveal-right'
                  }`}
                >
                  <td className="py-4 px-6">8:00 - 8:30</td>
                  <td className="py-4 px-6">7A</td>
                  <td className="py-4 px-6">7A</td>
                  <td className="py-4 px-6">RC</td>
                  <td className="py-4 px-6">7A</td>
                  <td className="py-4 px-6">7A</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
