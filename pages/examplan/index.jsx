import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Examplan = () => {
  
  const desc = "We provide Exam Plan for any Exam with Data Analytics and Previous Year Papers Analysis. This Exam Plan Tool generates time table for GATE, ESE, PSC, UPSC, JEE, NEET"
  
  const head = () => (
        <Head>
            <title>
             Exam plan | {APP_NAME}
            </title>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/examplan`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/examplan`} />
            <meta property="og:site_name" content={`${APP_NAME} | Exam Plan`} />

            <meta property="og:image" content={`${API}/image/examplan`} />
            <meta property="og:image:secure_url" content={`${API}/image/examplan`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  return (
    <React.Fragment>
      {head()}
      <Layout>
      <div className = "examplan">
        <h1>Choose Your Goal</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate" className = "btn btn-outline-primary menu-button">GATE</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese" className = "btn btn-outline-primary menu-button">ESE</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/psc" className = "btn btn-outline-primary menu-button">PSC</a>
            </Col>
        </Row>
        </Container>
      </div>
    </Layout>
    </React.Fragment>
    
  )
}

export default Examplan;