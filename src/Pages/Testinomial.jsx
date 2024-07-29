import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Test from '../Picture/test.png';
import TwoCards from '../Components/TwoCards';
import Footer from '../Components/Footer';

export default function Testinomial() {
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
            <div className="flex flex-col md:flex-row items-center p-4 bg-white reveal-left">
                <div className="flex-1">
                    <img src={Test} alt="Illustration" className="max-w-full h-auto" />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:ml-4">
                    <h2 className="text-4xl font-bold text-zinc-800 mb-2">Testimonials</h2>
                    <p className="text-zinc-600">
                        By school, Ahmedabad belongs to the navigation education society, a private, religious and charitable registered body, under the registration act of 1860 and the article 29 and 30 of the constitution of India. It is under the patronage of the catholic bishop of Ahmedabad, who also is its president, its school.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center reveal-bottom">Testimonials</h2>
            <p className="text-zinc-600 mb-8 text-center reveal-bottom">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

            <div className="reveal-right">
                <TwoCards />
            </div>
            <div className="reveal-left">
                <TwoCards />
            </div>
            <div className="reveal-right">
                <TwoCards />
            </div>
            <Footer />
        </div>
    );
}
