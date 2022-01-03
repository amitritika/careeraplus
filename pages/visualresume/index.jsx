import React from 'react';
import {useEffect, useState} from 'react'
import Head from 'next/head';
import {
	Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Router from "next/router";
import Layout1 from "../../components/Layout1"
import PricingVisualResume from "../../components/common/PricingVisualResume";
import FAQ from "../../components/common/FAQ";
import {visualresume} from "../../helpers/faq"
import {isAuth} from "../../actions/auth"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import { payButtons} from '../../actions/payUMoney';
import renderHTML from 'react-render-html';
import AOS from "aos";
import "aos/dist/aos.css";


const Examplan = () => {
  const desc = "Want to get shortlisted in your dream company for job interview. Use our easy to use resume builder tool for visual resume. Choose any resume template and download infinite times. Browse our latest designs for both freshers and Experiences professionals"
  const [fresher,  setFresher] = useState({
		button: "",
		discount: 0,
		price: 250
	});
  const [pro,  setPro] = useState({
		button: "",
		discount: 0,
		price: 500
	})
  const [expert,  setExpert] = useState({
		button: "",
		discount: 0,
		price: 1000
	})
	
	useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
	
	
  const head = () => (
        <Head>
            <title>
             Visual Resume | {APP_NAME}
            </title>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/visualresume`} />
            <meta property="og:title" content={`${APP_NAME} | Visual Resume`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/visualresume`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/image/visualresume`} />
            <meta property="og:image:secure_url" content={`${API}/image/visualresume`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  useEffect(()=>{
    let price =0
    payButtons("fresher").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 250 - (250 * (data.discount)/100);
					setFresher({button: data.button, price: price, discount: data.discount})
				}else{
					setFresher({button: data.button, price: 250, discount: data.discount})
				}
				
      }
		})
    
    payButtons("pro").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 500 - (500 * (data.discount)/100);
					setPro({button: data.button, price: price, discount: data.discount})
				}else{
					setPro({button: data.button, price: 500, discount: data.discount})
				}
      }
		})
    
     payButtons("expert").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 1000 - (1000 * (data.discount)/100);
					setExpert({button: data.button, price: price, discount: data.discount})
				}else{
					setExpert({button: data.button, price: 1000, discount: data.discount})
				}
      }
		})
    
    
    
  }, [])
  
  return (
    <React.Fragment>
      {head()}
      <Layout1>
      <PricingVisualResume />
				<FAQ faq = {visualresume}/>
    </Layout1>
    </React.Fragment>
    
  )
}



export default Examplan; 