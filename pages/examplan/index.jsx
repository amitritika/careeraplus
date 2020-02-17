import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"


const Examplan = () => {
  return (
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
  )
}

export default Examplan;