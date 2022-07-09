import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AppFeatures = () => {
    return (
        <>
            <div className="tv-section">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <h4 className="feature-head">Live TV</h4>
                            <div className="main-underline under-color under-length"></div>
                            <ul className="feature-text-sec">
                                <li className="feature-text">
                                    Watch trending favourites
                                </li>
                                <li className="feature-text">
                                    Enjoy movies, online series & more with
                                    Airtel TV
                                </li>
                                <li className="feature-text">
                                    Download & play unlimited songs on Wynk
                                    Music
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <Image
                                src="images/play-app-1.png"
                                alt="Live TV"
                                className="img-right"
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home-section">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <Image
                                src="images/home-app-1.png"
                                alt="Home"
                                className="img-left"
                                fluid
                            />
                        </Col>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <h4 className="feature-head">Home</h4>
                            <div className="main-underline under-color under-length"></div>
                            <ul className="feature-text-sec">
                                <li className="feature-text">
                                    Upfront account info for easy access
                                </li>
                                <li className="feature-text">
                                    Personalised offers to make you feel special
                                </li>
                                <li className="feature-text">
                                    Timely reminders to ensure you never run out
                                    of services
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bank-section">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <h4 className="feature-head">Bank</h4>
                            <div className="main-underline under-color under-length"></div>
                            <ul className="feature-text-sec">
                                <li className="feature-text">
                                    Enjoy exciting offers on banking with us
                                </li>
                                <li className="feature-text">
                                    Make instant payment with your Airtel UPI
                                </li>
                                <li className="feature-text">
                                    Get cashbacks on bills, utilities &
                                    recharges
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <Image
                                src="images/payment-bank-app-1.png"
                                alt="Bank"
                                className="img-right"
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AppFeatures;
