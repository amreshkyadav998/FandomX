import React from "react";
import './SponsorMarquee.css';
import Marquee from "react-fast-marquee";

const SponsorMarquee = () => {
 return (
    <div className="sponsor_container">
        <Marquee direction="left" speed={120} delay={3}>
            <div className="sponsor_images">
                <img src="/assets/spl1.png" alt="Sponsor 1" className="sponsor_img" />
                <img src="/assets/spl2.png" alt="Sponsor 2" className="sponsor_img" />
                <img src="/assets/spl3.png" alt="Sponsor 3" className="sponsor_img" />
                <img src="/assets/spl4.png" alt="Sponsor 4" className="sponsor_img" />
                <img src="/assets/spl5.png" alt="Sponsor 5" className="sponsor_img" />
                <img src="/assets/spl6.png" alt="Sponsor 6" className="sponsor_img" />
                <img src="/assets/spl7.png" alt="Sponsor 7" className="sponsor_img" />
                <img src="/assets/spl8.png" alt="Sponsor 8" className="sponsor_img" />
                <img src="/assets/spl9.png" alt="Sponsor 9" className="sponsor_img" />
            </div>
        </Marquee>
    </div>
 );
}

export default SponsorMarquee;
