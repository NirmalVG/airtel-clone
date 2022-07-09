import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Box, Paper } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const Postpaid = () => {
    return (
        <div className="postpaid-section">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="postpaid heading">POSTPAID</div>
                        <div className="main-underline under-color"></div>
                        <h4 className="postpaid-head">
                            AIRTEL POSTPAID
                            <br />
                            STARTING AT ₹499
                        </h4>
                        <p className="postpaid-offers">
                            Unlimited calling, 75GB data, Amazon prime,
                            <br />
                            Airtel Xstream and many more.
                        </p>
                        <span className="choose">Choose from our</span>
                        <br />
                        <span className="best-selling">
                            Best selling Postpaid plans
                        </span>
                        <div className="postpaid-box">
                            <div className="postpaid-box-sec">
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        "& > :not(style)": {
                                            m: 1,
                                            width: 128,
                                            height: 128,
                                        },
                                    }}
                                >
                                    <Paper
                                        elevation={3}
                                        className="price-box box-expand"
                                    >
                                        <span className="rental">
                                            Monthly Rental of
                                        </span>
                                        <br />
                                        <span className="price">₹999</span>
                                        <br />
                                        <span className="buy-name">
                                            Buy Now
                                        </span>
                                    </Paper>
                                </Box>
                            </div>
                            <div className="postpaid-box-sec">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    "& > :not(style)": {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                }}
                            >
                                <Paper
                                    elevation={3}
                                    className="price-box box-expand"
                                >
                                    <span className="rental">
                                        Monthly Rental of
                                    </span>
                                    <br />
                                    <span className="price">₹499</span>
                                    <br />
                                    <span className="buy-name">Buy Now</span>
                                </Paper>
                            </Box>
                            </div>
                            <div className="postpaid-box-sec">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    "& > :not(style)": {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                }}
                            >
                                <Paper
                                    elevation={3}
                                    className="price-box text-start box-expand"
                                >
                                    <span>
                                        <ViewComfyIcon />
                                    </span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span className="buy-name view">
                                        View
                                        <br /> More
                                    </span>
                                </Paper>
                            </Box>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Image
                            src="images/airtel-postpaid.webp"
                            alt="airtel-postpaid"
                            className="postpaid-img"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Postpaid;
