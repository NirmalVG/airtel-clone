import React from "react";
import { BackTop } from "antd";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackTopSection = () => {
    return (
        <>
            <span className="back-to-top">
                <BackTop>BACK TO TOP <ArrowCircleUpIcon /></BackTop>
            </span>
        </>
    );
};

export default BackTopSection;
