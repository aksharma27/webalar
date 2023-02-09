import React from 'react'
import Card from 'react-bootstrap/Card';
import './Markekt.css';

const MarketCard = () => {
    return (
        <div className='marketcontainer' style={{ marginLeft: "48%", padding: '0px 0px' }}>
            <Card style={{ width: '360px', height: "229px", position: "absolute", border: "0px", padding: "2px 8px" }} >
                <Card.Body className='market'>
                    <img src="" alt="" style={{ width: "32px" }} />
                    <Card.Title style={{ fontFamily: "poppins", fontWeight: "700", lineHeight: "33px", color: "#fff", height: "33px", fontStyle: "none", fontSize: "22px", marginTop: "7px" }}>Market analysis</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text style={{ fontFamily: "Nunito", color: "#fff" }}>
                        Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                    <a href="" style={{ color: "#fff", textDecoration: "none", marginLeft: "0px", padding: "20px 5px" }}>Read more
                        <svg style={{ color: "white", marginLeft: "7px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </a>
                </Card.Body>

            </Card>
        </div>
    )
}

export default MarketCard
