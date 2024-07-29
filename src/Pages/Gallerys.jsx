import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Gallery from '../Components/Gallery';
import Nine from '../Picture/nine.png';
import Ten from '../Picture/ten.png';
import Eleven from '../Picture/eleven.png';
import Twelve from '../Picture/twelve.png';
import Footer from '../Components/Footer';

export default function Gallerys() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: true,
        });
    }, []);

    return (
        <div>
            <div className="reveal">
                <Gallery Nine={Nine} Ten={Ten} Eleven={Eleven} />
            </div>
            <div className="reveal">
                <Gallery Nine={Ten} Ten={Twelve} Eleven={Ten} />
            </div>
            <div className="reveal">
                <Gallery Nine={Nine} Ten={Ten} Eleven={Eleven} />
            </div>
            <div className="reveal">
                <Gallery Nine={Ten} Ten={Twelve} Eleven={Ten} />
            </div>
            <div className="reveal">
                <Gallery Nine={Nine} Ten={Ten} Eleven={Eleven} />
            </div>
            <Footer />
        </div>
    );
}
