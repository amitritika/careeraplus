import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../components/Layout"
import Admin from "../../../../components/auth/Private";
import { isAuth } from '../../../../actions/auth';
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const UserIndex = () => {
  
  return (
  <Layout>
      <Admin>
        <div className="container">
          <div className = "mt-4 text-center h1">Daily Tests List</div>
          <Row>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Aptitude</CardTitle>
                <CardText></CardText>
                <Button outline color="primary" onClick={() => {let test = "aptitude";
                                        Router.replace(`/user/test/daily/list/${test}`)}}>List</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Admin>
  </Layout>
)
}

export default UserIndex;
