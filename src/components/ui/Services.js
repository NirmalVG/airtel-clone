import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceBox from "./ServiceBox";
import services from "../../data/services";

const Services = () => {
    return (
        <div className="service-section">
            <Container>
                <h2 className="service-head">EXPERIENCE OUR SERVICES</h2>
                <Row>
                    {services.map((service) => (
                        <Col xl={2} lg={2} md={6} sm={6} >
                            <ServiceBox key={service.id} service={service} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
