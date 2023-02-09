import React from 'react'
import '../public/css/Hero.css';
import heroimg from "../public/images/image.png";
import herobg from "../public/images/z1.png";
import HeroCards from './subcomponents/HeroCards';
import AuditCard from './subcomponents/AuditCard';
import MarketCard from './subcomponents/MarketCard';
const Hero = () => {
    return (
        <>
            <div style={{ marginLeft: '-10%' }} id="hero">
                <hero>
                    <h style={{ color: "#554D89", fontWeight: "700", fontSize: "50px", lineHeight: "60px" }}>
                        Realize your <br /> full potential
                    </h>
                    <p style={{ padding: "10px 0s", fontFamily: "Nunito", color: "#5B5766", fontWeight: "400", margin: "20px 0px" }}>We help our clients make realize <br /> their most important business goals.</p>
                </hero>
                <button style={{ fontFamily: "Poppins", padding: "7px 22px", fontSize: "13px", letterSpacing: "0.5px", borderRadius: "50px" }} >Contact us</button>
                <a href="#" style={{ color: "#554D89", textDecoration: "none" }}>Order similar</a> <svg style={{ color: "#554D89", fontSize: "20px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>

            <img src={heroimg} style={{ width: "660px", height: "632px", top: "241px", left: "877px", marginLeft: "4.5%", marginTop: "50px", zIndex: "10", position: "absolute" }} alt="" />
            <img src={herobg} style={{ width: "530px", height: "632px", top: "241px", left: "877px", marginLeft: "51.5%", marginTop: "10%", zIndex: "-10", transform: "rotate(20deg)" }} alt="" />
            <br />

            <button className='button' style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", justifyItems: "center" }}>
                <a href="#cards">
                    <svg style={{ color: "white", width: "25px", height: "50px", marginRight: "19px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </a>
            </button>

            <div id='cards' className='cards' style={{ marginLeft: "14%", marginTop: "7%" }}>
                <HeroCards /> <AuditCard /> <MarketCard />
            </div>
        </>
    )
}

export default Hero;
