import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PortToAirtel = () => {
    return (
        <div className="port-section">
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12} className=" mt-5 mb-5">
                        <Image
                            src="images/airtel-international-roaming.webp"
                            alt="airtel-international-roaming"
                            className="port-img"
                            fluid
                        />
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="mt-5 mb-5">
                        <div className="port-head">PORT TO AIRTEL</div>
                        <div className="main-underline"></div>
                        <h4 className="port-text">
                            SWITCH TO AIRTEL WITHOUT
                            <br /> CHANGING YOUR MOBILE
                            <br /> NUMBER
                        </h4>
                        <Button variant="contained" className="port-btn">
                            VIEW PLANS <ArrowRightAltIcon />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortToAirtel;
