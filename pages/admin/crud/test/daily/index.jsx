import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../components/Layout"
import Admin from "../../../../../components/auth/Private";
import { isAuth } from '../../../../../actions/auth';
import UpdateProfileNavComponent from "../../../../../components/user/UpdateProfileNavComponent"
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
            <Col xs = "4">
              <Card body>
                <CardTitle className="text-center">Aptitude</CardTitle>
                <CardText></CardText>
                <Button onClick={() => {let test = "aptitude";
                                        Router.replace(`/admin/crud/test/daily/list/${test}`)}}>List</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Admin>
  </Layout>
)
}

export default UserIndex;
