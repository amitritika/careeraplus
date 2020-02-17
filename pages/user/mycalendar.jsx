import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../../components/Layout"
import Private from "../../components/auth/Private";
import { getCookie, isAuth } from '../../actions/auth';
import { getExamplan, updateExamplan } from '../../actions/examplan';
import {WeekComponent, MonthComponent, YearComponent} from "../../components/examplan/calendar"
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';



const MyCalendar = () => {
  const [values, setValues] = useState({
        name: '',
        examplan: {},
        error: false,
        success: false,
        loading: false,
        message:'',
        calendar: ""
    
    });
  //const [calendar, setcalendar] = useState("");
  //const calendar = "";

    const token = getCookie('token');
    const { name, examplan, error, success, loading, message, calendar} = values;
  
  const init = () => {
    getExamplan(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({
                ...values,
                examplan: data,
              success: true,
              calendar: <React.Fragment>
            <div>Your {data.goal[0]} {data.goal[1]} Plan</div>
                <NavLink href = {data.goal[2]}>Update Calendar</NavLink>
                <YearComponent
				monthName = {data.calendar.monthName}
				bgColor = {data.calendar.bgColor} 
				dates = {data.calendar.dates} 
				dateColor = {data.calendar.dateColor} 
				sub = {data.calendar.sub} 
				topic = {data.calendar.topic} 
				test = {data.calendar.test}
				/>
            </React.Fragment>
            });
         
        }
    });
};
  
  useEffect(() => {
      init();
 
  }, []);
   
  
  return (
  <Layout>
      <Private>
       {calendar}

      </Private>
  </Layout>
)
}

export default MyCalendar;