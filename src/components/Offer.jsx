import React from 'react'
import man from '../public/images/man.png'

const Offer = () => {
    return (
        <div style={{ height: "742px", left: "20.31%" }} >
            <h2 style={{ marginTop: "15%", marginLeft: "20.31%", fontFamily: "Poppins", fontWeight: "700", fontSize: "28px", lineHeight: "42px", color: "#554D89" }}>
                We offer a full range of digital <br /> marketing services
            </h2>
            <p style={{ marginLeft: "20.31%", paddingRight: "52.4%", fontFamily: "Nunito", fontWeight: "400", fontSize: "18px", lineHeight: "28px", color: "#716C80" }} >
                Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free.
            </p>

            <div className="links" style={{ margin: "3% 20%" }}>
                <button style={{ padding: "7px 20px", borderRadius: "50px" }}>
                    View prices
                </button>
                <a href="#" style={{ color: "#554D89", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }} >More info
                    <svg style={{ marginLeft: "5px", color: "#554D89" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </a>
            </div>

            <img src={man} alt="" style={{ width: "633px", height: '742px', marginTop: "-28%", marginLeft: "53%" }} />
        </div>
    )
}

export default Offer
