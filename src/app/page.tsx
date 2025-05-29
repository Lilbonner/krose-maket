import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import WhoWeAre from "@/app/components/WhoWeAre";
import Pricing from "@/app/components/Pricing";
import OurExpertise from "@/app/components/OurExpertise";
import VideoComp from "@/app/components/Video-comp";
import HowWeWork from "@/app/components/HowWeWork";
import Marquee from "@/app/components/Marquee";
import WhatWeDo from "@/app/components/WhatWeDo";
import News from "@/app/components/news";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="p-8">
            <Hero />
            <About />
            <Services />
            <WhoWeAre />
            <Pricing />
            <OurExpertise />
            <VideoComp />
            <HowWeWork />
            <Marquee />
            <WhatWeDo />
            <News />
            <Footer />
        </div>
    )
}
