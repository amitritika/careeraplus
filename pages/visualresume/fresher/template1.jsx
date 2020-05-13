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
import { getProfile, updateprofile } from '../../../actions/user';
import { getCookie, isAuth , updateUser, forgotPassword} from '../../../actions/auth';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'

import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
const Template1 = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email:"",
    photo:"",
    visualresume:"",
    bg: "rgb(1, 51, 66)",
    font: "rgb(75, 172, 198)",
    showLeftBlock: false
    
  });
  
  const token = getCookie('token');
  
  const [skills, setSkills] = useState({
    skill6Display: false,
    skill7Display: false,
    trainingDisplay: false,
    extra4Display: false,
    extra5Display: false
  })
  
  const { skill6Display, skill7Display, trainingDisplay, extra4Display, extra5Display } = skills;
  
 const {name, username, email, photo, visualresume, bg, font, showLeftBlock} = values;
  
  const setVisualresume = (data) => {
    setValues({...values, visualresume:data, showLeftBlock: true});
    if(!data.skills.skill6Display){
      setSkills({...skills, skill6Display: false, 
                 trainingDisplay: data.trainingInformation.trainingDisplay,
                 extra4Display: data.extraCurricular.extra4Display,
                 extra5Display: data.extraCurricular.extra5Display
                });
    }else{
      setSkills({...skills, skill6Display: data.skills.skill6Display, 
                 skill7Display: data.skills.skill7Display, 
                 trainingDisplay: data.trainingInformation.trainingDisplay,
                 extra4Display: data.extraCurricular.extra4Display,
                 extra5Display: data.extraCurricular.extra5Display
                });
    }
      
  }
  
  const personalInformation = (data) =>{
    setValues({...values, name: data.name, username: data.username, email: data.email, photo: data.photo, visualresume:data.visualresume, showLeftBlock: true})
  }
  
  let skillsObj = {
    skill6Add: ()=>{
      setSkills({...skills, skill6Display: true});
      console.log("skill6add")
    },
    skill7Add: ()=>{
      setSkills({...skills, skill7Display: true});
      console.log("skill7add")
    },
    skill6Del: ()=>{
      setSkills({...skills, skill6Display: false});
      console.log("skill6del")
    },
    skill7Del: ()=>{
      setSkills({...skills, skill7Display: false});
      console.log("skill7del")
    }
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
  
  const Popup2 = (data1) =>{
    let userFormData = new FormData();
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/template1/stylesheet440.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/template1/stylesheet440.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      mywindow.document.write('<div id = "resume" style = "width: 1050px; height: 549px">');
      mywindow.document.write(data1);
      mywindow.document.write('</div>');
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      let html2c = require("html2canvas");
      let myNewCroppedFile = null
      html2c(mywindow.document.getElementById("resume"), {allowTaint: true, useCORS: true,
        taintTest: false}).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
			let arr = img.split(',');
		if(arr[1]){
			myNewCroppedFile = base64StringtoFile(img, "myFilename.png")
		}
        console.log(myNewCroppedFile)
    userFormData.set('photosrc', myNewCroppedFile);
    updateprofile(token, userFormData).then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error, success: false, loading: false });
						mywindow.focus();
            

            mywindow.close();
          } else {
							
              console.log(true);
              mywindow.focus();
            //mywindow.print();

            mywindow.close();
          }
      });
      
      });
    
      
      
      return true;
  }
  
  const handlePrint = () => {
    let data = document.getElementById("resume").innerHTML;
    Popup(data);
  }
  
  const handleShare = () => {
    let data = document.getElementById("resume").innerHTML;
    Popup2(data);
  }
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
            <div>
              <Row>
                <Col xs= "12" lg = "4">
                  <UserInformation vr = {setVisualresume} pr = {personalInformation} skills ={skillsObj} type = "fresher" template = "template1"></UserInformation>
                  <Button onClick = {handlePrint} className = "btn-alert">Print</Button>
                  <FacebookShareButton
																						beforeOnClick = {handleShare}
            url={`${DOMAIN}/user/profile/${username}`}
            quote="Visual Resume"
            
          >
            <FacebookIcon size={32} round className = "ml-2"/>
          </FacebookShareButton>
                  
                  <WhatsappShareButton
																						beforeOnClick = {handleShare}
            url={`${DOMAIN}/user/profile/${username}`}
            quote="Visual Resume"
            
          >
            <WhatsappIcon size={32} round className = "ml-2"/>
          </WhatsappShareButton>
                </Col>
                <Col xs="12" lg = "8">
                  <MainBlock>
                    <Resume>
                      {showLeftBlock && <LeftBlock bg={bg} font= {font} vr= {visualresume} name= {name} email = {email} photo={photo} skills = {skills}/>}
                      {showLeftBlock && <RightBlock bg={bg} font= {font} vr= {visualresume} name= {name} skills = {skills}/>}
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