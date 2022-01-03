
import Layout from '../../components/Layout';
import Hero from '../../components/common/Hero';
import About from '../../components/common/About';
import Services from '../../components/common/Services';
import Portfolio from '../../components/common/Portfolio';
import PricingVisualResume from '../../components/common/PricingVisualResume';
import FAQ from '../../components/common/FAQ';
import {main} from "../../helpers/faq"
import {useState, useEffect} from 'react';
import { FaRegIdBadge, FaRegCalendarAlt, FaEnvelope, FaBlog, FaLayerGroup} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Index = () => {
  
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <Layout>
            <Hero />
            <About />
        <Services />
        <Portfolio />
        <PricingVisualResume />
        <FAQ faq = {main}/>
        </Layout>
    );
};

export default Index;