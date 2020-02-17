import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import UserInformation from "../../../components/visualresume/fresher/UserInformation"
import MainBlock from "../../../components/visualresume/fresher/MainBlock"
import Resume from "../../../components/visualresume/fresher/Resume"
import LeftBlock from "../../../components/visualresume/fresher/template1/LeftBlock"
import RightBlock from "../../../components/visualresume/fresher/template1/RightBlock"


const Template1 = () => {
  const [values, setValues] = useState({
    name: "",
    email:"",
    photo:"",
    visualresume:"",
    bg: "rgb(1, 51, 66)",
    font: "rgb(75, 172, 198)",
    showLeftBlock: false
    
  });
  
 const {name, email, photo, visualresume, bg, font, showLeftBlock} = values;
  
  const setVisualresume = (data) => {
    setValues({...values, visualresume:data, showLeftBlock: true});
  }
  
  const personalInformation = (data) =>{
    setValues({...values, name: data.name, email: data.email, photo: data.photo, visualresume:data.visualresume, showLeftBlock: true})
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
      console.log(mywindow.document.head);
      mywindow.document.write(data1);
      console.log(mywindow.document.body);
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
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
            <div>
              <Row>
                <Col xs= "12" lg = "4">
                  <UserInformation vr = {setVisualresume} pr = {personalInformation} type = "fresher" template = "template1"></UserInformation>
                  <Button onClick = {handlePrint} className = "btn-alert">Print</Button>
                </Col>
                <Col xs="12" lg = "8">
                  <MainBlock>
                    <Resume>
                      {showLeftBlock && <LeftBlock bg={bg} font= {font} vr= {visualresume} name= {name} email = {email} photo={photo}/>}
                      {showLeftBlock && <RightBlock bg={bg} font= {font} vr= {visualresume} name= {name} />}
                    </Resume>
                  </MainBlock>
                </Col>
              </Row>
            </div>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template1;