import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../components/Layout"
import Private from "../../../../components/auth/Private";
import DateComponent from "../../../../components/DateComponent"
import { getCookie } from '../../../../actions/auth';
import { getExamplan } from '../../../../actions/examplan';
import { getTest, updateTest, getUserTest, updateUserTest, updateTestUser } from "../../../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import renderHTML from 'react-render-html';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const DailyTest = ({showQuestion , questions, answerresponse , correctresponse, response, bgColor, slug}) => {
	let time = 0
	const LStime = () => {
		let t = 0;
		let testObj = {}
			if (typeof window === 'undefined') {
					return 0;
			}

			if (localStorage.getItem('test')) {
					testObj = JSON.parse(localStorage.getItem('test'));
				if((Date.now() - testObj.time) > 60000*questions.length)
					{
						localStorage.removeItem('test');
						t = 0;
					}
				else
					{t = 60000*questions.length - Date.now() + testObj.time - 3000}
					return t;
			} else {
					return 60000*questions.length;
			}
    };
	
	const LSanswerresponse = () => {
		let t = answerresponse;
		let testObj = {}
			if (typeof window === 'undefined') {
					return answerresponse;
			}

			if (localStorage.getItem('test')) {
					testObj = JSON.parse(localStorage.getItem('test'));
					if (testObj.answerresponse){
						return testObj.answerresponse;
					}else{
						return answerresponse;
					}
					
			} else {
					return answerresponse;
			}
    };
	
	const LSresponse = () => {
		let t = response;
		let testObj = {}
			if (typeof window === 'undefined') {
					return response;
			}

			if (localStorage.getItem('test')) {
					testObj = JSON.parse(localStorage.getItem('test'));
					if (testObj.response){
						return testObj.response;
					}else{
						return response;
					}
			} else {
					return response;
			}
    };
	
	const LScorrectresponse = () => {
		let t = correctresponse;
		let testObj = {}
			if (typeof window === 'undefined') {
					return correctresponse;
			}

			if (localStorage.getItem('test')) {
					testObj = JSON.parse(localStorage.getItem('test'));
					if (testObj.correctresponse){
						return testObj.correctresponse;
					}else{
						return correctresponse;
					}
			} else {
					return correctresponse;
			}
    };
	
	const LSbgColor = () => {
		let t = bgColor;
		let testObj = {}
			if (typeof window === 'undefined') {
					return bgColor;
			}

			if (localStorage.getItem('test')) {
					testObj = JSON.parse(localStorage.getItem('test'));
					if (testObj.bgColor){
						return testObj.bgColor;
					}else{
						return bgColor;
					}
			} else {
					return bgColor;
			}
    };
	
	const [timeValues, setTimeValues] = useState({
    testStart: false,
    testStop: false,
    t: LStime(),
		testStart1: false,
		testStop1: false,
		testStart2: true
  });
	
	
	const { testStart, testStop, t, testStart1, testStop1, testStart2} = timeValues;
	
	const Completionist = () => <span>You are good to go!</span>;
	
  const [values, setValues] = useState({
    questions: questions,
    answerresponse: LSanswerresponse(),
    overallresponse: [0, questions.length],
    correctresponse: LScorrectresponse(),
    response: LSresponse(),
		bgColor: LSbgColor(),
    showQuestion: showQuestion
  });
  
	
	const [count, setCount] = useState(0);
  
	const [testarr,setTestarr] = useState({});
	
	const token = getCookie("token");
	
	const init = () =>{
		getUserTest(token).then(data=>{
			if(data.error){
				console.log(data.error)
			}else{
				console.log(data)
				setTestarr(data);
				let arr = data.test;
				let i = arr.indexOf(slug);
				if(i !== -1){
					setTimeValues({...timeValues, testStart2: false, testStop1: true});
				}
			}
		});
	}
	
	useEffect(() => {
      init();
 
  }, []);
  
	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a complete state
			return <Completionist />;
		} else {
			time = hours*3600*1000 + minutes * 60*1000 + seconds * 1000
		
			return <h2 style = {{color:`red`, fontSize:`2rem`}}>{hours}:{minutes}:{seconds}</h2>;
		}
	};
  
  const saveLS = () => {
    if (typeof window !== 'undefined') {
        if (!localStorage.getItem('test')){
          localStorage.setItem('test', JSON.stringify({time: Date.now()}));
        }

        }
  }
  
  
	
  
 
  const handleOption = i => e => {
    let answerCopy = values.answerresponse
    let correctCopy = values.correctresponse
    let responseCopy = values.response
		let bgCopy = values.bgColor
    bgCopy[count] = "#007bff"
    answerCopy[i] = e.target.value
    if(questions[i].answer == e.target.value){
      correctCopy[i] = true
    }
    setTimeValues({...timeValues, t: time});
    if(e.target.value == "a"){
      responseCopy[i] = [true, false, false, false]
    }else if(e.target.value == "b"){
      responseCopy[i] = [false, true, false, false]
    }else if(e.target.value == "c"){
      responseCopy[i] = [false, false, true, false]
    }else {
      responseCopy[i] = [false, false, false, true]
    }
    setValues({ ...values, answerresponse: answerCopy, correctresponse: correctCopy, response: responseCopy, bgColor: bgCopy});
		if (typeof window !== 'undefined') {
        if (localStorage.getItem('test')){
					let testObj = JSON.parse(localStorage.getItem('test'));
					testObj.answerresponse = answerCopy
					testObj.correctresponse = correctCopy
					testObj.response = responseCopy
					testObj.bgColor = bgCopy
          localStorage.setItem('test', JSON.stringify(testObj));
        }

        }
  };
  
  
  
  const handleNext = () => {
    let showQuestionCopy = showQuestion
    if (count !== questions.length-1){
      showQuestionCopy[count] = false
      showQuestionCopy[count+1] = true
			setCount(count + 1);
    }
		setTimeValues({...timeValues, t: time});
    setValues({ ...values, showQuestion: showQuestionCopy});
  }
  
  const handleBack = () => {
    let showQuestionCopy = showQuestion
    if (count !== 0){
      showQuestionCopy[count] = false
      showQuestionCopy[count-1] = true
			setCount(count-1)
    }
		setTimeValues({...timeValues, t: time});
    setValues({ ...values, showQuestion: showQuestionCopy});
  }
	
	const handleClear = () => {
    let responseCopy = values.response
		let correctCopy = values.correctresponse
		let answerCopy = values.answerresponse
		let bgCopy = values.bgColor
    bgCopy[count] = "white"
    responseCopy[count] = [false, false, false, false]
		correctCopy[count] = false
		answerCopy[count] = "e"
    setValues({ ...values, response: responseCopy, answerresponse: answerCopy, correctresponse: correctCopy, bgColor: bgCopy});
		setTimeValues({...timeValues, t: time});
		if (typeof window !== 'undefined') {
        if (localStorage.getItem('test')){
					let testObj = JSON.parse(localStorage.getItem('test'));
					testObj.answerresponse = answerCopy
					testObj.correctresponse = correctCopy
					testObj.response = responseCopy
					testObj.bgColor = bgCopy
          localStorage.setItem('test', JSON.stringify(testObj));
        }

        }
  }
	
	const handleMark = () => {
		let bgCopy = values.bgColor
    bgCopy[count] = "#17a2b8"
		setValues({...values, bgColor: bgCopy});
		setTimeValues({...timeValues, t: time});
		if (typeof window !== 'undefined') {
        if (localStorage.getItem('test')){
					let testObj = JSON.parse(localStorage.getItem('test'));
					testObj.bgColor = bgCopy
          localStorage.setItem('test', JSON.stringify(testObj));
        }

        }
  }
	
	const handleClickQuestions = (i) =>{
		let showQuestionCopy = showQuestion
		showQuestionCopy.map((q, index)=> {
			if(index == i){
				return showQuestionCopy[index] = true;
			}else{
				return showQuestionCopy[index] = false;
			}
		})
		setValues({ ...values, showQuestion: showQuestionCopy});
		setTimeValues({...timeValues, t: time});
		setCount(i);
	}
  
  const showQuestions = () => {
		
		return (
	values.questions.map((q , i) => {
     return ( 
			 <div key = {i}>
				 {showQuestion[i] &&
					 <div className = "form-group">
             <div>
              {renderHTML(q.question)}
             </div>
             <div>
                <label>
                  <input type="radio" name = "option" onChange={handleOption(i)} value = "a" checked = {values.response[i][0]}/>
                  Option A: {renderHTML(q.optiona)}
                </label>
               <br></br>
                <label>
                  <input type="radio" name = "option" onChange={handleOption(i)} value = "b" checked = {values.response[i][1]}/>
                  Option B: {renderHTML(q.optionb)}
                </label>
               <br></br>
                <label>
                  <input type="radio" name = "option" onChange={handleOption(i)} value = "c" checked = {values.response[i][2]}/>
                  Option C: {renderHTML(q.optionc)}
                </label>
               <br></br>
               <label>
                  <input type="radio" name = "option" onChange={handleOption(i)} value = "d" checked = {values.response[i][3]}/>
                  Option D: {renderHTML(q.optiond)}
                </label>
             </div>
					 </div>
				
					 }
			 </div>
		 )
   })
			)
  }
	
	const showQuestionsButtons = () => {
		
		return (
	values.questions.map((q , i) => {
		if(count==i){
			return ( 
			 <Col key = {i} xs = "4">
				<button className = "btn btn-sm" style = {{backgroundColor: `grey`, outline: `solid grey`, color: `white`}} onClick = {()=> handleClickQuestions(i)}>{i+1}</button>
			 </Col>
		 )
		}else{
			return ( 
			 <Col key = {i} xs = "4">
				<button className = "btn btn-sm" style = {{backgroundColor: `${bgColor[i]}`, outline: `solid grey`}} onClick = {()=>handleClickQuestions(i)}>{i+1}</button>
			 </Col>
		 )
		}
     
   })
			)
  }
	
	const startTestDiv = () =>{
		return (
			<div className = "container">
				<h3>Click here to start your test</h3>
				<Button color = "primary" onClick = {()=>{setTimeValues({...timeValues, testStart1: true})}}>Start</Button>
				{testStart1 && <div>
					<h3>Your test will start in</h3>
					<Countdown
						date={Date.now() + 5000}
						renderer={renderer}
						onComplete = {()=>{setTimeValues({...timeValues, testStart1: false, testStart: true, testStart2: false})}}
					/> 
					</div>
				}
			</div>
		)
	}
	
	const stopTestDiv = () => {
		return (
			<div className = "container">
				<h3>Your Test is Submitted</h3>
				<h2>Click here for Solution</h2>
				<Button color = "primary" onClick = {()=>{Router.replace(`/user/test/daily/solution/${slug}`)}}>Solution..</Button>
			</div>
		)
	}
	
	const testComplete = () =>{
		if (localStorage.getItem('test')) {
					localStorage.removeItem('test');
			}
		let testCopy = testarr;
		let num = 0;
		console.log(testCopy)
		testCopy.test.push(slug);
		testCopy.answersresponse.push(values.answerresponse);
		values.answerresponse.map((a, i)=>{
			
			if(a == values.questions[i].answer){
				num = num + 1
			}
		})
		
		testCopy.overallresponse.push([num, questions.length]);
		updateUserTest(token, testCopy).then((res, err)=>{
			if(err){
				console.log(err);
			}else{
				let data = {overallresponse: {overallresponse: [num, questions.length]},
									 answersresponse: {answersresponse: values.answerresponse}}
				updateTestUser(token, data, slug).then((r, e)=>{
					if(e){
						console.log(e);
					}else{
						setTimeValues({...timeValues, testStart: false, testStop1: true});
					}
				})
				
			}
		})
    
  }
	
  const handleSubmit = () => {
   testComplete()
  }
  
	
	
  return (
  <Layout>
      <Private>
        <div className="container">
					{testStart2 && startTestDiv()}
					{testStart && <div>
					<Row>
						<Col xs = "12">
						<Countdown
						date={Date.now() + t}
						renderer={renderer}
						onStart = {saveLS}
						onComplete = {testComplete}
					/>
							<hr></hr>
					</Col>
						<Col xs = "10">
							{showQuestions()}
							<Button onClick = {handleBack} className = "mr-4 btn-lg">Back</Button>
							<Button onClick = {handleNext} className = "mr-4 btn-lg">Next</Button>
							<Button onClick = {handleClear} className = "mr-4 btn-lg" color = "danger">Clear</Button>
							<Button onClick = {handleMark} className = "mr-4 btn-lg" color = "info">Mark</Button>
						</Col>
						<Col xs = "2">
							<div className = "h2">Questions</div>
							<hr></hr>
							<Row>
								{showQuestionsButtons()}
							</Row>
						</Col>
					</Row>
					<Button className = "mt-4 mb-4 btn-lg" color = "primary" onClick={handleSubmit}>Submit</Button>
					</div>}
					{testStop1 && stopTestDiv()}
				</div>
      </Private>
  </Layout>
)
}

DailyTest.getInitialProps = ({ query }) => {
    return getTest(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
          let showQuestion = [];
          let answerresponse = [];
          let correctresponse = [];
          let response = [];
					let bgColor = [];
          data.questions.map((q,i)=> {
            if(i==0){
              return showQuestion.push(true);
            }else{
              return showQuestion.push(false);
            }
            
          });
          
          data.questions.map((q,i)=> {return answerresponse.push("e")});
          data.questions.map((q,i)=> {return correctresponse.push(false)});
          data.questions.map((q,i)=> {return response.push([false, false, false, false])});
					data.questions.map((q,i)=> {return bgColor.push("white")});
            return ({  showQuestion, questions: data.questions, answerresponse, correctresponse,  response, bgColor, slug: data.slug});
        }
    });
};

export default DailyTest;