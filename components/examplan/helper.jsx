import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/stylesheets/examplan/index.css"

export const DateCalendarComponent = (props) => {
  const [dates, setdates] = useState("1");
  const [bgColor, setbgColor] = useState("white");
  const [dateColor, setdateColor] = useState("grey");
  const [sub, setsub] = useState("Subject1");
  const [topic, settopic] = useState("Lorem Ipsum is simply dummy text of the Lorem Ipsum is");
  const [test, settest] = useState(true);
  useEffect(()=>{
    setdates(props.dates);
    setbgColor(props.bgColor);
    setdateColor(props.dateColor);
    setsub(props.sub);
    settopic(props.topic);
    settest(props.test);
  },[]);
  
    if(test){
      return (
          <div className = "date-calendar" style= {{backgroundColor: `${bgColor}`}}>
            <h6 className = "date-calendar-date" style= {{color: `${dateColor}`}}>{dates}</h6>
            <h6 className = "date-calendar-header">{sub}</h6>
            <p className = "date-calendar-topic">{topic}</p>
              <h6 className = "date-calendar-header"style= {{color: `maroon`}}>TEST</h6>
          </div>
        )
  }
  return (
          <div className = "date-calendar" style= {{backgroundColor: `${bgColor}`}}>
            <h6 className = "date-calendar-date" style= {{color: `${dateColor}`}}>{dates}</h6>
            <h6 className = "date-calendar-header">{sub}</h6>
            <p className = "date-calendar-topic">{topic}</p>
          </div>
    )
  
    
  
}


export const WeekDayNameComponent = (props) => {
  return(
    <div className = "week-day-name">
      {props.name}
    </div>
  )
}

export const WeekDaysComponent = () => {
  return(
    <div>
        <Container>
          <Row>
            <Col xs="2">
              
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Sunday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Monday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Tuesday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Wednesday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Thursday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Friday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Saturday"/>
            </Col>
            <Col xs="3">
              Hi
            </Col>
        </Row>
        </Container>
   </div>
  )
}

export const WeekComponent = (props) => {
  return(
     <div>
        <Container>
          <Row>
            <Col xs="2">
              
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Sunday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Monday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Tuesday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Wednesday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Thursday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Friday"/>
            </Col>
            <Col xs="1">
              <WeekDayNameComponent name = "Satarday"/>
            </Col>
            <Col xs="3">
              
            </Col>
        </Row>
        </Container>
   </div>
  )
}

export const MonthNameComponent = (props) => {
  return(
    <div className = "month-name">
      {props.name}
    </div>
  )
}