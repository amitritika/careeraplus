import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout1 from "../../../components/Layout1"
import '../../../public/stylesheets/examplan/index.css';
import {isAuth} from "../../../actions/auth"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';


const GateExamplan = () => {
  
  const desc = "We provide Exam Plan for any Exam with Data Analytics and Previous Year Papers Analysis. This Exam Plan Tool generates time table for GATE, ESE, PSC, UPSC, JEE, NEET"
  
  const head = () => (
        <Head>
            <title>
             Exam plan | {APP_NAME}
            </title>
             <script data-ad-client="ca-pub-1792623713572003" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/examplan/gate`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/examplan/gate`} />
            <meta property="og:site_name" content={`${APP_NAME} | Exam Plan | GATE`} />

            <meta property="og:image" content={`${API}/image/examplan`} />
            <meta property="og:image:secure_url" content={`${API}/image/examplan`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  return (
    <React.Fragment>
      {head()}
       <Layout1>
      <div className = "examplan">
        <h1>Choose Your Branch</h1>
        <Container>
          <Row>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/mechanical" className = "btn btn-outline-primary menu-button">Mechanical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/civil" className = "btn btn-outline-primary menu-button">Civil</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/electronics" className = "btn btn-outline-primary menu-button">Electronics & Communication</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/computerscience" className = "btn btn-outline-primary menu-button">Computer Science</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
             <a href = "/examplan/gate/electrical" className = "btn btn-outline-primary menu-button">Electrical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/chemical" className = "btn btn-outline-primary menu-button">Chemical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/gate/instrumentation" className = "btn btn-outline-primary menu-button">Instrumentation</a>
            </Col>
        </Row>
          <div style = {{textAlign: `left`}}>
          <h1>What is GATE Exam plan</h1>
          <p>In 1870, John Roebling wanted to build Brooklyn Bridge in New York. With his crazy plan Every Bridge Expert said. “It is impossible to build Bridge Like that.” 
            But being confident with his plan he explained each and every detail of bridge construction to his son an upcoming young Engineer Washington.</p>

          <p>Finally, both Father and son started the project, everything was going according to the plan, but unfortunately, in a site accident, 
            John Roebling lost his life and Washington got a serious brain Injury. All he could do was moving his finger. 
            Since he was the only person who knew how to build the bridge, every engineer lost hope of completing this project. 
            But burning desire of Washington made him think and eventually lying in the bed, he came up with solution. He communicated all the instructions by tapping the finger on her wife’s arm, 
            like some kind of Morse code and she gave instructions to Engineers. For thirteen years this process went on till 1883, when the bridge was completed.</p>

          <p>
            What’s this story doing here? It is just the medium of highlighting 5 key Points.
          </p> 
          <p>Let’s start with No.1 Clarity of Goal. As Washington and Roebling knew exactly what they want to build, you should also be very clear in your goal of cracking GATE. But cracking GATE as a goal is not enough, you have to think little broader, 
            for example if you want PSU, you should at least get AIR lesser than 300. 
            For getting this AIR from past data you should get 70 MARKS in GATE. Now this is a clear goal to aim for.</p>
          
          <p>Next point is Plan to overcome each hurdle. Jhon Roebling was not only thorough with his plan of bridge construction but he also had plans for each and every possible hurdle that can come in the process. That’s why with just taping finger Washington was able to clear cut communicate his plan to others. 
            Therefore, plan of achieving your goal should be really thorough. Since this is the most important point, we will see it in details.</p>
          
          <p>
            Once you have your clear goal, let’s say if it is 70 Marks, you should know how to achieve it. 
            Now getting 70 Marks you have to prepare for solid 85-90 marks as factor of safety. This is what I call BATMAN plan, prepare for every contingency.
          </p>
          <p>For covering 85 Marks in this wide syllabus you have to act smart in studies. First apply 80-20 or Pareto principle. By pareto principle, 80% of questions will come from 20% of syllabus. But being conservative side, we will consider questions for 70 marks will come from 30% of the syllabus. But we need 90 marks. So, we again apply this principle in rest 30 Marks and 70% left syllabus. 70% of 30 Marks will come from 30% of 70% syllabus. <br />
Mathematically 70% of 30 marks is 21 marks and 30% of 70% is 21%. Now 70+21 = 91 Marks will be covered from 30% + 21% = 51% Syllabus. <br />
Now which are those topics in 51% syllabus, we will see in details in upcoming videos for each branch. The schedule of each branch will be latter part of the video so keep watching till the end.<br />
Now divide your time table such that his 51% syllabus will have major portion and complete focus. Target the date, when your topics and subjects should get end. Make targets for each day also, like how much to study and how much portion should get completed by now. For your ease I will cover these plans in details in the same upcoming videos. Right now, you can see the example of previous year 6-month plan for Mechanical.<br />
Most important thing I want to cover here is don&rsquo;t start immediately with full force. Start small and increase your capacity slowly with small changes. This will help you to build your momentum slowly and you will keep up this momentum. This concept of incremental change is called KAIZEN. Like in this example, I said start with 2 hrs study daily and slowly increase to 1 hr in every 5 days. This way you will reach from 2 hrs to 8 hrs study period in 1 month, without feeling heavy from the start itself as two hrs is easy for everyone.<br />
Next important point is buffers. Always keep 2-3 days buffers in your month schedule, to cover syllabus in case of any unplanned events like, sickness, visitors, Family function etc. Similarly, your study plan should include planned events well before, like you know you are going to get busy in Diwali or Christmas holidays or may be any relatives marriage. Those days should be well before included in your calendar. Prepare yourself for the best and be ready for the worst. That&rsquo;s the principle<br />
Last thing in this point is revision. Make a good revision frequency. By research you will forget 80% of the content after 2 days. To retain the content, you have to revise at least 2-3 times. In our plan we have kept last 2 Months for revision completely. But in between after completing each subject you have to schedule 2-3 days for its revision. And next 4-5 days for the subject you completed before recent one. In this way, before starting last revision you would have already completed revision 2 times for each subject. Now, in last two months revision sequence of subject should be based on difficulty and weightage. You can use this formula for getting that sequence, I will explain it in detail in upcoming plan videos.<br />
In any competitive exam everyone can tell you what to study but very few people can tell you what to leave and how to do smart study. You can find these formulas and framework only in our channel. Now you can realise, why I am calling this plan as BATMAN or detailed plan. Because, it has every contingency planned.<br />
Next Basic Points in our story is Burning Desire. Washington even not being able to talk came up with solutions of communication for his dream project. This can only be done when you are determined and has burning desire to achieve something. Same way you should have burning desire for your goal of cracking GATE. Promise yourself today, Whatever the conditions or hurdles comes in your way, you will fight through it, and I am sure, success will come to you. <br />
Next point is self Confidence. Both John Roebling and Washington had self confidence in their plan. You should never doubt your confidence. There are no. of ways and plenty of resources to achieve what you want. But once you figured out one particular path in current situation stick towards it and never deviate. Don&rsquo;t let anyone underestimate you. If your friends or relatives are negative about your preparation, remain far away from them. Never doubt, believe in yourself.<br />
Last point is Persistence. Not alone Washington but his wife helped him for 13 years in giving instructions for the Brooklyn Bridge. It takes time and continuous effort for achieving your goal. You have to be persistent and stubborn about what you want in your life. Each day wakeup with target and don&rsquo;t sleep till you finished your target. As it is said in NIKE add Rise and Shine. But I say, Rise, Grind and then Shine.<br />
</p>
          </div>
        </Container>
      </div>
    </Layout1>
    </React.Fragment>
   
  )
}

export default GateExamplan;