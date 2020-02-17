import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../components/Layout"
import Private from "../../../../../components/auth/Private";
import { isAuth } from '../../../../../actions/auth';
import UpdateProfileNavComponent from "../../../../../components/user/UpdateProfileNavComponent"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const UserIndex = () => {
  let date = new Date();
  
 // date = Date.now();
  
  const months = ["jan", "feb", "mar", "apr", "may", "jun","jul", "aug","sep","oct","nov","dec"];
  
  let str = (date.getDate()).toString() + "-" + months[date.getMonth()] + "-" + (date.getFullYear()).toString();
  return (
  <Layout>
      <Private>
        <div className="container">
          <div className = "mt-4 text-center h1">Today's Tests</div>
          <Row>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Aptitude</CardTitle>
                <CardText></CardText>
                <Button outline color="primary" onClick={() => {let test = "aptitude";
                                        let slug = "daily-"+ test + "-test-" + str;
                                        Router.replace(`/user/test/daily/${slug}`)}}>Take Test</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Private>
  </Layout>
)
}

export default UserIndex;
