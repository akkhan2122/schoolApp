import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import myPic1 from "../Picture/first.png";
import About from '../Components/About';
import Cards1 from '../Picture/cards1.jpeg';
import Cards2 from '../Picture/cards2.jpeg';
import Cards3 from '../Picture/cards3.jpeg';
import Cards from "../Components/Cards";
import TwoCards from '../Components/TwoCards';
import Footer from "../Components/Footer";
import Contacts from './Contacts';
import { Link } from 'react-router-dom';

export default function Home() {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true
    });

    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-800">
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      
      <div className="min-h-screen">
        <section className="flex flex-col md:flex-row items-center justify-between p-8">
          <div className="md:w-1/2 mb-8 md:mb-0 mx-20 reveal-left">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white">Welcome!!</h1>
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white my-10">Best Learning <br /> Opportunities</h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">Our goal is to make online education work for everyone</p>
            <div className="mt-6">
              <button className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                <Link to="/Abouts"> About Us</Link>
              </button>
              <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded">
                <Link to="/Contact">Contact Us </Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 reveal-right">
            <img src={myPic1} className="w-full" />
          </div>
        </section>
      </div>

      <div className="reveal-bottom">
        <About />
      </div>

      <div className="bg-white dark:bg-zinc-800 p-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 gap-32 reveal-top">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm relative overflow-hidden reveal-left">
            <div className="absolute -right-12 top-6 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -left-12 -bottom-6 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative">
              <img src={Cards1} alt="Teacher" className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-center text-lg font-semibold mt-2">Teacher</h3>
              <p className="text-center text-zinc-600 dark:text-zinc-300 mt-2">
                My dear students, you are privileged to be a member of this big family at our school. As a student of this school, you should also contribute to your learning, making this alma mater of yours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm relative overflow-hidden reveal-bottom">
            <div className="absolute -right-12 top-6 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -left-12 -bottom-6 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative">
              <img src={Cards2} alt="Principal" className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-center text-lg font-semibold mt-2">Principal</h3>
              <p className="text-center text-zinc-600 dark:text-zinc-300 mt-2">
                My dear students, you are privileged to be a member of this big family at our school. As a student of this school, you should also contribute to your learning, making this alma mater of yours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm relative overflow-hidden reveal-right">
            <div className="absolute -right-12 top-6 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -left-12 -bottom-6 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative">
              <img src={Cards3} alt="Manager" className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-center text-lg font-semibold mt-2">Manager</h3>
              <p className="text-center text-zinc-600 dark:text-zinc-300 mt-2">
                My dear students, you are privileged to be a member of this big family at our school. As a student of this school, you should also contribute to your learning, making this alma mater of yours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal-top">
        <Cards />
      </div>

      <div className="bg-zinc-100">
        <div className="reveal-bottom">
          <TwoCards />
          <Contacts />
        </div>
      </div>

      <div className="reveal-top">
        <Footer />
      </div>
    </div>
  );
}
