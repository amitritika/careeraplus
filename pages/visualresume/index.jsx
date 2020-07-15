import React from 'react';
import {useEffect, useState} from 'react'
import Head from 'next/head';
import { Container, Row, Col} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"
import {isAuth} from "../../actions/auth"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import { payButtons} from '../../actions/payUMoney';
import renderHTML from 'react-render-html';


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
      <Layout>
      <div className = "examplan">
        <h1>Choose Your Resume</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "4" lg = "4" style= {{}}>
              <Card className="shadow p-3 mb-5 bg-white rounded ml-1 mr-1">
                <CardTitle>Fresher</CardTitle>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="Card image cap" />
                <CardBody>
									{(fresher.discount == 0) && <h1 className="card-title pricing-card-title">250 INR <small class="text-muted">/ yr</small></h1>}
									{(fresher.discount !== 0) && <p className="card-title pricing-card-title">{fresher.discount}% Discount</p>}
									{(fresher.discount !== 0) && <h2 className="card-title pricing-card-title"><del>250 INR<small class="text-muted">/ yr</small></del></h2>}
									{(fresher.discount !== 0) && <h1 className="card-title pricing-card-title">{fresher.price} INR <small class="text-muted">/ yr</small></h1>}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>1 Page Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Basic Layout</li>
                    <li>Layout Change Limited</li>
                    <li>Ideal For Fresher with No Experience</li>
                  </ul>
                  <Button onClick= {()=>{Router.push(`/visualresume/fresher`)}}>Templates</Button>
                  {!!isAuth() && <div>{renderHTML(fresher.button)}</div>}
                  {!isAuth() && <div className = "mt-4">
                    <Button color="info" disabled>Pay Now</Button>
                    <p>Signin to Pay</p>
                  </div>}
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="12" md = "4" lg = "4" style= {{}}>
              <Card className="shadow p-3 mb-5 bg-white rounded ml-1 mr-1">
                <CardTitle>Professional</CardTitle>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <CardBody>
                  {(pro.discount == 0) && <h1 className="card-title pricing-card-title">500 INR <small class="text-muted">/ yr</small></h1>}
									{(pro.discount !== 0) && <p className="card-title pricing-card-title">{pro.discount}% Discount</p>}
									{(pro.discount !== 0) && <h2 className="card-title pricing-card-title"><del>500 INR<small class="text-muted">/ yr</small></del></h2>}
									{(pro.discount !== 0) && <h1 className="card-title pricing-card-title">{pro.price} INR <small class="text-muted">/ yr</small></h1>}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>2 Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Professional Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 0-4 Years Professionls</li>
                  </ul>
                  <Button onClick= {()=>{Router.push(`/visualresume/pro`)}}>Templates</Button>
                  {!!isAuth() && <div>{renderHTML(pro.button)}</div>}
                  {!isAuth() && <div className = "mt-4">
                    <Button color="info" disabled>Pay Now</Button>
                    <p>Signin to Pay</p>
                  </div>}
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="12" md = "4" lg = "4" style= {{}}>
              <Card className="shadow p-3 mb-5 bg-white rounded ml-1 mr-1">
                <CardTitle>Expert</CardTitle>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
                <CardBody>
                  {(expert.discount == 0) && <h1 className="card-title pricing-card-title">1000 INR <small class="text-muted">/ yr</small></h1>}
									{(expert.discount !== 0) && <p className="card-title pricing-card-title">{expert.discount}% Discount</p>}
									{(expert.discount !== 0) && <h2 className="card-title pricing-card-title"><del>1000 INR<small class="text-muted">/ yr</small></del></h2>}
									{(expert.discount !== 0) && <h1 className="card-title pricing-card-title">{expert.price} INR <small class="text-muted">/ yr</small></h1>}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Unlimited Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Expert Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 4+ Years Professionals</li>
                  </ul>
                  <Button onClick= {()=>{Router.push(`/visualresume/expert`)}}>Templates</Button>
                  {!!isAuth() && <div>{renderHTML(expert.button)}</div>}
                  {!isAuth() && <div className = "mt-4">
                    <Button color="info" disabled>Pay Now</Button>
                    <p>Signin to Pay</p>
                  </div>}
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="12" md = "12" lg = "12">
              <a href = "/visualresume/fresher" className = "btn btn-outline-primary menu-button">Fresher</a>
            </Col>
            <Col xs="12" sm="12" md = "12" lg = "12">
              <a href = "/visualresume/pro" className = "btn btn-outline-primary menu-button">Professional</a>
            </Col>
            <Col xs="12" sm="12" md = "12" lg = "12">
              <a href = "/visualresume/expert" className = "btn btn-outline-primary menu-button">Experienced</a>
            </Col>
            
        </Row>
          {!isAuth() && <h1>Please Signin to Visit Visual Resume Page</h1>}
        </Container>
      </div>
    </Layout>
    </React.Fragment>
    
  )
}



export default Examplan; 