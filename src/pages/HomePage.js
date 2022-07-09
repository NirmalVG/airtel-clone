import React from "react";
import Banner from "../components/ui/Banner";
import WynkAd from "../components/ui/WynkAd";
import Services from "../components/ui/Services";
import Postpaid from "../components/ui/Postpaid";
import AirtelBlack from "../components/ui/AirtelBlack";
import UnlimitedPrepaid from "../components/ui/UnlimitedPrepaid";
import PortToAirtel from "../components/ui/PortToAirtel";
import AirtelXstream from "../components/ui/AirtelXstream";
import AirtelThanksApp from "../components/ui/AirtelThanksApp";
import RechargeSection from "../components/ui/RechargeSection";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <RechargeSection />
            <Services />
            <AirtelBlack />
            <Postpaid />
            <PortToAirtel />
            <AirtelXstream />
            <UnlimitedPrepaid />
            <WynkAd />
            <AirtelThanksApp />
        </main>
    );
};

export default HomePage;
