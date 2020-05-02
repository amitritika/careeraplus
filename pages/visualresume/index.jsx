import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"
import {isAuth} from "../../actions/auth"

const Examplan = () => {
  return (
    <Layout>
      <div className = "examplan">
        <h1>Choose Your Resume</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "12" lg = "12">
              <a href = "/visualresume/fresher" className = "btn btn-outline-primary menu-button">Fresher</a>
            </Col>
            <Col xs="12" sm="12" md = "12" lg = "12">
              <a href = "/visualresume/expert" className = "btn btn-outline-primary menu-button">Experienced</a>
            </Col>
        </Row>
          {!isAuth() && <h1>Please Signin to Visit Visual Resume Page</h1>}
        </Container>
      </div>
    </Layout>
  )
}

export default Examplan;