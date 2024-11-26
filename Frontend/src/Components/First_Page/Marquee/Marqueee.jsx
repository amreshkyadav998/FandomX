import React from "react";
import './Marqueee.css';
import Marquee from "react-fast-marquee";

const Marqueee = () => {
 return (
    <div className="Marquee_container">
        <h1 className="title">Fan <span>Clubs</span></h1>
        <Marquee direction="right" speed={72} delay={3}>
            <div className="clientsImgs">
                <img src="/assets/l1.svg" alt="Client 1" className="clientImg" />
                <img src="/assets/l2.svg" alt="Client 2" className="clientImg" />
                <img src="/assets/l3.svg" alt="Client 3" className="clientImg" />
                <img src="/assets/l4.svg" alt="Client 4" className="clientImg" />
                <img src="/assets/l5.svg" alt="Client 5" className="clientImg" />
                <img src="/assets/l6.png" alt="Client 6" className="clientImg" />
                <img src="/assets/l7.svg" alt="Client 7" className="clientImg" />
                <img src="/assets/l8.svg" alt="Client 8" className="clientImg" />
                <img src="/assets/l9.svg" alt="Client 9" className="clientImg" />
            </div>
        </Marquee>
    </div>
 );
}

export default Marqueee;
