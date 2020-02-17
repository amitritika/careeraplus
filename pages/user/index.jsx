import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../components/Layout"
import Private from "../../components/auth/Private";
import { isAuth } from '../../actions/auth';
import UpdateProfileNavComponent from "../../components/user/UpdateProfileNavComponent"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const UserIndex = () => {
  const [values, setValues] = useState({
    name: "",
    photo:"",
    visualresume:"/visualresume",
    examplan: "/examplan",
    showvisualresume: false,
    showexamplan: false
    
  });
  
 const {name, photo, visualresume, examplan, showexamplan, showvisualresume} = values;
  
  const setPr = (data) => {
    
    
    if(data.visualresume !== "" || data.examplan.length !== 0){
      
      if(data.examplan.length !== 0 && data.visualresume !== ""){
        setValues({...values, name: data.name, photo: data.photo, visualresume:data.visualresume, showvisualresume: true, showexamplan: true});
      }else if(data.examplan.length == 0 && data.visualresume !== ""){
        setValues({...values, name: data.name, photo: data.photo, visualresume:data.visualresume, showvisualresume: true});
      }
      else {
        setValues({...values, name: data.name, photo: data.photo, showexamplan: true, examplan: "/user/mycalendar"});
      }
      
    }else{
      setValues({...values, name: data.name, photo: data.photo});
    }
    
  }
  return (
  <Layout>
      <Private>
        <div className="container">
          <div className = "mt-4 text-center h1"><img className = "profile-img" src = {photo}></img>{name}'s DashBoard</div>
          <Row>
          <UpdateProfileNavComponent pr = {setPr}/>
            <Col xs = "10">
              <Row>
                {showexamplan && <Col xs = "12" md = "6">
                  <Card body>
                    <CardTitle className="text-center">Exam Plan</CardTitle>
                    <CardText></CardText>
                    <a href = "/user/mycalendar" className = "btn btn-outline-primary">My Calendar</a>
                  </Card>
                </Col>}
                {showvisualresume && <Col xs = "12" md = "6">
                  <Card body>
                    <CardTitle className="text-center">Visual Resume</CardTitle>
                    <CardText></CardText>
                    <a href = {`${visualresume}`} className = "btn btn-outline-primary">My Resume</a>
                  </Card>
                </Col>}
                <Col xs = "12" md = "6">
                  <Card body>
                    <CardTitle className="text-center">Daily Test</CardTitle>
                    <CardText></CardText>
                    <a href = "/user/test/daily" className = "btn btn-outline-primary">Daily Test</a>
                    <a href = "/user/test/daily/today" className = "btn btn-outline-primary mt-2">Today's Test</a>
                  </Card>
                </Col>
              </Row>
               
            </Col>
            
          </Row>
        </div>
      </Private>
  </Layout>
)
}

export default UserIndex;