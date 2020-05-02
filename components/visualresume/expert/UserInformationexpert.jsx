import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { getVisualResume, updateVisualResumeExp } from '../../../actions/visualresume';
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, update } from '../../../actions/user';
import { API } from '../../../config';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import {hobbies, areaOfIntrest} from "../../../helpers/visualresume/fresher"
import {visualresumedata} from "../../../helpers/visualresume/expert"

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

const UserInformationexpert = forwardRef((props, ref) => {
    const [values, setValues] = useState({
			message: '',
			success: false,
			error: false,
      name: "",
      email:"",
			photo:"/images/profile.png",
      visualresumeexp: visualresumedata,
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
			educationInfoDisplay: false,
			certificationDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false
  
        
    });

    const { message, success, error, name, email, photo, visualresumeexp, layoutInfoDisplay,
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
					
					if(data.visualresumeexp.typeOfResume !== ""){
						props.vr(data.visualresumeexp.data, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								photo: `${API}/user/photo/${data.username}`,
								visualresumeexp: data.visualresumeexp.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: data.visualresumeexp.data,
									photo: `${API}/user/photo/${data.username}`,
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								photo: "/images/profile.png",
								visualresumeexp: data.visualresumeexp.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: data.visualresumeexp.data,
								layoutInfoDisplay: true
							});
						}
					}else{
						props.vr(visualresumedata, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								photo: `${API}/user/photo/${data.username}`,
								visualresumeexp: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: visualresumedata,
									photo: `${API}/user/photo/${data.username}`,
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								photo: "/images/profile.png",
								visualresumeexp: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: visualresumedata,
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
  
  const saveInfo = () => {
		let visualresumeCopy = {
			typeOfResume: "",
			data: ""
		}
      	visualresumeCopy.typeOfResume = `/visualresume/${props.type}/${props.template}`;
				visualresumeCopy.data = visualresumeexp
		 		setValues({ ...values, error: false, success: false });
    updateVisualResumeExp(token, visualresumeCopy).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
						
                  setValues({
                      ...values,
										visualresumeexp: data1.visualresumeexp.data,
										message: "Resume Information Saved Successfully",
                      success: true,
                      loading: false
                  });
          }
      });
  }
	
	const vr = (data) => {
		props.vr(data, layoutInfoDisplay, userInfoDisplay);
    setValues({ ...values, visualresumeexp: data, error: false, success: false });
	}
	
	const next = (c, n) => {
		setValues({ ...values, [c]: false, [n]: true });
		if(n == "layoutInfoDisplay"){
			props.vr(visualresumeexp, true, false);
		}else if(n == "userInfoDisplay"){
			props.vr(visualresumeexp, false, true);
		}else{
			props.vr(visualresumeexp, false, false);
		}
		
	}
	
	const back = (c, b) => {
		props.vr(visualresumeexp, layoutInfoDisplay, userInfoDisplay);
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
			certificationDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false});
		
		props.vr(visualresumeexp, true, false);
	}
	
	useImperativeHandle(ref, () => {

   return (
		 {
			 editClickChild: editClickChild,
			 editClickNext: editClickNext
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
						
            {userInfoDisplay && <UserInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp} photo = {photo} name = {name} email = {email}/>}
            {personalInfoDisplay && <PersonalInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{profileSummaryInfoDisplay && <ProfileSummaryInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{workexpInfoDisplay && <WorkexpInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{competenciesInfoDisplay && <CompetenciesInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{techSkillsInfoDisplay && <TechSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{toolSkillsInfoDisplay && <ToolSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{progSkillsInfoDisplay && <ProgSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{softSkillsInfoDisplay && <SoftSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{projectsInfoDisplay && <ProjectsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{educationInfoDisplay && <EducationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{certificationInfoDisplay && <CertificationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{achievmentsInfoDisplay && <AchievmentsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{publicationInfoDisplay && <PublicationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{areaOfIntrestInfoDisplay && <AreaOfIntrestInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{hobbiesInfoDisplay && <HobbiesInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
            {!layoutInfoDisplay && <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>}
        </React.Fragment>
    );
});

export default UserInformationexpert;