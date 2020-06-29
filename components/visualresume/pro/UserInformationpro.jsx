import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { getVisualResume, updateVisualResumePro } from '../../../actions/visualresume';
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, update, updateresume } from '../../../actions/user';
import { API } from '../../../config';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import {hobbies, areaOfIntrest} from "../../../helpers/visualresume/fresher"
import {visualresumedata} from "../../../helpers/visualresume/pro"
import imageCompression from 'browser-image-compression';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'
import UserInfo from "./UserInfo"
import PersonalInfo from "./PersonalInfo"
import LayoutInfo from "./LayoutInfo"
import LayoutLRInfo from "./LayoutLRInfo"
import ProfileSummaryInfo from "./ProfileSummaryInfo"
import WorkexpInfo from "./WorkexpInfo"
import CompetenciesInfo from "./CompetenciesInfo"
import TechSkillsInfo from "./TechSkillsInfo"
import ToolSkillsInfo from "./ToolSkillsInfo"
import SoftSkillsInfo from "./SoftSkillsInfo"
import ProgSkillsInfo from "./ProgSkillsInfo"
import ProjectsInfo from "./ProjectsInfo"
import EducationInfo from "./EducationInfo"
import CertificationInfo from "./CertificationInfo"
import AchievmentsInfo from "./AchievmentsInfo"
import PublicationInfo from "./PublicationInfo"
import AreaOfIntrestInfo from "./AreaOfIntrestInfo"
import HobbiesInfo from "./HobbiesInfo"
import PorInfo from "./PorInfo"
import TrainingInfo from "./TrainingInfo"

const UserInformationexpert = forwardRef((props, ref) => {
    const [values, setValues] = useState({
			message: '',
			success: false,
			error: false,
      name: "",
      email:"",
			photo:"/images/profile.png",
      visualresumepro: visualresumedata,
			image: "",
			layoutInfoDisplay: false,
			userInfoDisplay: false,
			personalInfoDisplay: false,
			profileSummaryInfoDisplay: false,
			workexpInfoDisplay: false,
			competenciesInfoDisplay: false,
			techSkillsInfoDisplay: false,
			toolSkillsInfoDisplay: false,
			progSkillsInfoDisplay: false,
			softSkillsInfoDisplay: false,
			projectsInfoDisplay: false,
			porInfoDisplay: false,
			trainingInfoDisplay: false,
			educationInfoDisplay: false,
			certificationDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false
  
        
    });

    const { message, success, error, name, email, photo, visualresumepro, image, layoutInfoDisplay,
					userInfoDisplay,
					 personalInfoDisplay,
					profileSummaryInfoDisplay,
					competenciesInfoDisplay,
					workexpInfoDisplay,
					techSkillsInfoDisplay,
					toolSkillsInfoDisplay,
					progSkillsInfoDisplay,
					softSkillsInfoDisplay,
					projectsInfoDisplay,
					educationInfoDisplay,
					porInfoDisplay,
					trainingInfoDisplay,
					certificationInfoDisplay,
					achievmentsInfoDisplay,
					publicationInfoDisplay,
					areaOfIntrestInfoDisplay,
					hobbiesInfoDisplay
					} = values;
    const token = getCookie('token');

    const init = () => {
      getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
					let vdata = {}
					if(data.visualresumepro.typeOfResume !== ""){
						vdata = data.visualresumepro.data
						vdata.colors = {bg: props.bg, font: props.font}
						props.vr(vdata, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: `${API}/user/photo/${data.username}`,
								visualresumepro: data.visualresumepro.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
								
									visualresumepro: data.visualresumepro.data,
									photo: `${API}/user/photo/${data.username}`,
									
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: "/images/profile.png",
								visualresumepro: data.visualresumepro.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumepro: data.visualresumepro.data,
								layoutInfoDisplay: true
							});
						}
					}else{
						vdata = visualresumedata
						vdata.colors = {bg: props.bg, font: props.font}
						props.vr(vdata, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: `${API}/user/photo/${data.username}`,
								visualresumepro: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumepro: visualresumedata,
									photo: `${API}/user/photo/${data.username}`,
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: "/images/profile.png",
								visualresumepro: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumepro: visualresumedata,
								layoutInfoDisplay: true
							});
						}
					}
					
        }
    });
};
  
  useEffect(() => {
      init();
			
			
  }, []);

	const quill = useRef(null);
    
  const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

  const showErrorMessage = () => (
			<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
					{error}
			</div>
    );
	
	
	const Popup2 = (data1) =>{
    let userFormData = new FormData();
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      mywindow.document.write('<div id = "resume" style = "width: 1050px; height: 1485px; position: absolute">');
      mywindow.document.write(data1);
      mywindow.document.write('</div>');
      mywindow.document.write('</body></html>');
      mywindow.document.close();
			let phone = mywindow.document.getElementById("contact-phone-dummy");
			let email = mywindow.document.getElementById("contact-email-dummy");
		
			email.children[1].innerHTML = "dummyemail@abc.com"
			phone.children[1].innerHTML = "+91-1234567890"
			var svgElements = mywindow.document.body.querySelectorAll('svg');
			svgElements.forEach(function(item) {
					item.setAttribute("width", item.getBoundingClientRect().width);
					item.style.width = null;
			});
      let html2c = require("html2canvas");
      let myNewCroppedFile = null
			const options = {
				maxSizeMB: 1,
				maxWidthOrHeight: 1920,
				useWebWorker: true
			}
      html2c(mywindow.document.getElementById("resume"), {allowTaint: true, useCORS: true,
        taintTest: false}).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
			let arr = img.split(',');
		if(arr[1]){
			myNewCroppedFile = base64StringtoFile(img, "myFilename.png")
		}
        console.log(myNewCroppedFile)
				imageCompression(myNewCroppedFile, options)
					.then(function (compressedFile) {
						userFormData.set('photosrc', myNewCroppedFile);
						updateresume(token, userFormData).then(data => {
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
					})
					.catch(function (error) {
						console.log(error.message);
					});
    
      
      });
    
   
      
      return true;
  }
	
