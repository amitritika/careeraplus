import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import UserInformationexpert from "../../../components/visualresume/expert/UserInformationexpert"
import LayoutLRInfo from "../../../components/visualresume/expert/LayoutLRInfo"
import Resume from "../../../components/visualresume/expert/template3/Resume"
import Page1 from "../../../components/visualresume/expert/template3/Page1"
import {visualresumedata} from "../../../helpers/visualresume/expert"
import {componentSequence, colors} from "../../../helpers/visualresume/expert/template3/template3"
import {saveAs} from 'file-saver';
import { getCookie, isAuth , updateUser, forgotPassword} from '../../../actions/auth';
import { getProfile, updateprofile } from '../../../actions/user';
import {FacebookShareButton, FacebookIcon} from 'react-share'
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';

const Template2 = () => {
  const [values, setValues] = useState({
    name: "",
		username: "",
    email:"",
    photo:"",
    visualresumeexp:visualresumedata,
    bg: "rgb(0, 141, 125)",
    font: "rgb(131, 130, 128)",
    list: null,
    showLeftBlock: false,
    layoutInfoDisplay: true,
    userInfoDisplay: false,
    image : "",
		imageDisplay: false
  });
  
	
 
 
 const {name, username, email, photo, visualresumeexp, bg, font, list, showLeftBlock, layoutInfoDisplay, userInfoDisplay, image, imageDisplay} = values;
  
 const vr = (data, layoutInfoDisplay, userInfoDisplay) => {
   setValues({...values, visualresumeexp: data, list: componentSequence(data, name, email, photo), layoutInfoDisplay: layoutInfoDisplay, userInfoDisplay: userInfoDisplay});
 }
  const personalInformation = (data) =>{
    
    setValues({...values, name: data.name, username: data.username, email: data.email, photo: data.photo, visualresumeexp:data.visualresumeexp, 
               list: componentSequence(data.visualresumeexp, data.name, data.email, data.photo)
               ,showLeftBlock: true})
  }
  
	const [styles, setStyles] = useState({
		fontf: "calibiri",
		size: "12pt",
		weight: "normal",
		width: "80px",
		height: '10px'
	})
	const {fontf, size, weight, width, height} = styles
  const token = getCookie('token');
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
          <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet" />
          <link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" />
        
      </Head>
    )
  }
  
  const Popup = (data1) =>{
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet-temp2.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet-temp2.css" type="text/css" media = "screen"/>');
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
        if(list.left.props[i].top > 297){
          return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
        }
      })
    )
    
    
  }
  
  const leftBlockComponentPage1 = (fac) =>{
    //let list = componentSequence(visualresumeexp, name, email, photo);
    return (
      list.left.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.left.props[i];
        const id = list.left.ids[i];
        if(list.left.props[i].top < 297){
          return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
        }
        
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
        if(list.right.props[i].top > 297){
        return (
          <div style = {{position: `absolute`, left: `${left}`}}>
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          </div>
            
          
               )
        }
      })
    )
    
    
  }
  
  const rightBlockComponentPage1 = (fac) =>{
   
    return (
      list.right.components.map((q,i)=>{
        let left = (fac * 80).toString() + "px";
        const BlockComponent = q;
        const props = list.right.props[i];
        const id = list.right.ids[i];
        if(list.right.props[i].top < 297){
        return (
          <div style = {{position: `absolute`, left: `${left}`}}>
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          </div>
            
          
               )
        }
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
  
  const handleShare = () => {
    
    let html2c = require("html2canvas");
		let userFormData = new FormData();
		setValues({...values, imageDisplay: true});
  html2c(document.getElementById("resume-page-1"), {allowTaint: true, useCORS: true,
        taintTest: false}).then(function(canvas) {
    	var img = canvas.toDataURL("image/png");
			//document.body.appendChild(canvas);
			let arr = img.split(',');
		if(arr[1]){
			const myNewCroppedFile = base64StringtoFile(img, "myFilename.png")
      userFormData.set('photosrc', myNewCroppedFile);
			console.log(arr[1])
		}
		updateprofile(token, userFormData).then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error, success: false, loading: false });
						
          } else {
							
              console.log(true)
          }
      });
			
});
		
		
		setValues({...values, imageDisplay: false});
		editSection.current.saveInfo();
		
}  
  
  
  let fac = 5;
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
						<div id = "text" style = {{position: `absolute`, visibility: `hidden`}}>
							aaaaaa
						</div>
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
                  <div className = "mt-4" id = "page1-preview" style = {{ height: `594px`, position: `absolute`, width: `420px`}}>
                    {showLeftBlock && <Page1 list = {list} visualresumeexp = {visualresumeexp} fac = {2} bg = {bg} font = {font}/>}
                    
                    {showLeftBlock && leftBlockComponentPage1(2)}
                    {showLeftBlock && rightBlockComponentPage1(2)}
                    
                  </div>
									
									{imageDisplay && <div className = "mt-4" id = "page1-preview1" style = {{ height: `1050px`, position: `absolute`, width: `1050px`}}>
                    {showLeftBlock && <Page1 list = {list} visualresumeexp = {visualresumeexp} fac = {5} bg = {bg} font = {font}/>}
                    
                    {showLeftBlock && leftBlockComponentPage1(5)}
                    {showLeftBlock && rightBlockComponentPage1(5)}
                    
                  </div>}
                  
                  
                </Col>}
                 <Col xs= "12" lg = "4">
                  <UserInformationexpert vr = {vr} pr = {personalInformation} type="expert" template = "template2" userInfoDisplay = {userInfoDisplay} ref = {editSection}/>
                  {!layoutInfoDisplay && <Button onClick = {handlePrint} className = "btn-alert">Print</Button>}
									 {!layoutInfoDisplay && <FacebookShareButton
																						beforeOnClick = {handleShare}
            url={`${DOMAIN}/user/profile/${username}`}
            quote="Visual Resume"
            
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>}
                </Col>
                <Col style = {{paddingLeft: `0`}}>
                  {!layoutInfoDisplay && 
                    <div id = "resume" style = {{position: `absolute`}}>
                      <div id = "resume-rest-pages" style = {{position: `absolute`}}>
                        {showLeftBlock && <Resume list = {list} visualresumeexp = {visualresumeexp} fac = {fac} bg = {bg} font = {font}/>}
                    
                        {showLeftBlock && leftBlockComponent(fac)}
                        {showLeftBlock && rightBlockComponent(fac)}
                        {showLeftBlock && blockComponent(fac)}
                      </div>
                      <div id = "resume-page-1" style = {{position: `absolute`, height: `549px`, width: `1050px`}}>
                        {showLeftBlock && <Page1 list = {list} visualresumeexp = {visualresumeexp} fac = {fac} bg = {bg} font = {font}/>}
                    
                        {showLeftBlock && leftBlockComponentPage1(fac)}
                        {showLeftBlock && rightBlockComponentPage1(fac)}
                        
                      </div>
                    
                  </div>
                  }
                </Col>
              </Row>
              
            </div>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template2;