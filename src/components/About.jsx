import React from 'react'
import girlimg from '../public/images/girl.png';
const About = () => {
    return (
        <div className='container' style={{ padding: "10px 0" }}>
            <h2 style={{ fontFamily: "Poppins", fontWeight: "700", marginLeft: "50%", marginTop: "39%", color: "#554D89", lineHeight: "42px" }}>
                Get the ultimate tool and <br /> learn how to grow your <br /> audience

            </h2>
            <p style={{ textAlign: "left", padding: "15px 10%", marginLeft: "40%", fontFamily: "Nunito", color: "#716C80", lineHeight: "28px", fontStyle: "normal", fontWeight: "400", fontSize: "18px" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web.
            </p>
            <img src={girlimg} style={{ width: "495px", height: "600px", top: "1502px", left: "421px", marginTop: "-29%" }} alt="" />

        </div>
    )
}

export default About
