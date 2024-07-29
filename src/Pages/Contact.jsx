import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import myPic1 from "../Picture/first.png";
import Contacts from '../Components/Contacts';
import Footer from '../Components/Footer';

export default function App() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal-left', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'left',
            reset: true,
        });
        ScrollReveal().reveal('.reveal-right', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'right',
            reset: true,
        });
        ScrollReveal().reveal('.reveal-bottom', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: true,
        });
    }, []);

    return (
        <div>
            <div className="min-h-screen bg-white dark:bg-zinc-800">
                <section className="flex flex-col md:flex-row items-center justify-between p-8 reveal-bottom">
                    <div className="md:w-1/2 mb-8 md:mb-0 mx-4 md:mx-20 reveal-left">
                        <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">
                            hp School, Ahmedabad Belongs To The navjyoti Education Society, Gujatat, A Religious And Charitable Registered Body, Under The Registration Act Of Xxi 1860 And The Article 29 And 30 Of The Constitution Of India. It Is Under The Patronage Of The Catholic Bishop Of henny larze, Who Also Is Its President. hp school.
                        </h1>
                    </div>
                    <div className="md:w-1/2 reveal-right">
                        <img src={myPic1} className="w-full" />
                    </div>
                </section>
            </div>
            <Contacts className="reveal-bottom" />
            <Footer className="reveal-bottom" />
        </div>
    );
}
