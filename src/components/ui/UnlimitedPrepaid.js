import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const UnlimitedPrepaid = () => {
    return (
        <div
            className="unlimit-section"
        >
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <span className="unlim-prepaid-plan">AIRTEL UNLIMITED PREPAID</span>
                        <div className="main-underline"></div>
                        <h4 className="unlim-head">TALK UNLIMITED</h4>
                        <p className="unlim-text">
                            Our best plans, our best prices, on the
                            <br />
                            best network
                        </p>
                        <Button variant="contained" className="unli-pre-btn">
                            VIEW PREPAID PACKS <ArrowRightAltIcon />
                        </Button>
                        <p className="note-text">*No IUC charges</p>
                    </Col>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <Image className="unlim-img" src="images/airtel-unlimited-talk.webp" alt="airtel-unlimited-talk" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UnlimitedPrepaid;
