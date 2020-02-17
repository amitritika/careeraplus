import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../components/Layout"
import Private from "../../../../../components/auth/Private";
import DateComponent from "../../../../../components/DateComponent"
import { getCookie } from '../../../../../actions/auth';
import { getExamplan } from '../../../../../actions/examplan';
import { getTest, updateTest, getUserTest, updateUserTest } from "../../../../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import renderHTML from 'react-render-html';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const DailyTestSolution = ({showQuestion , questions, usersanswerresponse , usersoverallresponse, slug}) => {

	const [count, setCount] = useState(0);
  
	const [testarr,setTestarr] = useState({});
  
  const [values, setValues] = useState({
    questions: questions,
    answersresponse: "",
    overallresponse: [0, questions.length],
    usersanswerresponse: usersanswerresponse,
    usersoverallresponse: usersoverallresponse,
    showQuestion: showQuestion
  });
	
	const token = getCookie("token");
	
	const init = () =>{
		getUserTest(token).then(data=>{
			if(data.error){
				console.log(data.error)
			}else{
				setTestarr(data);
				let arr = data.test;
				let i = arr.indexOf(slug);
        setValues({...values, answersresponse: data.answersresponse[i], overallresponse: data.overallresponse[i]});
			}
		});
	}
	
	useEffect(() => {
      init();
 
  }, []);
  
	
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
		
  };
  
  
  
  const handleNext = () => {
    let showQuestionCopy = showQuestion
    if (count !== questions.length-1){
      showQuestionCopy[count] = false
      showQuestionCopy[count+1] = true
			setCount(count + 1);
    }
    setValues({ ...values, showQuestion: showQuestionCopy});
  }
  
  const handleBack = () => {
    let showQuestionCopy = showQuestion
    if (count !== 0){
      showQuestionCopy[count] = false
      showQuestionCopy[count-1] = true
			setCount(count-1)
    }
    setValues({ ...values, showQuestion: showQuestionCopy});
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
							 <h3>Question:</h3>
							 {renderHTML(q.question)}
             </div>
             <div>
							 <h3>Solution:</h3>
               {renderHTML(q.solution)}
             </div>
             <div>
             <h3>Your Answer:</h3> 
							 <h2>{values.answersresponse[i]}</h2>
             </div>
             <div>
               <h3>Actual Answer:</h3> 
							 <h2>{q.answer}</h2>
             </div>
             <div>
               <h2>{usersanswerresponse[i]}% Gave Correct Answer</h2>
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
				<button className = "btn btn-sm" style = {{backgroundColor: `white`, outline: `solid grey`}} onClick = {()=>handleClickQuestions(i)}>{i+1}</button>
			 </Col>
		 )
		}
     
   })
			)
  }

	
  return (
  <Layout>
      <Private>
        <div className="container">
        <div>
					<Row>
						<Col xs = "12">
              <h2>Your Score: {values.overallresponse[0]}/{values.overallresponse[1]}</h2>
              <h2>Average Score By other People: {usersoverallresponse}/{values.overallresponse[1]}</h2>
							<hr></hr>
					</Col>
						<Col xs = "10">
							{showQuestions()}
							<Button onClick = {handleBack} className = "mr-4 btn-lg">Back</Button>
							<Button onClick = {handleNext} className = "mr-4 btn-lg">Next</Button>
						</Col>
						<Col xs = "2">
							<div className = "h2">Questions</div>
							<hr></hr>
							<Row>
								{showQuestionsButtons()}
							</Row>
						</Col>
					</Row>
					</div>
				</div>
      </Private>
  </Layout>
)
}

DailyTestSolution.getInitialProps = ({ query }) => {
    return getTest(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
          let showQuestion = [];

          data.questions.map((q,i)=> {
            if(i==0){
              return showQuestion.push(true);
            }else{
              return showQuestion.push(false);
            }
            
          });
          
          let answers = [];
          let count = 0;
          let total = 0;
          
          data.questions.map((q,i)=> {
            let userCount = 0;
            let aCount = 0;
            data.answersresponse.map((a, idx)=>{
              if (a.answersresponse[i] !== "e"){
                if(a.answersresponse[i] == q.answer){
                  userCount = userCount +1;
                  aCount = aCount +1;
                }else{
                  userCount = userCount +1;
                }
              }
            });
            answers.push(Math.floor((aCount/userCount)*100));
          });
          
          data.overallresponse.map((q, i)=>{
            total = total + q.overallresponse[0];
            count = count +1
          });
          
          count = Math.floor(total/count)
         
            return ({  showQuestion, questions: data.questions, usersanswerresponse: answers, usersoverallresponse: count, slug: data.slug});
        }
    });
};

export default DailyTestSolution;