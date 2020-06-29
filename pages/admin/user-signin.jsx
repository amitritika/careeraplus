import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../components/Layout"
import Admin from "../../components/auth/Admin";
import DateComponent from "../../components/DateComponent"
import { adminUserLogin, authenticate } from '../../actions/auth';
import { createTest } from "../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const UserAdd = () => {
  const [values, setValues] = useState({
    useremail: "",
    email: "",
    password:""
  });
  
  const {useremail, email, password} = values;
  
 
 
  const handleChange = n => e => {
    setValues({ ...values, [n]: e.target.value});
    
  };

  
  const createLogin = () => {
    let user = {
      user_email: useremail,
      email: email,
      password: password
    }
    adminUserLogin(user).then(data=>{
        if (data.error) {
                
            } else{
              authenticate(data, () => {
                    Router.push(`/`);
                });
            }
        
      
      
    });
  }
  
  return (
  <Layout>
        <div className="container">
          <div className="form-group">
            <label className="lead">User Email</label>
					  <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("useremail")}>
            </input>
            <label className="lead">Admin Email</label>
					  <input 
              type = "email"
              className="form-control"
              onChange= {handleChange("email")}>
            </input>
           
            <label className="lead">Password</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("password")}>
            </input>
          </div>
          <Button className = "btn btn-lg" color = "primary" onClick = {createLogin}>Sigin</Button>
        </div>
  </Layout>
)
}

export default UserAdd;