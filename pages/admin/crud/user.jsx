import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../components/Layout"
import Admin from "../../../components/auth/Admin";
import DateComponent from "../../../components/DateComponent"
import { getCookie, createLoginAdmin } from '../../../actions/auth';
import { createTest } from "../../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const UserAdd = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password:""
  });
  
  const {name, email, password} = values;
  
  const token = getCookie("token");
 
  const handleChange = n => e => {
    setValues({ ...values, [n]: e.target.value});
    
  };

  
  const createLogin = () => {
    let user = {
      name: name,
      email: email,
      password: password
    }
    createLoginAdmin(token, user).then((res, err)=>{
      if(err){
        console.log(err);
      }else{
        
        Router.replace(`/admin`)
      }
      
    });
  }
  
  return (
  <Layout>
      <Admin>
        <div className="container">
          <div className="form-group">
            <label className="lead">Name</label>
					  <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("name")}>
            </input>
            <label className="lead">Email</label>
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
          <Button className = "btn btn-lg" color = "primary" onClick = {createLogin}>Create</Button>
        </div>
      </Admin>
  </Layout>
)
}

export default UserAdd;