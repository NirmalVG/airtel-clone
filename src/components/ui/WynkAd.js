import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const WynkAd = () => {
    return (
        <div className="wynk-section">
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12} className="mt-5 mb-5">
                        <Image
                            className="wynk-img"
                            src="images/wynk-music.webp"
                            alt="wync-music"
                            fluid
                        />
                    </Col>
                    <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        className="mt-5 mb-5"
                    >
                        <div className="wynk-head">WYNK MUSIC</div>
                        <div className="main-underline under-color"></div>
                        <div className="free-music">GET FREE MUSIC</div>
                        <div className="listen">
                            Listen to your favourites on Wynk Music
                        </div>
                        <Button variant="contained" className="wync-btn">
                            Explore Wynk <ArrowRightAltIcon />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WynkAd;
