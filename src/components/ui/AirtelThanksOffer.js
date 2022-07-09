import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AirtelThanksOffer = () => {
    return (
        <div className="thanks-offer-section">
            <Container>
                <Row>
                    <h2 className="thanks-offer-head">Become an #airtelThanks member to get</h2>
                </Row>
                <Row>
                    <Col lg={4} md={12} sm={12} xl={4}>
                        <Image
                            src="images/become-member.png"
                            alt="Exclusive Rewards"
                            className="img-center"
                            fluid
                        />
                        <h5 className="offer-text">Exclusive Rewards</h5>
                    </Col>
                    <Col lg={4} md={12} sm={12} xl={4}>
                        <Image
                            src="images/become-member-2.png"
                            alt="Personalised Offers"
                            className="img-center"
                            fluid
                        />
                        <h5 className="offer-text">Personalised Offers</h5>
                    </Col>
                    <Col lg={4} md={12} sm={12} xl={4}>
                        <Image
                            src="images/become-member.png"
                            alt="Never-seen-before"
                            className="img-center"
                            fluid
                        />
                        <h5 className="offer-text">
                            Never-seen-before prevelages
                        </h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AirtelThanksOffer;
