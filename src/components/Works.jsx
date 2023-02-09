import React from 'react'
import purplebubble from '../public/images/bubblepurple.png';
import bluesemi from '../public/images/semi2.png';
import play from '../public/images/playbubble.png';
import blue from '../public/images/bluebubble.png';
import semip from '../public/images/semi.png';
import semi from "../public/images/semipurplebubble.png";
const Works = () => {
    return (
        <div style={{ marginTop: "6%" }}>
            <img src={bluesemi} style={{ width: "99px", height: "52px", position: "absolute", left: "94%", right: "-16.65%", }} alt="" />
            <img src={purplebubble} alt="" style={{ width: "50px", height: "50px", marginTop: "2%", marginLeft: "10%" }} />
            <img src={purplebubble} alt="" style={{ width: "36px", height: "36px", marginTop: "2%", marginLeft: "60%" }} />
            <img src={play} style={{ marginLeft: "48%", width: "80px", height: "80px" }} alt="" />
            <h2 style={{ fontFamily: "Poppins", color: "#554D89", fontWeight: "700", fontSize: '28px', textAlign: 'center', marginTop: "2.4%" }} >How it works</h2>
            <img src={blue} style={{ width: "20px", marginLeft: "10%" }} alt="" />
            <p style={{ fontFamily: "Nunito", fontWeight: "400", fontSize: "18px", lineHeight: "28px", textAlign: 'center', color: "#5B5766" }} >This app does everything you could want it to do it <br /> is beautifully and extremely intuitive to use.</p>
            <img src={blue} style={{ marginLeft: "70%", width: "90px", marginTop: "-50px" }} alt="" />
            <img src={semip} style={{ marginLeft: "95%", width: "90px", marginTop: "-50px" }} alt="" />
            <img src={semi} alt="" style={{ width: "500px", marginTop: '-27px' }} />
        </div>
    )
}

export default Works;
