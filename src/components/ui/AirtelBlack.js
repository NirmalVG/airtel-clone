import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AirtelBlack = () => {
    return (
        <div className="airtel-black-section">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <Image
                            src="images/airtel-black-white.svg"
                            alt="airtel-black"
                            className="airtel-black-img"
                            fluid
                        />
                        <p className="free-offer">
                            Enjoy first <b>30 days free</b> of a<br /> new
                            service with Airtel Black
                        </p>
                        <p className="airtel-black-text">
                            Airtel Black lets you combine (two or more services)
                            DTH, postpaid & fiber into one plan. Get a plan
                            that's perfect for you & your family.
                        </p>
                        <span className="airtel-black-btn">EXPLORE AIRTEL BLACK</span>
                    </Col>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <Image
                            src="images/airtel-black.webp"
                            alt="airtel-black"
                            className="airtel-black-fam"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AirtelBlack;
