import React from 'react';
import Countdown from 'react-countdown';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/stylesheets/examplan/index.css';
import Layout from "../../components/Layout"
import { useState, useEffect } from 'react';

const Test = () => {
  
  const LStime = () => {
      let t = 0;
      let testObj = {}
        if (typeof window === 'undefined') {
            return 0;
        }

        if (localStorage.getItem('test')) {
            testObj = JSON.parse(localStorage.getItem('test'));
          if((Date.now() - testObj.time) > 600000)
            {t = 0}
          else
            {t = 600000 - Date.now() + testObj.time - 3000}
            return t;
        } else {
            return 600000;
        }
    };
  
  const [values, setValues] = useState({
    testStart: true,
    testStop: false,
    t: LStime()
    
  });
  
  const { testStart, testStop, t} = values;
  
  const Completionist = () => <span>You are good to go!</span>;
  
  const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    return <span style = {{color:`red`, fontSize:`2rem`}}>{hours}:{minutes}:{seconds}</span>;
  }
};
  
  const saveLS = () => {
    if (typeof window !== 'undefined') {
        if (!localStorage.getItem('test')){
          localStorage.setItem('test', JSON.stringify({time: Date.now()}));
        }
            
        }
  }
  
  const testComplete = () =>{
    localStorage.removeItem('test');
  
  }
  return (
    <Layout>
      {testStart && <Countdown
        date={Date.now() + t}
        renderer={renderer}
        onStart = {saveLS}
        onComplete = {testComplete}
      />}
    </Layout>
  )
}

export default Test;