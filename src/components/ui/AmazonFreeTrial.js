import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AmazonFreeTrial = () => {
    
    return (
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12} xl={6}>
                    <h1 className="trial-main-head">
                        <span className="trial-head">
                            Get 30-day free trial of
                            <br />
                            Prime Video{" "}
                        </span>
                        <span>
                            Mobile Edition
                            <br /> with your Airtel recharge
                        </span>
                    </h1>
                    <Button
                        variant="contained"
                        className="amazon-btn"
                    >
                        <span className="claim-btn"><span className="claim-text">CLAIM NOW </span><ArrowRightAltIcon className="arrow-icon" /></span>
                    </Button>
                </Col>
                <Col lg={6} md={12} sm={12} xl={6}>
                    <Image
                        src="images/airtel-thanks-app-banner-desktop.webp"
                        alt="Amazon Offer"
                        className="amazon-offer-img"
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AmazonFreeTrial;
