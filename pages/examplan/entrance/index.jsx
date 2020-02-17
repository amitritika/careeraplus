import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import '../../../public/stylesheets/examplan/index.css';


const GateExamplan = () => {
  return (
    <Layout>
      <div className = "examplan">
        <h1>Choose Your Branch</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <Button outline color="primary" size="md" onClick = {() => {Router.push("/examplan/entrance/jee")}}>JEE</Button>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <Button outline color="primary" size="md">NEET</Button>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <Button outline color="primary" size="md">NDS</Button>
            </Col>
        </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default GateExamplan;