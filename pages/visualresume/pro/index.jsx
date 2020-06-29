import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/stylesheets/examplan/index.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import {isAuth} from "../../../actions/auth"
import Link from 'next/link'

const Examplan = () => {
  return (
    <Layout>
      <Private>
        <div className = "examplan">
          <h1>Choose Your Resume</h1>
          <Container>
            <Row>
              <Col xs="12" sm="12" md = "12" lg = "12">
                <a href = "/visualresume/pro/template1" className = "btn btn-lg btn-outline-primary menu-button">Template 1</a>
              </Col>
              <Col xs="12" sm="12" md = "12" lg = "12">
                <a href = "/visualresume/pro/template2" className = "btn btn-lg btn-outline-primary menu-button">Template 2</a>
              </Col>
          </Row>
            {!isAuth() && <h1>Please Signin to Visit Visual Resume Page</h1>}
          </Container>
        </div>
      </Private>
    </Layout>
  )
}

export default Examplan;