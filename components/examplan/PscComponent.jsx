import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import DateComponent from "../DateComponent"
import {dateObj} from "../../helpers/examplan/dates"
import {subjectDaysObj} from "../../helpers/examplan/subjectdays"
import {DateCalendarComponent, WeekDayNameComponent, WeekDaysComponent} from "../examplan/helper"
import {WeekComponent, MonthComponent, YearComponent} from "../examplan/calendar"
import {subjectObject} from "../../helpers/examplan/subjects"
import { API } from '../../config';
import { getExamplan, updateExamplan } from '../../actions/examplan';
import { isAuth, getCookie } from "../../actions/auth";
import Link from "next/link"
const PscComponent = (props) => {
  
  const exam = props.exam;
  const stream = props.stream;
  const subjectName = subjectObject();
  const [revision, setrevision] = useState(false);
  const [vacation, setvacation] = useState(false);
	const [startDateObj, setstartDateObj] = useState(new Date(2020,0,1));
	const [endDateObj, setendDateObj] = useState(new Date(2020,11,31));
  const [startDateVacObj, setstartDateVacObj] = useState(new Date(2020,9,25));
	const [endDateVacObj, setendDateVacObj] = useState(new Date(2020,9,31));
	const [calendar1, setcalendar1] = useState([]);
	const [cal, setcal] = useState(false);
	const user = isAuth();
	const token = getCookie('token');
	const [data, setdata] = useState({});
	
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
  
  const calendar = () => {
		
		const subjectObj = {
			startDate: startDateObj,
			endDate: endDateObj,
			subjectName: subjectName[exam[0]][stream[0]]["subjectName"],
			subjectWeightage: subjectName[exam[0]][stream[0]]["subjectWeightage"],
			subjectTopicsName: subjectName[exam[0]][stream[0]]["subjectTopicsName"],
			subjectTopicsWeightage: subjectName[exam[0]][stream[0]]["subjectTopicsWeightage"],
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
  
  return(
    <div className = "examplan">
					<div className = "mx-5 mt-5 h3 text-center"><Link href="/examplan"><a>Examplan</a></Link> / <Link href="/examplan/psc"><a>PSC</a></Link></div>
					<h2>{exam[1]} {stream[1]} Plan</h2>
						{showMessage()}
						{showError()}
						{showLoading()}
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
					{saveBtn}

					{cal1}
				</div>
  )
}

export default PscComponent;