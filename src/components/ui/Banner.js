import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImages from "../../data/bannerImages";

const Banner = () => {
    return (
        <Carousel variant="dark" className="banner">
            {bannerImages.map((banner) => (
                <Carousel.Item key={banner.id}>
                    <img
                        className="d-block w-100"
                        src={banner.image}
                        alt={banner.name}
                        fluid
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;
