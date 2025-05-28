import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import WhoWeAre from "@/app/components/WhoWeAre";
import Pricing from "@/app/components/Pricing";

export default function Home() {
    return (
        <div className="p-8">
            <Hero />
            <About />
            <Services />
            <WhoWeAre />
            <Pricing />
        </div>
    )
}
