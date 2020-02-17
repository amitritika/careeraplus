import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/stylesheets/examplan/index.css"
import {DateCalendarComponent, WeekDayNameComponent, WeekDaysComponent, MonthNameComponent} from "./helper"
import {saveAs} from 'file-saver';

export const WeekComponent = (props) => {
  const bgColor = props.bgColor;
  const dates = props.dates;
  const dates1 = [1,2,3,4,5,6,7];
  const dateColor = props.dateColor;
  const sub = props.sub;
  const topic = props.topic;
  const test = props.test;
  
  return(
    <div>
        <Container>
          <Row>
            <Col xs="2">
              
            </Col>
            <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[0]}
                dates = {dates[0]}
                dateColor = {dateColor[0]}
                sub = {sub[0]}
                topic = {topic[0]}
                test = {test[0]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[1]}
                dates = {dates[1]}
                dateColor = {dateColor[1]}
                sub = {sub[1]}
                topic = {topic[1]}
                test = {test[1]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[2]}
                dates = {dates[2]}
                dateColor = {dateColor[2]}
                sub = {sub[2]}
                topic = {topic[2]}
                test = {test[2]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[3]}
                dates = {dates[3]}
                dateColor = {dateColor[3]}
                sub = {sub[3]}
                topic = {topic[3]}
                test = {test[3]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[4]}
                dates = {dates[4]}
                dateColor = {dateColor[4]}
                sub = {sub[4]}
                topic = {topic[4]}
                test = {test[4]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[5]}
                dates = {dates[5]}
                dateColor = {dateColor[5]}
                sub = {sub[5]}
                topic = {topic[5]}
                test = {test[5]}
                />
            </Col>
             <Col xs="1">
              <DateCalendarComponent 
                bgColor = {bgColor[6]}
                dates = {dates[6]}
                dateColor = {dateColor[6]}
                sub = {sub[6]}
                topic = {topic[6]}
                test = {test[6]}
                />
            </Col>
            <Col xs="3">
              
            </Col>
        </Row>
        </Container>
   </div>
  )
}


export const MonthComponent = (props) => {
  const bgColor = props.bgColor;
  const dates = props.dates;
  const dateColor = props.dateColor;
  const sub = props.sub;
  const topic = props.topic;
  const test = props.test;
	let html2canvas = ""
	useEffect(() => {
      html2canvas = require("../../helpers/html2canvas2")
 
  }, []);
  
	const handleDownload = () => {
		html2canvas(document.getElementById(props.monthName)).then(function(canvas) {
    	var img = canvas.toDataURL("image/png");
			var imageName = props.monthName + ".png";
			saveAs(canvas.toDataURL("image/png"), imageName);
});

	}
	
  return (
    <div id = {props.monthName}>
        <div className = "month-name">
          {props.monthName}
        </div>
        <WeekComponent 
          bgColor = {bgColor[0]} 
          dates = {dates[0]} 
          dateColor = {dateColor[0]} 
          sub = {sub[0]} 
          topic = {topic[0]} 
          test = {test[0]} />
      
      <WeekComponent 
          bgColor = {bgColor[1]} 
          dates = {dates[1]} 
          dateColor = {dateColor[1]} 
          sub = {sub[1]} 
          topic = {topic[1]} 
          test = {test[1]} />
      
      <WeekComponent 
          bgColor = {bgColor[2]} 
          dates = {dates[2]} 
          dateColor = {dateColor[2]} 
          sub = {sub[2]} 
          topic = {topic[2]} 
          test = {test[2]} />
      
      <WeekComponent 
          bgColor = {bgColor[3]} 
          dates = {dates[3]} 
          dateColor = {dateColor[3]} 
          sub = {sub[3]} 
          topic = {topic[3]} 
          test = {test[3]} />
      
      <WeekComponent 
          bgColor = {bgColor[4]} 
          dates = {dates[4]} 
          dateColor = {dateColor[4]} 
          sub = {sub[4]} 
          topic = {topic[4]} 
          test = {test[4]} />
      
      <WeekComponent 
          bgColor = {bgColor[5]} 
          dates = {dates[5]} 
          dateColor = {dateColor[5]} 
          sub = {sub[5]} 
          topic = {topic[5]} 
          test = {test[5]} />
      
      <Button outline color="danger" size="md" onClick = {handleDownload} >Download</Button>
    </div>
  )
}
export const YearComponent = (props) =>{
  const monthName = props.monthName
  const bgColor = props.bgColor;
  const dates = props.dates;
  const dateColor = props.dateColor;
  const sub = props.sub;
  const topic = props.topic;
  const test = props.test;
  
  let monthItems = monthName.map((monthNa,index)=>
		<MonthComponent
			key={index}
				monthName = {monthNa}
				bgColor = {bgColor[index]} 
				dates = {dates[index]} 
				dateColor = {dateColor[index]} 
				sub = {sub[index]} 
				topic = {topic[index]} 
				test = {test[index]}
				/>
    
  );
    return (
    <div className = "text-center">
     {monthItems} 
      </div>
    )
}