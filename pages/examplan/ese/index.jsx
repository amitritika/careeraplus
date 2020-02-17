import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import '../../../public/stylesheets/examplan/index.css';
import {isAuth} from "../../../actions/auth"

const EseExamplan = () => {
  return (
    <Layout>
      <div className = "examplan">
        <h1>Choose Your Branch</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese/mechanical" className = "btn btn-outline-primary menu-button">Mechanical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
             <a href = "/examplan/ese/civil" className = "btn btn-outline-primary menu-button">Civil</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese/electronics" className = "btn btn-outline-primary menu-button">Electronics & Communication</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese/electrical" className = "btn btn-outline-primary menu-button">Electrical</a>
            </Col>
        </Row>
           {!isAuth() && <h1>Please Signin to Visit Calendar Page</h1>}
        </Container>
      </div>
    </Layout>
  )
}

export default EseExamplan;