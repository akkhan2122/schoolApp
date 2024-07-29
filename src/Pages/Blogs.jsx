import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Gallery from '../Components/Gallery';
import Notice1 from '../Picture/Notice1.jpeg';
import Notice2 from '../Picture/Notice2.jpeg';
import Notice3 from '../Picture/Notice3.jpeg';
import Footer from '../Components/Footer';

export default function Blogs() {
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
          Eleven={Notice3}
          Ten={Notice1}
        />
      </div>
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
          Eleven={Notice3}
          Ten={Notice1}
        />
      </div>
      <Footer />
    </div>
  );
}
