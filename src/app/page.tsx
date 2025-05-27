import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";

export default function Home() {
    return (
        <div className="p-8">
            <Hero />
            <About />
            <Services />
        </div>
    )
}
