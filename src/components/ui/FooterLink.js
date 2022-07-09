import React from "react";
import { Image } from "react-bootstrap";
import BackTopSection from "./BackTopSection";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterLink = () => {
    return (
        <footer class="bg-white text-center text-lg-start">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-capitalise fw-bold">
                                Quick Access
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Airtel Black Bill Payment</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Prepaid Recharge</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Postpaid Bill Payment</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">DTH Recharges</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Broadband Payment</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Exciting Offers</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Airtel Payment Bank</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Airtel Thanks App</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Free Sim Delivery</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Telecom Tariff</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Rights Issue</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">QIP & FCCB Issue</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Terms and Conditions</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Airtel blogs</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-capitalise fw-bold">
                                Help at Hand
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Find a store</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Check Coverage</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Ownership Transfer</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Manage your Account</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">ISP Near Me</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Wync Music</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Broadband FAQs</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">DTH FAQs</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Airtel Xtream FAQs</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Postpaid FAQs</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Stores near me</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">DTH Consumer Corner</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-capitalise fw-bold">
                                New Connections
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Buy DTH New Connection</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Buy Prepaid New Connection</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Buy Broadband New Connection</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Buy Airtel Black Plan</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Buy Xstream Box</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Switch to Airtel</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">International Roaming</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-capitalise fw-bold">
                                About Airtel
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Brand</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Career</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Partner</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Business</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">About Airtel</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Press Release</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Investor Support</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Telecom Charter</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Airtel Community</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                            <BackTopSection />
                            <div className="footer-icon-pack">
                                <FacebookIcon
                                    className="social-icon facebook"
                                    fontSize="large"
                                />
                                <LinkedInIcon
                                    className="social-icon linkedin"
                                    fontSize="large"
                                />
                                <TwitterIcon
                                    className="social-icon twitter"
                                    fontSize="large"
                                />
                                <YouTubeIcon
                                    className="social-icon youtube"
                                    fontSize="large"
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom-link container row">
                        <a href="#!" className="foot-text text-reset">
                            IMPORTANT ALERTS
                        </a>
                        <a href="#!" className="foot-text text-reset">
                            PRIVACY POLICY
                        </a>
                        <a href="#!" className="foot-text text-reset">
                            COOKIE NOTICE
                        </a>
                        <a href="#!" className="foot-text text-reset">
                            DLT REGISTRATION FOR COMMERCIAL COMMUNICATION
                        </a>
                        <a href="#!" className="foot-text text-reset">
                            DO NOT DISTURB LIST
                        </a>
                        <a href="#!" className="foot-text text-reset">
                            CONTACT US
                        </a>
                        <span className="footer-img-sec">
                            <Image
                                src="images/bsi-assurance-iso.webp"
                                alt="BSI"
                                className="assurance"
                            />
                            <Image
                                src="images/norton-certificate.webp"
                                alt="Norton"
                                className="norton"
                            />
                        </span>
                    </div>
                    <div className="container row mt-3 copyright">
                        © 2022 Airtel India. All Rights Reserved.
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default FooterLink;
