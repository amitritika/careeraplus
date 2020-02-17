import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../components/Layout"
import Admin from "../../../../../components/auth/Admin";
import DateComponent from "../../../../../components/DateComponent"
import { getCookie } from '../../../../../actions/auth';
import { getTest, updateTest } from "../../../../../actions/test/daily/test"
import React from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../../../helpers/quill';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';

const DailyTest = ({name, date, numberOfQues, questions, showQuestion}) => {
  const [values, setValues] = useState({
    name: name,
    date: date,
    numberOfQues: numberOfQues,
    questions: questions,
    showQuestion: showQuestion,
		message: "",
		error: ""
  });
	
	const [count, setCount] = useState(0);
  
  
  const token = getCookie("token");
 
  const handleChangeQuestion = i => e => {
    let questionsCopy = questions
    questionsCopy[i].question = e
    setValues({ ...values, questions: questionsCopy});
		
  };
  
  const handleChangeOptiona = i => e => {
    let questionsCopy = questions
    questionsCopy[i].optiona = e
    setValues({ ...values, questions: questionsCopy});
  };
  
  const handleChangeOptionb = i => e => {
    let questionsCopy = questions
    questionsCopy[i].optionb = e
    setValues({ ...values, questions: questionsCopy});
  };
  
  const handleChangeOptionc = i => e => {
    let questionsCopy = questions
    questionsCopy[i].optionc = e
    setValues({ ...values, questions: questionsCopy});
  };
  
  const handleChangeOptiond = i => e => {
    let questionsCopy = questions
    questionsCopy[i].optiond = e
    setValues({ ...values, questions: questionsCopy});
  };
	
	const handleChangeAnswer = i => e => {
    let questionsCopy = questions
    questionsCopy[i].answer = e.target.value
    setValues({ ...values, questions: questionsCopy});
  };
	
	const handleChangeSolution = i => e => {
    let questionsCopy = questions
    questionsCopy[i].solution = e
    setValues({ ...values, questions: questionsCopy});
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
					 <div>
					 <div className="form-group">
							<label className="lead">Question {i+1}</label>
								<ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].question}
                        onChange={handleChangeQuestion(i)}
                    />
						 <label className="lead mt-4">Option A</label>
								<ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].optiona}
                        onChange={handleChangeOptiona(i)}
                    />
						 <label className="lead mt-4">Option B</label>
								<ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].optionb}
                        onChange={handleChangeOptionb(i)}
                    />
						 <label className="lead mt-4">Option C</label>
						 <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].optionc}
                        onChange={handleChangeOptionc(i)}
                    />
						 <label className="lead mt-4">Option D</label>
						 <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].optiond}
                        onChange={handleChangeOptiond(i)}
                    />
						 <label className="lead mt-4">Solution</label>
						 <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={values.questions[i].solution}
                        onChange={handleChangeSolution(i)}
                    />
						 <label className="lead mt-4">Answer</label>
					  <select className = "form-control" onChange = {handleChangeAnswer(i)} defaultValue = {values.questions[i].answer}>
              <option value = "a">A</option>
              <option value = "b">B</option>
              <option value = "c">C</option>
              <option value = "d">D</option>
            </select>
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
  const updateTest1 = () => {
   
		updateTest(token, questions, name).then((res, err)=>{
			if(err){
				setValues({...values, error: err})
			}
			setValues({...values, message: "Test Update Succesfull"})
		})
  }
	
	const showError = () => (
        <div className="alert alert-danger" style={{ display: values.error ? '' : 'none' }}>
            {values.error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: values.message ? '' : 'none' }}>
            {values.message}
        </div>
    );
  
  return (
  <Layout>
      <Admin>
        <div className="container">
					<div className="pt-3">
                        {showSuccess()}
                        {showError()}
                    </div>
					<Row>
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
					<Button onClick = {updateTest1} className = "mt-4 mb-4 btn-lg" color = "primary">Update</Button> 
				</div>
      </Admin>
  </Layout>
)
}

DailyTest.getInitialProps = ({ query }) => {
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
            return { name: data.slug, date: data.date, numberOfQues: data.questions.length, questions: data.questions, showQuestion };
        }
    });
};

export default DailyTest;