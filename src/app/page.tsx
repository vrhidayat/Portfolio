// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import About from "./about";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import Contact from "./contact";

export default function Portfolio() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <About />
            {/* <Clients /> */}
            {/* <Skills /> */}
            <Projects />
            {/* <Resume /> */}
            {/* <Testimonial />
            <PopularClients /> */}
            <Contact />
            <Footer />
        </>
    );
}
