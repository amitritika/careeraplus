
import Head from 'next/head';
import Layout1 from "../components/Layout1";
import Layout from '../components/Layout';
import Hero from '../components/common/Hero';
import About from '../components/common/About';
import Services from '../components/common/Services';
import Portfolio from '../components/common/Portfolio';
import PricingVisualResume from '../components/common/PricingVisualResume';
import FAQ from '../components/common/FAQ';
import {main} from "../helpers/faq"
import {useState, useEffect} from 'react';
import SigninComponent from "../components/auth/SigninComponent"
import { isAuth } from '../actions/auth';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
 const [user, setUser] = useState({role: 2})

 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
  
  const head = () => (
        <Head>
            <title>
              {APP_NAME}
            </title>
            <meta name="description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/image/main`} />
            <meta property="og:image:secure_url" content={`${API}/image/main`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <React.Fragment>
      {head()}
        <Layout1>
          <Hero />
            <About />
        <Services />
        <Portfolio />
        <PricingVisualResume />
        <FAQ faq = {main}/>
          <div className = "main-page-signin container mt-2 text-center">
            {!isAuth() && <SigninComponent />}
             
          </div>
      </Layout1>
    </React.Fragment>
  
)
}

export default Index;