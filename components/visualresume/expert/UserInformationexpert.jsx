import { useState, useEffect, useRef } from 'react';
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

const UserInformationexpert = (props) => {
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
						props.vr(data.visualresumeexp.data);
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
						props.vr(visualresumedata);
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
		props.vr(data);
    setValues({ ...values, visualresume: data, error: false, success: false });
	}
	
	const next = (c, n) => {
		
		setValues({ ...values, [c]: false, [n]: true });
	}
	
	const back = (c, b) => {
		setValues({ ...values, [c]: false, [b]: true });
	}
  
 
  
  const educationalInformationForm = () => {
        return (
          <div className= "container">
						<div className="form-group">
						<Row>
							<Col xs = "12">
								<label className="lead">Latest Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.latestDegree}
									onChange= {handleChangeEducationalInformation("latestDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.latestCollege}
									onChange= {handleChangeEducationalInformation("latestCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.latestCgpa}
									onChange= {handleChangeEducationalInformation("latestCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.latestMonth}
										onChange= {handleChangeEducationalInformation("latestMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.latestYear}
										onChange= {handleChangeEducationalInformation("latestYear")}>
									</input>
							</Col>
						</Row>
            <Row>
							<Col xs = "12">
								<label className="lead">Next Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.nextDegree}
									onChange= {handleChangeEducationalInformation("nextDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.nextCollege}
									onChange= {handleChangeEducationalInformation("nextCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.nextCgpa}
									onChange= {handleChangeEducationalInformation("nextCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.nextMonth}
										onChange= {handleChangeEducationalInformation("nextMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.nextYear}
										onChange= {handleChangeEducationalInformation("nextYear")}>
									</input>
							</Col>
						</Row>
            <Row>
							<Col xs = "12">
								<label className="lead">Last Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.lastDegree}
									onChange= {handleChangeEducationalInformation("lastDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.lastCollege}
									onChange= {handleChangeEducationalInformation("lastCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.lastCgpa}
									onChange= {handleChangeEducationalInformation("lastCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.lastMonth}
										onChange= {handleChangeEducationalInformation("lastMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.lastYear}
										onChange= {handleChangeEducationalInformation("lastYear")}>
									</input>
							</Col>
						</Row>
						</div>
            <Button className = "btn alert mr-4"onClick = {educationalInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {educationalInformationNext}>Next</Button>
            
          </div>
            
        );
    };
  
  const projectInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
              <label className="lead">Major Project Titile</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.projectInformation.majTitle}
                onChange= {handleChangeProjectInformation("majTitle")}>
              </input>
              <label className="lead">Description</label>
							<div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        defaultValue={visualresume.projectInformation.majDes}
                        placeholder="Description of major Project"
                        onChange={handleChangeProjectInformationQuill("majDes")}
												ref={quill}
                    />
                </div>
             </div>
            <div className="form-group">
              <label className="lead">Minor Project Titile</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.projectInformation.minTitle}
                onChange= {handleChangeProjectInformation("minTitle")}>
              </input>
              <label className="lead">Description</label>
              <div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        defaultValue={visualresume.projectInformation.minDes}
                        placeholder="Description of minor Project"
                        onChange={handleChangeProjectInformationQuill("minDes")}
											ref={quill}
                    />
                </div>
             </div>
            <Button className = "btn alert mr-4"onClick = {projectInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {projectInformationNext}>Next</Button>
            
          </div>
    
    
    )
  }

	 const trainingInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
							<Row>
								<Col xs = "6">
									<label className="lead">Training 1</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.training1}
										onChange= {handleChangeTrainingInformation("training1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Organization</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.org1}
										onChange= {handleChangeTrainingInformation("org1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Start Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.startDate1}
										onChange= {handleChangeTrainingInformation("startDate1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">End Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.endDate1}
										onChange= {handleChangeTrainingInformation("endDate1")}>
									</input>
								</Col>
								<Col xs ="12">
									<label className="lead">Description</label>
									<div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        defaultValue={visualresume.trainingInformation.des1}
                        placeholder="Description of minor Project"
                        onChange={handleChangeTrainingInformationQuill("des1")}
											ref={quill}
                    />
                </div>
								</Col>
							</Row>
							<label className="lead">Second Training:  </label>
							<input  type="checkbox" 
								className = "mt-2 ml-2"
								style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
								checked = {trainingDisplay}
								onChange = {handleChangeTrainingInformationCheck} ></input>
							{trainingDisplay && 
								<div>
								<Row>
								<Col xs = "6">
									<label className="lead">Training 2</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.training2}
										onChange= {handleChangeTrainingInformation("training2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Organization</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.org2}
										onChange= {handleChangeTrainingInformation("org2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Start Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.startDate2}
										onChange= {handleChangeTrainingInformation("startDate2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">End Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.endDate2}
										onChange= {handleChangeTrainingInformation("endDate2")}>
									</input>
								</Col>
								<Col xs ="12">
									<label className="lead">Description</label>
									<div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        defaultValue={visualresume.trainingInformation.des2}
                        placeholder="Description of minor Project"
                        onChange={handleChangeTrainingInformationQuill("des2")}
											ref={quill}
                    />
                </div>
								</Col>
								</Row>
									</div>}
							</div>
            <Button className = "btn alert mr-4"onClick = {trainingInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {trainingInformationNext}>Next</Button>
            
          </div>
    
    
    )
  }
	 
	 const hobbiesInformationForm = () =>{
		 return(
		 	<div className= "container">
           
				 {!skill7Display && <div className="form-group">
					 <label className="lead">Hobby 1</label>
					 <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby1")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby1)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <label className="lead">Hobby 2</label>
					 <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby2")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby2)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					<label className="lead">Hobby 3</label>
					 {!skill6Display && <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby3")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby3)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>}
				 </div>}
				 {skill6Display && !skill7Display && <div>You have added 6 Skills. Hobby 3 will be hidden. If you need 3 hobbies delete skill no 6.</div>}
				 {skill7Display && <div>You have added 7 Skills. Hobbies will be hidden. If you need hobbies section with 2 hobbies to display delete skill no 7. If you need 3 hobbies delete skill no 6 also.</div>}
				 <Button className = "btn alert mr-4"onClick = {hobbiesInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {hobbiesInformationNext}>Next</Button>
			 </div>
		 )
	 }
	 
	 const areaInformationForm = () =>{
		 return(
		 	<div className= "container">
           
         <div className="form-group">
					 <label className="lead">Area Of Intrest 1</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area1].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 2</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area2].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 3</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area3].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <Button className = "btn alert mr-4"onClick = {areaInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {areaInformationNext}>Next</Button>
			 </div>
		 )
	 }
	 
	 const skillsInformationForm = () =>{
		 return(
		 	<div className= "container">
           
         <div className="form-group">
					 <label className="lead">Skill 1</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill1}
                onChange= {handleChangeSkillsInformation("skill1")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating1}
                onChange= {handleChangeSkillsInformation("rating1")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 2</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill2}
                onChange= {handleChangeSkillsInformation("skill2")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating2}
                onChange= {handleChangeSkillsInformation("rating2")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 3</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill3}
                onChange= {handleChangeSkillsInformation("skill3")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating3}
                onChange= {handleChangeSkillsInformation("rating3")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 4</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill4}
                onChange= {handleChangeSkillsInformation("skill4")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating4}
                onChange= {handleChangeSkillsInformation("rating4")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 5</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill5}
                onChange= {handleChangeSkillsInformation("skill5")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating5}
                onChange= {handleChangeSkillsInformation("rating5")}>
              </input>
				 </div>
				 {skill6Display && <div className="form-group">
					 <label className="lead">Skill 6</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill6}
                onChange= {handleChangeSkillsInformation("skill6")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating6}
                onChange= {handleChangeSkillsInformation("rating6")}>
              </input>
				 <Button className = "btn-sm btn-danger" onClick = {skillsInformationSkill6Delete}>Delete</Button>
				 </div>}
				 
				 {skill7Display && <div className="form-group">
					 <label className="lead">Skill 7</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill7}
                onChange= {handleChangeSkillsInformation("skill7")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating7}
                onChange= {handleChangeSkillsInformation("rating7")}>
              </input>
				 <Button className = "btn-sm btn-danger" onClick = {skillsInformationSkill7Delete}>Delete</Button>
				 </div>}
				 
				 <Button className = "btn alert mr-4"onClick = {skillsInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {skillsInformationNext}>Next</Button>
				 <Button className = "btn alert mr-4"onClick = {skillsInformationAdd}>Add Skills</Button>
			 </div>
		 )
	 }
	 
	 const extraInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
              <label className="lead">Extra Curricular 1</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra1}
                onChange= {handleChangeExtraCurricular("extra1")}>
              </input>
              <label className="lead">Extra Curricular 2</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra2}
                onChange= {handleChangeExtraCurricular("extra2")}>
              </input>
							<label className="lead">Extra Curricular 3</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra3}
                onChange= {handleChangeExtraCurricular("extra3")}>
              </input>
							{extra4Display && <div className="form-group">
							<label className="lead">Extra Curricular 4</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra4}
                onChange= {handleChangeExtraCurricular("extra4")}>
              </input>
								<Button className = "btn-sm btn-danger" onClick = {extraInformationExtra4Delete}>Delete</Button>
								</div>}
							{extra5Display && <div className="form-group">
							<label className="lead">Extra Curricular 5</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra5}
                onChange= {handleChangeExtraCurricular("extra5")}>
              </input>
								<Button className = "btn-sm btn-danger" onClick = {extraInformationExtra5Delete}>Delete</Button>
								</div>}
             </div>
            
            <Button className = "btn alert mr-4"onClick = {extraInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {extraInformationNext}>Next</Button>
            <Button className = "btn alert mr-4"onClick = {extraInformationAdd}>Add Extra</Button>
          </div>
    
    
    )
  }

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
						{layoutInfoDisplay && <LayoutInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
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
            <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>
        </React.Fragment>
    );
};

export default UserInformationexpert;