import React from "react";
import AmazonFreeTrial from "../components/ui/AmazonFreeTrial";
import DownloadApp from "../components/ui/DownloadApp";
import AirtelThanksOffer from "../components/ui/AirtelThanksOffer";
import AppFeatures from "../components/ui/AppFeatures";
import WhatsNew from "../components/ui/WhatsNew";

const GetAppPage = () => {
    return (
        <main>
            <AmazonFreeTrial />
            <AirtelThanksOffer />
            <WhatsNew />
            <AppFeatures />
            <DownloadApp />
        </main>
    );
};

export default GetAppPage;
