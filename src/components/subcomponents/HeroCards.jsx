import React from 'react'
import Card from 'react-bootstrap/Card';

const HeroCards = () => {
    return (
        <div>
            <Card style={{ width: '360px', height: "229px", background: "#fff", position: "absolute", boxShadow: "0px 0px 20px #E1E4ED", border: "0px", padding: "10px 8px" }} >
                <Card.Body>
                    <div className="circle" style={{ borderRadius: "100%", border: "2px solid #6852ED", width: "32px", height: "32px", marginLeft: "2px", padding: "2 5px" }}>
                        <svg style={{ color: "#6852ED", fontWeight: "700" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                        </svg>
                    </div>
                    <Card.Title style={{ fontFamily: "poppins", fontWeight: "700", lineHeight: "33px", color: "#554D89", height: "33px", fontStyle: "none", fontSize: "22px", marginTop: "28px" }}>Corporate finance</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text style={{ fontFamily: "Nunito" }}>
                        Leverage agile frameworks to provide a robust synopsis
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default HeroCards;
