import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import SkillsCards from '../Components/SkillsCards';
import One from '../Picture/one.jpeg';
import Two from '../Picture/Two.jpeg';
import Three from '../Picture/Three.jpeg';
import Four from "../Picture/four.jpeg";
import Five from "../Picture/five.jpeg";
import Sic from "../Picture/sic.jpeg";
import Seven from "../Picture/seven.jpeg";
import Eight from "../Picture/eight.jpeg";
import Footer from '../Components/Footer';

export default function Staff() {
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
            <div
                className="relative w-full h-screen md:h-80 lg:h-96 bg-cover bg-center text-center flex items-center justify-center dark:bg-zinc-800 reveal-bottom"
                style={{
                    backgroundImage: "url(https://s3-alpha-sig.figma.com/img/1822/762f/91f32ab6b0746022069de5d5bf0c75a4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SLdKoayvbUXvDUKiFFK4fu77JZ26qHksTKF5ZA~mcNQvpvf-Roy2Js5l9Y3iiAu~bJphiLmJVo7zxyJRhYxgkBnR3ZlsH512zSX99n5G~4HG5mRWONQhwQg~yA8ft3QoKvGE9r4QrPMx6e5FDBgljeamh~htG-4K2i9P-olPqSplQl~MdRji1~IlovJzL17kEIR55goiwQNdhFI8i8q2lv~lqzkToB7o8c1gPJDmZOHxSGa6HBVE0jjoplJqq65tq~LxD6rIFpk8fUOYIR6QSYF9DwAfUmz0-fEnK~cCft7heH5NcG6Ek~6AWzZAjqvDCom~OFrPwiIFrwP9izTXTQ__)"
                }}
            >
                <h2 className="text-black dark:text-zinc-200 text-xl md:text-2xl lg:text-3xl font-semibold">
                    Take staff experience to the next level
                </h2>
            </div>
            <div className="reveal-left">
                <SkillsCards One={One} Two={Two} Three={Three} />
            </div>
            <div className="reveal-right">
                <SkillsCards One={Four} Two={Five} Three={Sic} />
            </div>
            <div className="reveal-top">
                <SkillsCards One={Sic} Two={Seven} Three={Eight} />
            </div>
            {/* Uncomment and add reveal class if you want to animate this paragraph */}
            {/* <p className="text-zinc-600 dark:text-zinc-300 mt-6 text-center reveal-bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem in at? Sed et enim vitae eveniet, praesentium natus commodi. Unde architecto veritatis quidem quos debitis minima, labore maxime, cum quas numquam tempore sapiente repellat quae vitae. Commodi sit ad sapiente consectetur et similique delectus velit voluptate fugiat, voluptatem aut culpa temporibus deserunt tenetur! Vitae amet sint cum sapiente soluta!
            </p> */}
            <Footer />
        </div>
    );
}
