import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';
import Notice1 from '../Picture/Notice1.jpeg';
import Notice2 from '../Picture/Notice2.jpeg';
import Notice3 from '../Picture/Notice3.jpeg';

export default function NoticeBoard(props) {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal('.gallery-reveal', { interval: 200 });
  }, []);

  return (
    <div>
      <div className="gallery-reveal">
        <Gallery
          Nine={Notice1}
          Ten={Notice2}
          Eleven={Notice3}
        />
      </div>
      <div className="gallery-reveal">
        <Gallery
          Nine={Notice2}
          Ten={Notice1}
          Eleven={Notice3}
        />
      </div>
      <Footer />
    </div>
  );
}
