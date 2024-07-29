import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import About from '../Components/About';
import Footer from '../Components/Footer';

export default function Abouts() {
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
        ScrollReveal().reveal('.reveal-top', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'top',
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
            <body className="bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
                <div
                    className="relative w-full h-screen md:h-screen bg-cover bg-center reveal-bottom"
                    style={{
                        backgroundImage: "url(https://s3-alpha-sig.figma.com/img/3e60/3c0f/e79b40790d831dee5fb48dfdc2cfdaab?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qTV~mDgPPQR-f7LZ-v11jxp5W6wsorhHoxaGuodGQImRFzC1PEkkR~zFkDFpEdHrQJ5x1wN1ZlePnYHrKHJv4WzasCWZ0nM5Itu8JWXZ8JgD0sMNv8O7PJtxA2YBgHj1XR4Lv2PdwnUMrJR4MqPP4B2cIveIRylGaRo16C8YIlFMiwX~v3w9l3uZmvRIz-K0bTLe4SDNwL9-fd1TIfGR0O~kEsvK6WpPanWpZ0Exc4P4lQqzJ96RhNrl-7UHUxTpzgr-0cjq3k0PyeVkFob0WNH6RiwTULpeHcT0ilSnUK3PnLR7klRLxfdykjWVndLrr4btk3vRawHWO8q0DjlIMA__)",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                    <div className="absolute top-1/4 left-1/4 md:left-1/3 p-4 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold">Take student experience to the next level</h2>
                        <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </div>
                </div>
            </body>
            <About />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-center text-2xl font-semibold mb-6 reveal-left">Rules And Regulations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow reveal-left">
                        <div className="p-4 bg-orange-100 dark:bg-orange-500 rounded-full mb-3">
                            <i className="fa-solid fa-ticket"></i>
                        </div>
                        <h3 className="text-lg font-medium">New Admissions</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow reveal-right">
                        <div className="p-4 bg-orange-100 dark:bg-orange-500 rounded-full mb-3">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <h3 className="text-lg font-medium">Procedure for Withdrawal</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow reveal-top">
                        <div className="p-4 bg-orange-100 dark:bg-orange-500 rounded-full mb-3">
                            <i className="fa-solid fa-hands-praying"></i>
                        </div>
                        <h3 className="text-lg font-medium">School Fees</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow reveal-bottom">
                        <div className="p-4 bg-orange-100 dark:bg-orange-500 rounded-full mb-3">
                            <i className="fa-solid fa-volume-high"></i>
                        </div>
                        <h3 className="text-lg font-medium">Examination and Promotions</h3>
                    </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mt-6 text-center reveal-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem in at? Sed et enim vitae eveniet, praesentium natus commodi. Unde architecto veritatis quidem quos debitis minima, labore maxime, cum quas numquam tempore sapiente repellat quae vitae. Commodi sit ad sapiente consectetur et similique delectus velit voluptate fugiat, voluptatem aut culpa temporibus deserunt tenetur! Vitae amet sint cum sapiente soluta!
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 mt-6 text-center reveal-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem in at? Sed et enim vitae eveniet, praesentium natus commodi. Unde architecto veritatis quidem quos debitis minima, labore maxime, cum quas numquam tempore sapiente repellat quae vitae. Commodi sit ad sapiente consectetur et similique delectus velit voluptate fugiat, voluptatem aut culpa temporibus deserunt tenetur! Vitae amet sint cum sapiente soluta!
                </p>
            </div>
            <Footer />
        </div>
    );
}
