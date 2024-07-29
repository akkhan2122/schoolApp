import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Footer from '../Components/Footer';

export default function Attendence() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal-right', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right', // Animation originates from the right side
      reset: true,
    });
  }, []);

  return (
    <div>
      <div className="bg-zinc-100 dark:bg-zinc-800 min-h-screen">
        <div className="max-w-4xl mx-auto p-4">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg reveal-right">
            <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
              <caption className="p-5 text-lg font-semibold text-center text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-700">
                ATTENDENCE
                <p className="mt-1 text-sm font-normal text-zinc-500 dark:text-zinc-400">
                  Attendance details of the students
                </p>
              </caption>
              <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
                <tr>
                  <th scope="col" className="py-3 px-6">No</th>
                  <th scope="col" className="py-3 px-6">Name</th>
                  <th scope="col" className="py-3 px-6">ID</th>
                  <th scope="col" className="py-3 px-6">Status</th>
                  <th scope="col" className="py-3 px-6">Class</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                    <th scope="row" className="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="py-4 px-6">Anmol Malhotra</td>
                    <td className="py-4 px-6">ID1234568</td>
                    <td className="py-4 px-6">L</td>
                    <td className="py-4 px-6">B.A.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer className="reveal-right" />
    </div>
  );
}
