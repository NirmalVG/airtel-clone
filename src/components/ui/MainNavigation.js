import React, { useState } from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import LinkNav from "./LinkNav";

const MainNavigation = () => {
    const [prepaid, setPrepaid] = useState(false);
    const [postpaid, setPostpaid] = useState(false);
    const [broadband, setBroadband] = useState(false);
    const [dth, setDth] = useState(false);
    const [bank, setBank] = useState(false);
    const [airtelBlack, setAirtelBlack] = useState(false);
    const [help, setHelp] = useState(false);
    return (
        <>
            <div className="fixed-top">
                <LinkNav />
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="light"
                    variant="light"
                    className="bg-white"
                >
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">
                                <Image
                                    className="logo-img"
                                    src="images/airtel-logo.svg"
                                    alt="logo"
                                    fluid
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            Prepaid{" "}
                                            {prepaid ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={prepaid}
                                    onMouseEnter={() => setPrepaid(true)}
                                    onMouseLeave={() => setPrepaid(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Recharge
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            New Prepaid Sim
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <span className="dropdown-text">
                                            View Plans
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        <span className="dropdown-text">
                                            International Roaming
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">
                                        <span className="dropdown-text">
                                            Switch Prepaid to Postpaid
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">
                                        <span className="dropdown-text">
                                            Post to Airtel Prepaid
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            Postpaid{" "}
                                            {postpaid ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={postpaid}
                                    onMouseEnter={() => setPostpaid(true)}
                                    onMouseLeave={() => setPostpaid(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Pay Bill
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            Buy New Connection
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <span className="dropdown-text">
                                            View Plans
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        <span className="dropdown-text">
                                            Switch Prepaid to Postpaid
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">
                                        <span className="dropdown-text">
                                            Port to Airtel
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">
                                        <span className="dropdown-text">
                                            Free Sim Delivery
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            Broadband{" "}
                                            {broadband ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={broadband}
                                    onMouseEnter={() => setBroadband(true)}
                                    onMouseLeave={() => setBroadband(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Pay Bill / Recharge
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            Buy New Connection
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <span className="dropdown-text">
                                            View Plans
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            DTH{" "}
                                            {dth ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={dth}
                                    onMouseEnter={() => setDth(true)}
                                    onMouseLeave={() => setDth(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Recharge
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            Buy New DTH Connection
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <span className="dropdown-text">
                                            View Plans
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        <span className="dropdown-text">
                                            Upgrade Box
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">
                                        <span className="dropdown-text">
                                            Xstream
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">
                                        <span className="dropdown-text">
                                            Buy Second DTH Connection
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            Bank{" "}
                                            {bank ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={bank}
                                    onMouseEnter={() => setBank(true)}
                                    onMouseLeave={() => setBank(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            View Account
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            Get New Account
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <span className="dropdown-text">
                                            Add Money
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        <span className="dropdown-text">
                                            Know More
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase text-danger">
                                            Airtel Black{" "}
                                            {airtelBlack ? (
                                                <i class="fa-solid fa-angle-up"></i>
                                            ) : (
                                                <i class="fa-solid fa-angle-down"></i>
                                            )}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={airtelBlack}
                                    onMouseEnter={() => setAirtelBlack(true)}
                                    onMouseLeave={() => setAirtelBlack(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Pay Bill
                                        </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span className="dropdown-text">
                                            View Plans
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span className="hover-underline-animation nav-head my-auto text-uppercase">
                                            Help{" "}
                                            {help ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={help}
                                    onMouseEnter={() => setHelp(true)}
                                    onMouseLeave={() => setHelp(false)}
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <span className="dropdown-text">
                                            Contact Us
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Link to="/getapp" className="nav-link-sec">
                                    <i class="fa-solid fa-mobile-screen center"></i>
                                    <p className="nav-text">Get App</p>
                                </Link>
                                <Link to="/#!" className="nav-link-sec">
                                    <i class="fa-solid fa-store center"></i>
                                    <p className="nav-text">Store</p>
                                </Link>
                                <Link to="/#!" className="nav-link-sec">
                                    <i class="fa-solid fa-user center"></i>
                                    <p className="nav-text">Login</p>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Divider />
            </div>
        </>
    );
};
export default MainNavigation;
