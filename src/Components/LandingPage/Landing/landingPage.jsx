import AboutTheApp from "../section-2/aboutTheApp";
import HeroSection from "../HeroSection/heroSection";
import GridSection from "../GridSection/gridSection";
import Slider from "../SliderSection/sliderSection";
import Founder from "../Founders/Founders";
import Faqs from "../FAQs/Faqs";
import PreFooter from "../FooterSection/preFooter";
import "./landingPage.css";

function Landing() {
    return (
        <>
            <section className='hero-bg'>
                <HeroSection />
                <AboutTheApp />
                <GridSection />
                <Slider />
                <Founder />
                <Faqs />
                <PreFooter />
            </section>

        </>
    )
}

export default Landing;