import ServiceProcess from "../components/AboutUs/ServiceProcess";
import OfferProductReview from "../components/AboutUs/OfferProductReview.jsx";
import OfferBag from "../components/AboutUs/OfferBag.jsx";
import NewsletterSection from "../components/closetProducts/NewsletterSection.jsx";

const About = () => {

    return (
        <div className="mt-10">
            <ServiceProcess />
            <OfferBag />
            <OfferProductReview />
            <NewsletterSection />
        </div>
    );
};



export default About;
