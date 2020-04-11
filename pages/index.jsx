import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from "../components/Layout";
import {useState, useEffect} from 'react';
import SigninComponent from "../components/auth/SigninComponent"
import { isAuth } from '../actions/auth';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
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
            <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
            <meta name="description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <link rel="canonical" href={`${DOMAIN}`} />
        </Head>
    );
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <div className="container1">
            <img src="images/main.jpg" className = "main-image"></img>
            <div className="line1">We help you to achieve your</div>
            <div className="line2">"Dream Career"</div>
            <div className="ruler"></div>
          </div>
          <div className = "main-page-signin container mt-2 text-center">
            {!isAuth() && <SigninComponent />}
            {(user.role == 1) && 
             <Row>
                <Col xs = "12">
                  <a href = "/admin/crud/test/daily/test" className = "btn btn-outline-primary btn-lg mt-4">Create Tests</a>
                </Col>
                <Col xs = "12">
                  <a href = "/admin/crud/blogs/blog" className = "btn btn-outline-primary btn-lg mt-4">Create Blogs</a>
                </Col>
            </Row>
              }
             {(user.role == 0) && 
             <Row>
                <Col xs = "12">
                  <a href = "/visualresume" className = "btn btn-outline-primary btn-lg mt-4">Visual Resume</a>
                </Col>
                <Col xs = "12">
                  <a href = "/examplan" className = "btn btn-outline-primary btn-lg mt-4">Examplan</a>
                </Col>
                <Col xs = "12">
                  <a href = "/user/tests" className = "btn btn-outline-primary btn-lg mt-4">Tests</a>
                </Col>
            </Row>
              }
          </div>
      </Layout>
    </React.Fragment>
  
)
}

export default Index;