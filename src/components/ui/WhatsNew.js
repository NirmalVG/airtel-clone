import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";

const WhatsNew = () => {
    return (
        <Carousel variant="dark" controls={false} className="slider-banner">
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col offset-1></Col>
                        <Col lg={5} md={12} sm={12} xl={5}>
                            <Image
                                className="sliding-img d-block w-100"
                                src="images/whats-new-app-1.png"
                                alt="First slide"
                                fluid
                            />
                        </Col>
                        <Col lg={5} md={12} sm={12} xl={5}>
                            <h4 className="slider-head">Whats New ?</h4>
                            <div className="whats-new-under main-underline under-color under-length"></div>
                            <Image
                                src="images/myairtel-app-airtel-thanks-icon-1.png"
                                className="slider-thanks"
                                fluid
                            />
                            <ul className="feature-text-sec">
                                <li className="feature-text whats-new-text">
                                    Become an #airtelThanks Silver, Gold or
                                    Platinum member
                                </li>
                                <li className="feature-text whats-new-text">
                                    Enjoy exclusive rewards, offers and
                                    privileges
                                </li>
                            </ul>
                        </Col>
                        <Col offset-1></Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col offset-1></Col>
                        <Col lg={5} md={12} sm={12} xl={5}>
                            <Image
                                className="sliding-img d-block w-100"
                                src="images/whats-new-app-2.png"
                                alt="First slide"
                                fluid
                            />
                        </Col>
                        <Col lg={5} md={12} sm={12} xl={5}>
                            <h4 className="slider-head">Whats New ?</h4>
                            <div className="whats-new-under main-underline under-color under-length"></div>
                            <p className="slider-text whats-new-text">
                                Super Special Packs starting at just{" "}
                            </p>
                            <ul className="feature-text-sec">
                                <li className="feature-text whats-new-text">
                                    Get life insurance cover worth Rs. 4 Lakh
                                </li>
                                <li className="feature-text whats-new-text">
                                    Enjoy Amazon Prime at no extra cost
                                </li>
                            </ul>
                        </Col>
                        <Col offset-1></Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default WhatsNew;
