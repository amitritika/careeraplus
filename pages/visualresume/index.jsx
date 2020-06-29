import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"
import {isAuth} from "../../actions/auth"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
const Examplan = () => {
  const desc = "Want to get shortlisted in your dream company for job interview. Use our easy to use resume builder tool for visual resume. Choose any resume template and download infinite times. Browse our latest designs for both freshers and Experiences professionals"
  
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
  
  return (
    <React.Fragment>
      {head()}
      <Layout>
      <div className = "examplan">
        <h1>Choose Your Resume</h1>
        <Container>
          <Row>
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