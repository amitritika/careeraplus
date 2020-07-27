import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from "next/link"
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import DateComponent from "../DateComponent"
import {dateObj} from "../../helpers/examplan/dates"
import {subjectDaysObj} from "../../helpers/examplan/subjectdays"
import {DateCalendarComponent, WeekDayNameComponent, WeekDaysComponent} from "../examplan/helper"
import {WeekComponent, MonthComponent, YearComponent} from "../examplan/calendar"
import SubjectW from "./SubjectW"
import {subjectObject} from "../../helpers/examplan/subjects"
import { API } from '../../config';
import { getExamplan, updateExamplan } from '../../actions/examplan';
import { isAuth, getCookie } from "../../actions/auth";

const EseComponent = (props) => {
  const exam = props.exam;
  const stream = props.stream;
  const subjectName1 = subjectObject();
	let subjectName = subjectName1[exam[0]][stream[0]]["subjectName"][0];
	let subjectWeightage = subjectName1[exam[0]][stream[0]]["subjectWeightage"][0];
	let subjectTopicsName = subjectName1[exam[0]][stream[0]]["subjectTopicsName"][0];
	let subjectTopicsWeightage = subjectName1[exam[0]][stream[0]]["subjectTopicsWeightage"][0];
  const [revision, setrevision] = useState(false);
  const [vacation, setvacation] = useState(false);
	const [startDateObj, setstartDateObj] = useState(new Date(2020,0,1));
	const [endDateObj, setendDateObj] = useState(new Date(2020,11,31));
  const [startDateVacObj, setstartDateVacObj] = useState(new Date(2020,9,25));
	const [endDateVacObj, setendDateVacObj] = useState(new Date(2020,9,31));
	const [calendar1, setcalendar1] = useState([]);
	const [cal, setcal] = useState(false);
  const [classSelected,  setclassSelected] = useState("0");
	const user = isAuth();
	const token = getCookie('token');
	const [data, setdata] = useState({});
	
	const subjectColor = ["rgb(221, 217, 196)","rgb(197, 217, 241)","rgb(242, 220, 219)","rgb(235, 241, 222)","rgb(228, 223, 236)","rgb(218, 238, 243)","rgb(253, 233, 217)","rgb(196, 189, 151)","rgb(141, 180, 226)","rgb(184, 204, 228)","rgb(230, 184, 183)","rgb(216, 228, 188)","rgb(204, 192, 218)","rgb(183, 222, 232)","rgb(252, 213, 180)","rgb(83, 141, 213)","rgb(149, 179, 215)","rgb(218, 150, 148)","rgb(196, 215, 155)","rgb(177, 160, 199)","rgb(146, 205, 220)","rgb(250, 191, 143)","rgb(217, 217, 217)","rgb(191, 191, 191)","rgb(255, 255, 255)"];
  
	const [subjectW, setSubjectW] = useState({});
	const [showSubjectW, setShowSubjectW] = useState(false);
	
	const [values, setValues] = useState({
        error: false,
        success: false,
        loading: false,
        message:''
    });
	
	const { error, success, loading, message} = values;
  let subjectDaysObjVar = {};
	let vac = "";
	let cal1 = "";
	let saveBtn = "";
	
  
  const startDate = (date) => {
		setcal(false);
		setstartDateObj(date);
  }
  const endDate = (date) => {
		setendDateObj(date);
		setcal(false);
  }
	
	const startDateVac = (date) => {
    setstartDateVacObj(date);
		setcal(false);
  }
  const endDateVac = (date) => {
    setendDateVacObj(date);
		setcal(false);
  }
  
  const handleChange = (event) => {
    setrevision(!revision);
  }
	const handleChangeVac = (event) => {
    setvacation(!vacation);
  }
  
  const handleClassChange = (event) => {
    setclassSelected(event.target.value);
		
  }
  
  const saveCalendar = () => {
		setValues({ ...values, loading: true });
      updateExamplan(token, data).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
                  setValues({
                      ...values,
										message: "Examplan Saved Successfully",
                      success: true,
                      loading: false
                  });
          }
      });
	}
	
	 const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
  
  const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');

	
	const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );
  
	useEffect(()=>{
		subjectWeightagePrint();
		
	}, [])
	
  const calendar = () => {
		const subjectObj = {
			startDate: startDateObj,
			endDate: endDateObj,
			subjectName: subjectName,
			subjectWeightage: subjectWeightage,
			subjectTopicsName: subjectTopicsName,
			subjectTopicsWeightage: subjectTopicsWeightage,
			revision: revision, 
			vacation: vacation, 
			startDateVac: startDateVacObj, 
			endDateVac: endDateVacObj
		}
    
    subjectDaysObjVar = subjectDaysObj(subjectObj);
		setcalendar1(subjectDaysObjVar.calendar);
		setdata({examplan:
								{goal: [exam[1], stream[1],`/examplan/${exam[0]}/${stream[0]}`],
								calendar: subjectDaysObjVar.calendar,
								test: [],
								response: [],
								overallresponse: []}
		});
		setcal(true);
  }
  
  if(vacation){
		vac = <React.Fragment>
							<DateComponent date={startDateVac} str = "Vacation Start"/>
							<DateComponent date={endDateVac} str = "Vacation End"/>
					</React.Fragment>
	}
	else{
		vac = "";
	}
	
	if(cal){
	cal1 = 	<React.Fragment>
			<div style = {{backgroundColor: `#721c24`, borderRadius: `10px`, margin: `10px`, border: `1px solid black`, height: `50px`, color: `white`}}>
				Calendar for {exam[1]} {stream[1]} for {user.name}
			</div>
			<YearComponent
				monthName = {calendar1.monthName}
				bgColor = {calendar1.bgColor} 
				dates = {calendar1.dates} 
				dateColor = {calendar1.dateColor} 
				sub = {calendar1.sub} 
				topic = {calendar1.topic} 
				test = {calendar1.test}
				/>
		</React.Fragment>
		saveBtn = <Button outline color="primary" size="md" onClick = {() => {saveCalendar()}}>Save My Calendar</Button>
	}
	
	if(classSelected === "0"){
		subjectName = subjectName1[exam[0]][stream[0]]["subjectName"][0];
		subjectWeightage = subjectName1[exam[0]][stream[0]]["subjectWeightage"][0];
		subjectTopicsName = subjectName1[exam[0]][stream[0]]["subjectTopicsName"][0];
		subjectTopicsWeightage = subjectName1[exam[0]][stream[0]]["subjectTopicsWeightage"][0];
	}
	
	if(classSelected === "1"){
		subjectName = subjectName1[exam[0]][stream[0]]["subjectName"][1];
		subjectWeightage = subjectName1[exam[0]][stream[0]]["subjectWeightage"][1];
		subjectTopicsName = subjectName1[exam[0]][stream[0]]["subjectTopicsName"][1];
		subjectTopicsWeightage = subjectName1[exam[0]][stream[0]]["subjectTopicsWeightage"][1];
	}
	
	if(classSelected === "2"){
		subjectName = subjectName1[exam[0]][stream[0]]["subjectName"][2];
		subjectWeightage = subjectName1[exam[0]][stream[0]]["subjectWeightage"][2];
		subjectTopicsName = subjectName1[exam[0]][stream[0]]["subjectTopicsName"][2];
		subjectTopicsWeightage = subjectName1[exam[0]][stream[0]]["subjectTopicsWeightage"][2];
	}
	
	const subjectWeightagePrint =()=> {

		let fac = 1
		let start = 0
		let count = 0
		let max = 0
		let k = 0
		let marks = 85
		
		if(classSelected === "0"){
		marks = 300
	}
	
	if(classSelected === "1"){
		marks = 200
	}
	
	if(classSelected === "2"){
	fac = 1/(1-subjectWeightage[0])
			marks = 300
	}
		
		let subjectMarks = [];
		let subjectTopicsMarks = [];
		let subjectTopicsMarks1 = [];
		let subjectLocation = [];
		let subjectTopicSequence = [];
		
		for (var i = start; i<subjectName.length; i++){
		subjectMarks.push(subjectWeightage[i]*fac*marks);
		for (var j = 0; j<subjectTopicsName[i].length; j++)
		{
			subjectTopicsMarks.push((subjectWeightage[i]*fac*marks)*subjectTopicsWeightage[i][j]);
			subjectTopicsMarks1.push((subjectWeightage[i]*fac*marks)*subjectTopicsWeightage[i][j]);
			subjectLocation.push([i,j]);
		}
	}

	for (var i = 0; i<subjectTopicsMarks1.length; i++)
	{
		max = subjectTopicsMarks1[0];
		k = 0;
		for (var j = 0; j<subjectTopicsMarks1.length; j++)
		{
			if (max < subjectTopicsMarks1[j])
			{
				max = subjectTopicsMarks1[j];
				k = j;

			}
		}

		subjectTopicsMarks1[k] = 0;
		subjectTopicSequence.push([subjectTopicsMarks[k], subjectLocation[k][0], subjectLocation[k][1]]);
				
		
	}
		setSubjectW(subjectTopicSequence);
		setShowSubjectW(true);
		console.log(subjectTopicSequence);
		
		
		

	}
	
	const showSubjectWeighatge = () => {
		return (
			subjectW.map((q, i)=> {
				let bg = subjectColor[subjectW[i][1]];
				let subName = subjectName[subjectW[i][1]];
				let topicName = subjectTopicsName[subjectW[i][1]][subjectW[i][2]];
				let subMarks = (subjectW[i][0].toFixed(2)).toString();
				return(
					<SubjectW bg = {bg} subName = {subName} topicName = {topicName} subMarks = {subMarks}/>
				)
			})
			)
	}
  
  return(
    <div className = "examplan">
      <div className = "mx-5 mt-5 h3 text-center"><Link href="/examplan"><a>Examplan</a></Link> / <Link href="/examplan/ese"><a>ESE</a></Link></div>
        <h2>{exam[1]} {stream[1]} Plan</h2>
						{showMessage()}
						{showError()}
						{showLoading()}
				<label>
          Core Only:
          <input type="radio" name = "class" onChange={handleClassChange} value = "0"/>
        </label>
				<label>
          GS Only:
          <input type="radio" name = "class" value = "1" onChange={handleClassChange}/>
        </label>
				<label>
          Both Core & GS:
          <input type="radio" name = "class" value = "2" onChange={handleClassChange}/>
        </label>
        <DateComponent date={startDate} str="Start"/>
        <DateComponent date={endDate} str = "End"/>
        <label>
          Revision:
          <input type="checkbox" onChange={handleChange} />
        </label>
				<br></br>
				<label>
         Vacation:
          <input type="checkbox" onChange={handleChangeVac} />
        </label>
				{vac}
				<br></br>
        <Button outline color="warning" size="md" className = "mr-4" onClick = {()=> {calendar()}}>Submit</Button>
			<Button outline color="warning" size="md" className = "mr-4" onClick = {()=> {subjectWeightagePrint()}}>Subject Weightage</Button>
        {cal1}
			
			{showSubjectW && 
					<div className = "container mt-2">
					<Row>
						<Col xs = "3">
							<div style = {{backgroundColor: `purple`, color: `white`, border: `black solid 1px`}}>Subject</div>
						</Col>
						<Col xs = "6">
							<div style = {{backgroundColor: `purple`, color: `white`, border: `black solid 1px`}}>Topics</div>
						</Col>
						<Col xs = "2">
							<div style = {{backgroundColor: `purple`, color: `white`, border: `black solid 1px`}}>Marks</div>
						</Col>
				
					{showSubjectWeighatge()}

					</Row>
					</div>
					}
      </div>
  )
}

export default EseComponent;