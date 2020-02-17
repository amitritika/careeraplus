import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import '../../../public/stylesheets/examplan/index.css';
import {isAuth} from "../../../actions/auth"


const GateExamplan = () => {
  return (
    <Layout>
      <div className = "examplan">
        <h1>Choose Your Branch</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/mechanical" className = "btn btn-outline-primary menu-button">Mechanical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/civil" className = "btn btn-outline-primary menu-button">Civil</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/electronics" className = "btn btn-outline-primary menu-button">Electronics & Communication</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/computerscience" className = "btn btn-outline-primary menu-button">Computer Science</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
             <a href = "/examplan/gate/electrical" className = "btn btn-outline-primary menu-button">Electrical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/chemical" className = "btn btn-outline-primary menu-button">Chemical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/instrumentation" className = "btn btn-outline-primary menu-button">Instrumentation</a>
            </Col>
        </Row>
          {!isAuth() && <h1>Please Signin to Visit Calendar Page</h1>}
        </Container>
      </div>
    </Layout>
  )
}

export default GateExamplan;