import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import UserInformationexpert from "../../../components/visualresume/expert/UserInformationexpert"
import LayoutLRInfo from "../../../components/visualresume/expert/LayoutLRInfo"
import Resume from "../../../components/visualresume/expert/template1/Resume"
import {visualresumedata} from "../../../helpers/visualresume/expert"
import {page, pagesRedistribution, componentSequence, colors} from "../../../helpers/visualresume/expert/template1/template1"


const Template1 = () => {
  const [values, setValues] = useState({
    name: "",
    email:"",
    photo:"",
    visualresumeexp:visualresumedata,
    bg: "rgb(1, 51, 66)",
    font: "rgb(75, 172, 198)",
    list: null,
    showLeftBlock: false,
    layoutInfoDisplay: true,
    userInfoDisplay: false,
    
  });
  
 
 
 const {name, email, photo, visualresumeexp, bg, font, list, showLeftBlock, layoutInfoDisplay, userInfoDisplay} = values;
  
 const vr = (data, layoutInfoDisplay, userInfoDisplay) => {
   setValues({...values, visualresumeexp: data, list: componentSequence(data, name, email, photo), layoutInfoDisplay: layoutInfoDisplay, userInfoDisplay: userInfoDisplay});
 }
  const personalInformation = (data) =>{
    console.log(data.visualresumeexp);
    setValues({...values, name: data.name, email: data.email, photo: data.photo, visualresumeexp:data.visualresumeexp, 
               list: componentSequence(data.visualresumeexp, data.name, data.email, data.photo)
               ,showLeftBlock: true})
  }
  
  
  const editSection = useRef();
  
 
  
  const editClick = (c) =>{
    
    c = c + "Display";
    editSection.current.editClickChild(c);
    setValues({...values, layoutInfoDisplay: false})
  }

  const head = () => {
    return(
      <Head>
        <title>
          Visual Resume Builder
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
          <link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" />
        
      </Head>
    )
  }
  
  const Popup = (data1) =>{
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" media = "screen"/>');
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
  
  const leftBlockComponent = (fac) =>{
    //let list = componentSequence(visualresumeexp, name, email, photo);
    return (
      list.left.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.left.props[i];
        const id = list.left.ids[i];
        return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
      })
    )
    
    
  }
  
  const rightBlockComponent = (fac) =>{
   
    return (
      list.right.components.map((q,i)=>{
        let left = (fac * 80).toString() + "px";
        const BlockComponent = q;
        const props = list.right.props[i];
        const id = list.right.ids[i];
        return (
          <div style = {{position: `absolute`, left: `${left}`}}>
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          </div>
            
          
               )
      })
    )
    
    
  }
  
  const handleColor = (c) => {
    setValues({...values, bg: c.bg, font: c.font});
  }
  
  const colorDropdown = () => {
    return (
      colors.map((c, i)=> {
        return (
          <a onClick = {() => handleColor(c)}>
            <Row>
              <Col xs = "8" style = {{paddingLeft: `0px`, paddingRight: `0px`}}>Color Pallete {i+1}</Col>
              <Col xs ="2" style = {{paddingLeft: `0px`}}><div style = {{width: `25px`, height: `25px`, backgroundColor: `${c.bg}`}}></div></Col>
              <Col xs ="2" style = {{paddingLeft: `0px`}}><div style = {{width: `25px`, height: `25px`, backgroundColor: `${c.font}`}}></div></Col>
            </Row>
           </a>
        )
      })
    )
  }
  
  const next = (c, n) => {
    setValues({ ...values, [c]: false, [n]: true });
    editSection.current.editClickNext(c, n);
  }
  
  const blockComponent = (fac) =>{
    //let list = componentSequence(visualresumeexp, name, email, photo);
    return (
      list.block.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.block.props[i];
        const id = list.block.ids[i];
        return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
      })
    )
    
    
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
                <Col xs = "8" lg = "10">
                  <div className="dropdown ml-4 mt-2">
                    <button className="dropbtn mb-2">Select Theme</button>
                    <div className="dropdown-content">
                      {colorDropdown()}
                    </div>
                  </div>
                </Col>
                <Col xs = "2" lg = "1">
                  <div style = {{width: `50px`, height: `50px`, backgroundColor: `${bg}`, marginTop: `10px`}}></div>
                </Col>
                <Col xs = "2" lg = "1">
                  <div style = {{width: `50px`, height: `50px`, backgroundColor: `${font}`, marginTop: `10px`}}></div>
                </Col>
                {layoutInfoDisplay && <Col xs= "12" lg = "8">
                  <div className = "mt-4 h2 center ml-4">Resume Layout</div>
                  <LayoutLRInfo vr = {vr} next = {next} visualresumeexp = {visualresumeexp} editClick = {editClick} />
                </Col>}
                
               {layoutInfoDisplay && <Col xs= "12" lg = "4" style = {{paddingLeft: `0`}} className= "mt-4">
                  <div className = "h2 center ml-2 mt-4">Resume Preview</div>
                  <div className = "mt-4" id = "resume-preview" style = {{ height: `297px`, position: `absolute`}}>
                    {showLeftBlock && <Resume list = {list} visualresumeexp = {visualresumeexp} fac = {2} bg = {bg} font = {font}/>}
                    
                    {showLeftBlock && leftBlockComponent(2)}
                    {showLeftBlock && rightBlockComponent(2)}
                    {showLeftBlock && blockComponent(2)}
                  </div>
                  
                </Col>}
                 <Col xs= "12" lg = "4">
                  <UserInformationexpert vr = {vr} pr = {personalInformation} type="expert" template = "template1" userInfoDisplay = {userInfoDisplay} ref = {editSection}/>
                  {!layoutInfoDisplay && <Button onClick = {handlePrint} className = "btn-alert">Print</Button>}
                </Col>
                <Col style = {{paddingLeft: `0`}}>
                  {!layoutInfoDisplay && <div id = "resume" styel = {{position: `absolute`}}>
                    {showLeftBlock && <Resume list = {list} visualresumeexp = {visualresumeexp} fac = {fac} bg = {bg} font = {font}/>}
                    
                    {showLeftBlock && leftBlockComponent(fac)}
                    {showLeftBlock && rightBlockComponent(fac)}
                    {showLeftBlock && blockComponent(fac)}
                  </div>}
                </Col>
              </Row>
              
            </div>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template1;