const handleShare = () => {
    let data = document.getElementById("resume").innerHTML;
    Popup2(data);
  }
  
  const saveInfo = () => {
		
		
		let visualresumeCopy = {
			typeOfResume: "",
			data: "",
			photo: {
				contentType:"image/png",
				data: null
			}
				
		}
      	visualresumeCopy.typeOfResume = `/visualresume/${props.type}/${props.template}`;
				visualresumeCopy.data = visualresumepro
			
			
		 		setValues({ ...values, error: false, success: false });
    updateVisualResumePro(token, visualresumeCopy).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
						
                  setValues({
                      ...values,
										visualresumepro: data1.visualresumepro.data,
										message: "Resume Information Saved Successfully",
                      success: true,
                      loading: false
                  });
						
						handleShare();
          }
      });
  }
	
	const vr = (data) => {
		props.vr(data, layoutInfoDisplay, userInfoDisplay);
    setValues({ ...values, visualresumepro: data, error: false, success: false });
	}
	
	const next = (c, n) => {
		setValues({ ...values, [c]: false, [n]: true });
		if(n == "layoutInfoDisplay"){
			props.vr(visualresumepro, true, false);
		}else if(n == "userInfoDisplay"){
			props.vr(visualresumepro, false, true);
		}else{
			props.vr(visualresumepro, false, false);
		}
		
	}
	
	const back = (c, b) => {
		props.vr(visualresumepro, layoutInfoDisplay, userInfoDisplay);
		setValues({ ...values, [c]: false, [b]: true });
	}
	
	const handleLayout = () =>{
		setValues({...values, layoutInfoDisplay: true,
			userInfoDisplay: false,
			personalInfoDisplay: false,
			profileSummaryInfoDisplay: false,
			workexpInfoDisplay: false,
			competenciesInfoDisplay: false,
			techSkillsInfoDisplay: false,
			toolSkillsInfoDisplay: false,
			progSkillsInfoDisplay: false,
			softSkillsInfoDisplay: false,
			projectsInfoDisplay: false,
			educationInfoDisplay: false,
			porInfoDisplay: false,
			trainingInfoDisplay: false,
			certificationInfoDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false});
		
		props.vr(visualresumepro, true, false);
	}
	
	useImperativeHandle(ref, () => {

   return (
		 {
			 editClickChild: editClickChild,
			 editClickNext: editClickNext,
			 saveInfo: saveInfo
		 }
	 )

  });
	
	 const editClickChild = (c) =>{
		
		setValues({...values, [c]: true, layoutInfoDisplay: false});
	}
	 
	 const editClickNext = (c, n)=>{
		 setValues({...values, [c]: false, [n]: true});
	 }

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
						{!layoutInfoDisplay && <button className = "btn btn-md btn-primary ml-4" onClick = {handleLayout}>Layout</button>}
						
            {userInfoDisplay && <UserInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro} photo = {photo} name = {name} email = {email}/>}
            {personalInfoDisplay && <PersonalInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{profileSummaryInfoDisplay && <ProfileSummaryInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{workexpInfoDisplay && <WorkexpInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{competenciesInfoDisplay && <CompetenciesInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{techSkillsInfoDisplay && <TechSkillsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{toolSkillsInfoDisplay && <ToolSkillsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{progSkillsInfoDisplay && <ProgSkillsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{softSkillsInfoDisplay && <SoftSkillsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{projectsInfoDisplay && <ProjectsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{educationInfoDisplay && <EducationInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{certificationInfoDisplay && <CertificationInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{achievmentsInfoDisplay && <AchievmentsInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{publicationInfoDisplay && <PublicationInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{areaOfIntrestInfoDisplay && <AreaOfIntrestInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{hobbiesInfoDisplay && <HobbiesInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{porInfoDisplay && <PorInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
						{trainingInfoDisplay && <TrainingInfo vr = {vr} next = {next} back = {back} visualresumepro = {visualresumepro}/>}
            {!layoutInfoDisplay && <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>}
        </React.Fragment>
    );
});

export default UserInformationexpert;