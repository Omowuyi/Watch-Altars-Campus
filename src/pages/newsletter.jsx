import Layout from "../Layout";
import TopHeader from "../Sections/Header/TopHeader";
import Component from "../banner/animated-banner";
import '../banner/styles/globals.css';

import WatchersHeader from "../Sections/Header/Watchers";
import Header from "../Sections/Header/Header";
import NewsletterBanner from "../Sections/Banner/NewsletterBanner/NewsletterBanner";
import ChatbotBanner from "../Sections/Banner/ChatbotBanner/ChatbotBanner";
import SassTwoBanner from "../Sections/Banner/SassTwoBanner/SassTwoBanner";
import TopNotch from "../Sections/SassLandingTwo/TopNotch/TopNotch";
import SassWhyChoseUs from "../Sections/SassLanding/SassWhyChoseUs/SassWhyChoseUs";
import PowerfullTemplate from "../Sections/SassLanding/PowerfullTemplate/PowerfullTemplate";
import NewsletterBrand from "../Sections/Newsletter/NewsletterBrand/NewsletterBrand";
import EmailMarketing from "./../Sections/Newsletter/EmailMarketing/EmailMarketing";
import NewsletterFeatures from "../Sections/Newsletter/NewsletterFeatures/NewsletterFeatures";
import EmailBuilder from "../Sections/Newsletter/EmailBuilder/EmailBuilder";
import DevAPI from "../Sections/Newsletter/DevAPI/DevAPI";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";
import NewsletterTemplate from "../Sections/Newsletter/NewsletterTemplate/NewsletterTemplate";
import NewsletterTestimonial from "../Sections/Newsletter/NewsletterTestimonial/NewsletterTestimonial";
import NewsletterIntegration from "../Components/Integration/NewsletterIntegration";
import NewsletterFooter from "../Sections/Footer/NewsletterFooter";

const Newsletter = () => {
  return (
    <Layout pageTitle="Watcher's Church">
      <div className="newsletter-bg">
        
        <Component />
       
        <SassWhyChoseUs />
        
        <PowerfullTemplate />
        <DevAPI />
        <FeatureTeam />
        <NewsletterTemplate />
        <NewsletterTestimonial />
        <NewsletterIntegration />
        <NewsletterFooter />
      </div>
    </Layout>
  );
};

export default Newsletter;
