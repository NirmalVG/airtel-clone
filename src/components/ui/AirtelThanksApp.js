import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AirtelThanksApp = () => {
    return (
        <div className="thanksapp-section">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} xl={6}>
                        <Image
                            src="images/download-app-img.png"
                            alt="download-app-img"
                            className="thanksapp-img"
                            fluid
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6} xl={6}>
                        <p className="experience">Experience the all new Airtel Thanks App</p>
                        <Image
                            src="images/airtel-thanks.svg"
                            alt="airtel-thanks"
                            className="hashtag-img"
                            fluid
                        />
                        <h4 className="thanksapp-text">
                            Get exclusive offers &<br />
                            account information at one place
                        </h4>
                        <p className="download-app-text">Download Airtel Thanks App on</p>
                        <div>
                            <Image
                                src="images/app-store-icon.webp"
                                alt="app-store-icon"
                                className="box-expand"
                                fluid
                            />
                            <Image
                                src="images/google-play-icon.webp"
                                alt="google-play-icon"
                                className="box-expand"
                                fluid
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AirtelThanksApp;
