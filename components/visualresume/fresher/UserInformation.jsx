import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { getVisualResume, updateVisualResume } from '../../../actions/visualresume';
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, update } from '../../../actions/user';
import { API } from '../../../config';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import {hobbies, areaOfIntrest} from "../../../helpers/visualresume/fresher"

const UserInformation = (props) => {
    const [values, setValues] = useState({
        message: '',
        success: false,
        error: false,
      name: "",
      email:"",
			photo:"/images/profile.png",
      visualresume: "",
       personalInformationshow: false,
      personalInformation: false,
      educationalInformationshow: false,
      projectInformationshow: false,
      trainingInformationshow: false,
      skillsshow: false,
      hobbiesshow: false,
      areaOfIntrestshow:false,
      extraCurricularshow: false
        
    });
	
	const [skills, setSkills] = useState({
		skill6Display : false,
		skill7Display : false,
		trainingDisplay: false,
		extra4Display: false,
		extra5Display: false
	})

		const {skill6Display, skill7Display, trainingDisplay, extra4Display, extra5Display} = skills;
    const { message, success, error, name, email, photo, visualresume, personalInformationshow,personalInformation, educationalInformationshow, projectInformationshow, trainingInformationshow,
          skillsshow, hobbiesshow, areaOfIntrestshow, extraCurricularshow} = values;
    const token = getCookie('token');

    const init = () => {
//     getVisualResume(token).then(data => {
//         if (data.error) {
//             setValues({ ...values, error: data.error });
//         } else {
//             setValues({ ...values, success: true, message: "visual resume aa" });
//             console.log(data.personalInformation);
//         }
//     });
      getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
					props.vr(data.visualresume);
					
					if(data.photo){
						props.pr({
							name: data.name,
							email: data.email,
							photo: `${API}/user/photo/${data.username}`,
							visualresume: data.visualresume
										 });
						setValues({
                ...values,
                name: data.name,
                email: data.email,
                visualresume: data.visualresume,
								photo: `${API}/user/photo/${data.username}`,
              	personalInformationshow: true
            });
						if(!data.visualresume.skills.skill6Display){
								setSkills({...skills, skill6Display: false, 
													 trainingDisplay: data.visualresume.trainingInformation.trainingDisplay,
													 extra4Display: data.visualresume.extraCurricular.extra4Display,
													 extra5Display: data.visualresume.extraCurricular.extra5Display
													});
							}else{
								setSkills({...skills, skill6Display: data.visualresume.skills.skill6Display, 
													 skill7Display: data.visualresume.skills.skill7Display, 
													 trainingDisplay: data.visualresume.trainingInformation.trainingDisplay,
													 extra4Display: data.visualresume.extraCurricular.extra4Display,
													 extra5Display: data.visualresume.extraCurricular.extra5Display
													});
							}
					}else{
						props.pr({
							name: data.name,
							email: data.email,
							photo: "/images/profile.png",
							visualresume: data.visualresume
										 });
						setValues({
                ...values,
                name: data.name,
                email: data.email,
                visualresume: data.visualresume,
              personalInformationshow: true
            });
						if(!data.visualresume.skills.skill6Display){
								setSkills({...skills, skill6Display: false, 
													 trainingDisplay: data.visualresume.trainingInformation.trainingDisplay,
													 extra4Display: data.visualresume.extraCurricular.extra4Display,
													 extra5Display: data.visualresume.extraCurricular.extra5Display
													});
							}else{
								setSkills({...skills, skill6Display: data.visualresume.skills.skill6Display, 
													 skill7Display: data.visualresume.skills.skill7Display, 
													 trainingDisplay: data.visualresume.trainingInformation.trainingDisplay,
													 extra4Display: data.visualresume.extraCurricular.extra4Display,
													 extra5Display: data.visualresume.extraCurricular.extra5Display
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
    

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({ name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    
    const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
  
  const saveInfo = () => {
		let visualresumeCopy = visualresume;
      	visualresumeCopy.typeOfResume = `/visualresume/${props.type}/${props.template}`;
		 		setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    updateVisualResume(token, visualresume).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
						
                  setValues({
                      ...values,
										visualresume: visualresumeCopy,
										message: "Resume Information Saved Successfully",
                      success: true,
                      loading: false
                  });
          }
      });
  }
  
  const handleChangePersonalInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.pesrsonalInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };

  
  const personalInformationNext = () => {
    setValues({...values, personalInformationshow: false, personalInformation: true});
		props.vr(visualresume);
    //console.log(visualresume)
  }
  
  
  
  const personalInformationNext1 = () => {
    setValues({...values, personalInformation: false, educationalInformationshow: true});
    //console.log(visualresume)
  }
  
  const personalInformationBack1 = () => {
    setValues({...values, personalInformationshow: true, personalInformation: false});
    //console.log(visualresume)
  }
  
  const handleChangeEducationalInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.educationalInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const educationalInformationBack = () => {
    setValues({...values, educationalInformationshow: false, personalInformation: true});
    //console.log(visualresume)
  }
  
  const educationalInformationNext = () => {
    setValues({...values, educationalInformationshow: false, projectInformationshow: true});
    //console.log(visualresume)
  }
  
  const handleChangeProjectInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.projectInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
	const handleChangeProjectInformationQuill = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.projectInformation[n] = e;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
				
    };
  
  const projectInformationBack = () => {
    setValues({...values, projectInformationshow: false, educationalInformationshow: true});
    //console.log(visualresume)
  }
  
  const projectInformationNext = () => {
    setValues({...values, projectInformationshow: false, trainingInformationshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeTrainingInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.trainingInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
	const handleChangeTrainingInformationQuill = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.trainingInformation[n] = e;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
	
	const handleChangeTrainingInformationCheck = e => {
			let visualresumeCopy = visualresume;
			if(e.target.checked){
				visualresumeCopy.trainingInformation.trainingDisplay = true;
				setSkills({...skills, trainingDisplay: true});
				props.vr(visualresumeCopy);
				setValues({ ...values, visualresume: visualresumeCopy });
			}else{
				visualresumeCopy.trainingInformation.trainingDisplay = false;
				setSkills({...skills, trainingDisplay: false});
				props.vr(visualresumeCopy);
				setValues({ ...values, visualresume: visualresumeCopy });
			}
    };
  
  const trainingInformationBack = () => {
    setValues({...values, trainingInformationshow: false, projectInformationshow: true});
    //console.log(visualresume)
  }
  
  const trainingInformationNext = () => {
    setValues({...values, trainingInformationshow: false, hobbiesshow: true});
    //console.log(visualresume)
  }
  
	const handleChangeHobbies = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.hobbies[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const hobbiesInformationBack = () => {
    setValues({...values, hobbiesshow: false, trainingInformationshow: true});
    //console.log(visualresume)
  }
  
  const hobbiesInformationNext = () => {
    setValues({...values, hobbiesshow: false, areaOfIntrestshow: true});
    //console.log(visualresume)
  }
	
	
	
	const handleChangeArea = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.areaOfIntrest[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const areaInformationBack = () => {
    setValues({...values, areaOfIntrestshow: false, hobbiesshow: true});
    //console.log(visualresume)
  }
  
  const areaInformationNext = () => {
    setValues({...values, areaOfIntrestshow: false, skillsshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeSkillsInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.skills[n] = e.target.value;
       props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const skillsInformationBack = () => {
    setValues({...values, areaOfIntrestshow: true, skillsshow: false});
    //console.log(visualresume)
  }
  
  const skillsInformationNext = () => {
    setValues({...values, skillsshow: false,extraCurricularshow: true});
    //console.log(visualresume)
  }
	
	const skillsInformationAdd = () => {
		let visualresumeCopy = visualresume;
      
    if(!skill6Display){
			visualresumeCopy.skills.skill6Display = true;
			setSkills({...skills, skill6Display: true});
			setValues({ ...values, visualresume: visualresumeCopy});
			props.skills.skill6Add();
			props.vr(visualresumeCopy);
		}else{
			setSkills({...skills, skill7Display: true});
			props.skills.skill7Add();
			visualresumeCopy.skills.skill7Display = true;
			setValues({ ...values, visualresume: visualresumeCopy});
			props.vr(visualresumeCopy);
		}
  }
	
	const skillsInformationSkill6Delete = () => {
   let visualresumeCopy = visualresume;
		if (skill7Display){
			setSkills({...skills, skill7Display: false});
			props.skills.skill7Del();
			visualresumeCopy.skills.skill7Display = false;
			visualresumeCopy.skills.skill6 = visualresumeCopy.skills.skill7;
			visualresumeCopy.skills.rating6 = visualresumeCopy.skills.rating7;
			visualresumeCopy.skills.skill7 = "Skill 7";
			visualresumeCopy.skills.rating7 = "4";
			props.vr(visualresumeCopy);
      setValues({ ...values, visualresume: visualresumeCopy });
		}else{
			setSkills({...skills, skill6Display: false});
			props.skills.skill6Del();
			visualresumeCopy.skills.skill6Display = false;
			visualresumeCopy.skills.skill6 = "Skill 6";
			visualresumeCopy.skills.rating6 = "4";
			props.vr(visualresumeCopy);
			visualresumeCopy.skills.skill6Display = false;
      setValues({ ...values, visualresume: visualresumeCopy });
		}
  }
	
	const skillsInformationSkill7Delete = () => {
		let visualresumeCopy = visualresume;
   	setSkills({...skills, skill7Display: false});
		props.skills.skill7Del();
		visualresumeCopy.skills.skill7Display = false;
		visualresumeCopy.skills.skill7 = "Skill 7";
		visualresumeCopy.skills.rating7 = "4";
		props.vr(visualresumeCopy);
		setValues({ ...values, visualresume: visualresumeCopy });
  }
	
	const handleChangeExtraCurricular = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.extraCurricular[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const extraInformationBack = () => {
    setValues({...values, extraCurricularshow: false, skillsshow: true});
    //console.log(visualresume)
  }
  
  const extraInformationNext = () => {
    setValues({...values, extraCurricularshow: true});
    //console.log(visualresume)
  }
	
	const extraInformationAdd = () => {
		let visualresumeCopy = visualresume;
      
    if(!extra4Display){
			visualresumeCopy.extraCurricular.extra4Display = true;
			setSkills({...skills, extra4Display: true});
			setValues({ ...values, visualresume: visualresumeCopy});
			
			props.vr(visualresumeCopy);
		}else{
			setSkills({...skills, extra5Display: true});
			
			visualresumeCopy.extraCurricular.extra5Display = true;
			setValues({ ...values, visualresume: visualresumeCopy});
			props.vr(visualresumeCopy);
		}
  }
	
	const extraInformationExtra4Delete = () => {
   let visualresumeCopy = visualresume;
		if (extra5Display){
			setSkills({...skills, extra5Display: false});
			
			visualresumeCopy.extraCurricular.extra5Display = false;
			visualresumeCopy.extraCurricular.extra4 = visualresumeCopy.extraCurricular.extra5;
			
			visualresumeCopy.extraCurricular.extra5 = "Extracurricluar Activity 5";
			
			props.vr(visualresumeCopy);
      setValues({ ...values, visualresume: visualresumeCopy });
		}else{
			setSkills({...skills, extra4Display: false});
			
			visualresumeCopy.extraCurricular.extra4Display = false;
			visualresumeCopy.extraCurricular.extra4 = "Extracurricluar Activity 4";
			
			props.vr(visualresumeCopy);
			
      setValues({ ...values, visualresume: visualresumeCopy });
		}
  }
	
	const extraInformationExtra5Delete = () => {
		let visualresumeCopy = visualresume;
   	setSkills({...skills, extra5Display: false});
		
		visualresumeCopy.extraCurricular.extra5Display = false;
		visualresumeCopy.extraCurricular.extra5 = "Extracurricluar Activity 5";
		
		props.vr(visualresumeCopy);
		setValues({ ...values, visualresume: visualresumeCopy });
  }
  

    const personalInformationForm = () => {
        return (
          <div className= "container">
						<div style= {{width: `200px`}}>
							<img
                            src={photo}
                            className="img img-fluid img-thumbnail mb-3"
                            style={{ maxHeight: 'auto', maxWidth: '100%' }}
                            alt="user profile"
                        />
						</div>
            <div className="form-group">
              <label className="lead">Name</label>
              <input 
                disabled
                type = "text"
                className="form-control"
                value={name}>
              </input>
              <label className="lead">Email</label>
              <input 
                disabled
                type = "text"
                className="form-control"
                value={email}>
              </input>
             </div>
            <div className="form-group">
              
              
            <Button className = "btn alert mr-4">Back</Button>
            <Button className = "btn alert mr-4" onClick = {personalInformationNext}>Next</Button>
            <NavLink href="/user/update/account-information" className = "btn btn-danger">Update User Information</NavLink>
          </div>
            </div>
            
        );
    };
  
  const personalInformationForm1 = () => {
        return (
          <div className= "container">
           
            <div className="form-group">
              <label className="lead">Designation</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.pesrsonalInformation.designation}
                onChange= {handleChangePersonalInformation("designation")}>
              </input>
              <label className="lead">Phone Number</label>
              <input 
                type = "text"
                className="form-control"
                value={visualresume.pesrsonalInformation.phone}
                onChange= {handleChangePersonalInformation("phone")}>
              </input>
              <label className="lead">Address</label>
              <input 
                type = "text"
                className="form-control"
                value={visualresume.pesrsonalInformation.address}
                onChange= {handleChangePersonalInformation("address")}>
              </input>
              <label className="lead">About Me</label>
              <textarea
                className="form-control"
                value={visualresume.pesrsonalInformation.aboutMe}
                onChange= {handleChangePersonalInformation("aboutMe")}>
              </textarea>
             </div>
            <Button className = "btn alert mr-4"onClick = {personalInformationBack1}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {personalInformationNext1}>Next</Button>
            
          </div>
            
        );
    };
  
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
            {personalInformationshow && personalInformationForm()}
            {personalInformation && personalInformationForm1()}
            {educationalInformationshow && educationalInformationForm()}
            {projectInformationshow && projectInformationForm()}
						{trainingInformationshow && trainingInformationForm()}
						{hobbiesshow && hobbiesInformationForm()}
						{areaOfIntrestshow && areaInformationForm()}
						{skillsshow && skillsInformationForm()}
						{extraCurricularshow && extraInformationForm()}
            <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>
        </React.Fragment>
    );
};

export default UserInformation;