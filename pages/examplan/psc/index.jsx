import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import '../../../public/stylesheets/examplan/index.css';
import {isAuth} from "../../../actions/auth"

const PscExamplan = () => {
  return (
    <Layout>
      <div className = "examplan">
        <h1>Choose Your Branch</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/psc/mppschindi" className = "btn btn-outline-primary menu-button">MPPSC Hindi</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/psc/mppscenglish" className = "btn btn-outline-primary menu-button">MPPSC English</a>
            </Col>
        </Row>
          {!isAuth() && <h1>Please Signin to Visit Calendar Page</h1>}
        </Container>
      </div>
    </Layout>
  )
}

export default PscExamplan;