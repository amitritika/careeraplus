import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../components/Layout"
import Admin from "../../../../../components/auth/Admin";
import DateComponent from "../../../../../components/DateComponent"
import { getCookie } from '../../../../../actions/auth';
import { createTest } from "../../../../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const DailyTest = () => {
  const [values, setValues] = useState({
    name: "aptitude",
    date:Date.now(),
    numberOfQues: "10"
  });
  
  const {name, date, numberOfQues} = values;
  
  const token = getCookie("token");
 
  const handleChange = n => e => {
    setValues({ ...values, [n]: e.target.value});
    
  };
  
  const startDate = (date) => {
		setValues({ ...values, date: date});
  }
  
  const createTest1 = () => {
    let data = values;
    data.date = date.toString();
    data.numberOfQues = parseInt(numberOfQues);
    createTest(token, data).then((res, err)=>{
      if(err){
        console.log(err);
      }else{
        let slug = res.slug
        Router.replace(`/admin/crud/test/daily/${slug}`)
      }
      
    });
  }
  
  return (
  <Layout>
      <Admin>
        <div className="container">
          <div className="form-group">
            <label className="lead">Test</label>
					  <select className = "form-control" onChange = {handleChange("name")} >
              <option value = "aptitude">Aptitude</option>
              <option value = "currentaffairs">Current Affairs</option>
              <option value = "reasoning">Reasoning</option>
              <option value = "quants">Quantataive Aptitude</option>
              <option value = "english">English</option>
            </select>
            <DateComponent date={startDate} str="Test"/>
            <label className="lead">Number Of Questions</label>
            <input 
              type = "number"
              className="form-control"
              onChange= {handleChange("numberOfQues")}>
            </input>
          </div>
          <Button className = "btn btn-lg" color = "primary" onClick = {createTest1}>Create</Button>
        </div>
      </Admin>
  </Layout>
)
}

export default DailyTest;