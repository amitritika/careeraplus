import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import { isAuth } from '../../../actions/auth';
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const UserIndex = () => {
 
  return (
  <Layout>
      <Private>
        <div className="container">
          <Row>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Exam Plan Tests</CardTitle>
                <CardText></CardText>
                <a href = "/user/mycalendar" className = "btn btn-outline-primary">Your Tests</a>
              </Card>
            </Col>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Daily Tests</CardTitle>
                <CardText></CardText>
                <a href = "/user/test/daily" className = "btn btn-outline-primary">Old Tests</a>
                <a href = "/user/test/daily/today" className = "btn btn-outline-primary mt-2">Today's Tests</a>
              </Card>
            </Col>
          </Row>
          {!isAuth() && <h1>Please Signin to Visit Tests Page</h1>}
        </div>
      </Private>
  </Layout>
)
}

export default UserIndex;