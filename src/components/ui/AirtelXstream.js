import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import xstream from "../../data/xstream";

const AirtelXstream = () => {
    return (
        <div className="xstream-section">
            <div className="xstream-shadow">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xl={12}>
                            <Image
                                src="images/xstream-logo.webp"
                                alt="xstream-logo"
                                className="xstream-logo"
                                fluid
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xl={12}>
                            <h4 className="xstream-head">
                                UNLOCK THE WORLD OF ENTERTAINMENT
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xl={12}>
                            <Image
                                src="images/airtel-xstream-banner.webp"
                                alt="xstream-banner"
                                className="xstream-img"
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="xstream-product-section">
                <Row>
                    {xstream.map((xstream) => (
                        <Col className="xstream-product-box" lg={4} md={12} sm={12} xl={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    "& > :not(style)": {
                                        m: 1,
                                        width: 340,
                                        height: 250,
                                    },
                                }}
                            >
                                <Paper elevation={3} className="xstream-paper">
                                    <div className="xstreme-box-head">
                                        {xstream.name}
                                    </div>
                                    <Image
                                        src={xstream.image}
                                        alt={xstream.name}
                                        className="xstream-poduct-img"
                                        fluid
                                    />
                                    <br />
                                    <Button
                                        variant="contained"
                                        className="xstream-btn"
                                    >
                                        {xstream.btn}
                                    </Button>
                                </Paper>
                            </Box>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AirtelXstream;
