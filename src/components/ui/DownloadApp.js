import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const DownloadApp = () => {
    return (
        <div className="download-app-section">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} xl={6} className="download-sec">
                        <h3 className="download-sec-head">Download The App</h3>
                        <p className="download-sec-text">
                            The application is available for the iOS &<br />
                            Android smartphones
                        </p>
                        <div className="download-play-app">
                            <Image
                                src="images/download_app.png"
                                alt="Download App"
                                style={{ cursor: "pointer" }}
                                fluid
                            />
                            <Image
                                src="images/download_googleplay.png"
                                alt="Download Google Play"
                                style={{ cursor: "pointer" }}
                                fluid
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <div style={{ paddingLeft: "50px" }}>
                            <h3 className="scan-qr">Scan QR code</h3>
                            <p className="scan-qr-text">
                                Scan QR code to download Airtel
                                <br />
                                Thanks App
                            </p>
                        </div>
                        <div className="qr-img-sec">
                            <Image
                                src="images/app_qr_code.png"
                                alt="App QR Code"
                                className="qr-img"
                                fluid
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DownloadApp;
