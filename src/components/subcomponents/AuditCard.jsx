import React from 'react'
import Card from 'react-bootstrap/Card';
import audit from "../../public/images/audit.png";

const AuditCard = () => {
    return (
        <div style={{ marginLeft: "24%" }}>
            <Card style={{ width: '360px', height: "229px", background: "#fff", position: "absolute", boxShadow: "0px 0px 20px #E1E4ED", border: "0px", padding: "10px 8px" }} >
                <Card.Body>
                    <img src={audit} alt="" style={{ width: "32px" }} />
                    <Card.Title style={{ fontFamily: "poppins", fontWeight: "700", lineHeight: "33px", color: "#554D89", height: "33px", fontStyle: "none", fontSize: "22px", marginTop: "28px" }}>Audit & Evaluation</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text style={{ fontFamily: "Nunito" }}>
                        Bring to the table win-win survival strategies to ensure proactive
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default AuditCard
