import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import UserInformationexpert from "../../../components/visualresume/expert/UserInformationexpert"
import Resume from "../../../components/visualresume/expert/template1/Resume"
import {visualresumedata} from "../../../helpers/visualresume/expert"
import {page, pagesRedistribution} from "../../../helpers/visualresume/expert/template1"

const Template1 = () => {
  const [values, setValues] = useState({
    name: "",
    email:"",
    photo:"",
    visualresumeexp:visualresumedata,
    bg: "rgb(1, 51, 66)",
    font: "rgb(75, 172, 198)",
    showLeftBlock: false
    
  });
  
  const [skills, setSkills] = useState({
    skill6Display: false,
    skill7Display: false,
    trainingDisplay: false,
    extra4Display: false,
    extra5Display: false
  });
  
  
  
  const { skill6Display, skill7Display, trainingDisplay, extra4Display, extra5Display } = skills;
  
 const {name, email, photo, visualresumeexp, bg, font, showLeftBlock} = values;
  
 const vr = (data) => {
   setValues({...values, visualresumeexp: data});
 }
  const personalInformation = (data) =>{
    console.log(data.visualresumeexp);
    setValues({...values, name: data.name, email: data.email, photo: data.photo, visualresumeexp:data.visualresumeexp, showLeftBlock: true})
  }
  

  const head = () => {
    return(
      <Head>
        <title>
          Visual Resume Builder
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
        
      </Head>
    )
  }
  
  const Popup = (data1) =>{
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/template1/stylesheet440.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/template1/stylesheet440.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      
      mywindow.document.write(data1);
      
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      mywindow.focus();
      //mywindow.print();
      setTimeout(function(){ mywindow.print(); 
                            //mywindow.close(); 
                           },1000);
      //mywindow.close();
      
      return true;
  }
  
  const handlePrint = () => {
    let data = document.getElementById("resume").innerHTML;
    Popup(data);
  }
  
  let fac = 5;
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
            <div>
              <Row>
                <Col xs= "12" lg = "4">
                  <UserInformationexpert vr = {vr} pr = {personalInformation} type="expert" template = "template1"/>
                  <Button onClick = {handlePrint} className = "btn-alert">Print</Button>
                </Col>
                <Col>
                  {showLeftBlock && <Resume visualresumeexp = {visualresumeexp} pages = {pages} fac = {fac} bg = {bg} font = {font} vr = {vr}/>}
                </Col>
              </Row>
              
            </div>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template1;