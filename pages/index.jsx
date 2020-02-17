import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import {useState, useEffect} from 'react';
import SigninComponent from "../components/auth/SigninComponent"
import { isAuth } from '../actions/auth';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const Index = () => {
 const [user, setUser] = useState({role: 2})

 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
  
  return (
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
)
}

export default Index;