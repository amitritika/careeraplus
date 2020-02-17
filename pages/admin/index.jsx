import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../components/Layout"
import Admin from "../../components/auth/Admin";
import { isAuth } from '../../actions/auth';
import UpdateProfileNavComponent from "../../components/user/UpdateProfileNavComponent"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const AdminIndex = () => {
 
  return (
  <Layout>
      <Admin>
        <div className="container">
          <div className = "mt-4 text-center h1">Admin Dashboard</div>
          <Row>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Daily Test</CardTitle>
                <CardText></CardText>
                <a href = "/admin/crud/test/daily/test" className = "btn btn-outline-primary">Create</a>
                <a href = "/admin/crud/test/daily" className = "btn btn-outline-primary mt-2">List</a>
              </Card>
            </Col>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Category</CardTitle>
                <CardText></CardText>
                <a href = "/admin/crud/blogs/category-tag" className = "btn btn-outline-primary">Create</a>
              </Card>
            </Col>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Tags</CardTitle>
                <CardText></CardText>
                <a href = "/admin/crud/blogs/category-tag" className = "btn btn-outline-primary">Create</a>
              </Card>
            </Col>
            <Col xs = "12" md = "6">
              <Card body>
                <CardTitle className="text-center">Blogs</CardTitle>
                <CardText></CardText>
                <a href = "/admin/crud/blogs/blog" className = "btn btn-outline-primary">Create</a>
                <a href = "/admin/crud/blogs/blogs" className = "btn btn-outline-primary mt-2">Update/Delete</a>
              </Card>
            </Col>
          </Row>
        </div>
      </Admin>
  </Layout>
)
}

export default AdminIndex;