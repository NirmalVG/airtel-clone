import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LinkNav = () => {
    return (
        <div className="main-link-section">
            <Container>
                <Row>
                    <Col offset-6></Col>
                    <Col
                        className="link-section text-end"
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <p>
                            <a
                                href="#download"
                                className="link-download head-link"
                            >
                                Xsrtream
                            </a>
                            <a href="#bank" className="head-link">
                                Airtel Payments Bank
                            </a>
                            <a href="#wynk" className="head-link">
                                Wynk
                            </a>
                            <span style={{paddingLeft: "12px"}}> | </span>  
                            <a href="#personal" className="head-link personal">
                                Personal
                            </a>
                            <a href="#career" className="head-link">
                                Career
                            </a>
                            <a href="#business" className="head-link">
                                Business
                            </a>
                            <a href="#business" className="head-link">
                                Investor
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LinkNav;
