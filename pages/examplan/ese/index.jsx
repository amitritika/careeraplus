import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout1 from "../../../components/Layout1"
import '../../../public/stylesheets/examplan/index.css';
import {isAuth} from "../../../actions/auth"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
const EseExamplan = () => {
  
  const desc = "We provide Exam Plan for any Exam with Data Analytics and Previous Year Papers Analysis. This Exam Plan Tool generates time table for GATE, ESE, PSC, UPSC, JEE, NEET"
  
  const head = () => (
        <Head>
            <title>
             Exam plan ESE| {APP_NAME}
            </title>
             <script data-ad-client="ca-pub-1792623713572003" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/examplan/ese`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/examplan/ese`} />
            <meta property="og:site_name" content={`${APP_NAME} | Exam Plan | ESE`} />

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
              <a href = "/examplan/ese/mechanical" className = "btn btn-outline-primary menu-button">Mechanical</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
             <a href = "/examplan/ese/civil" className = "btn btn-outline-primary menu-button">Civil</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese/electronics" className = "btn btn-outline-primary menu-button">Electronics & Communication</a>
            </Col>
            <Col xs="12" sm="12" md = "6" lg = "4">
              <a href = "/examplan/ese/electrical" className = "btn btn-outline-primary menu-button">Electrical</a>
            </Col>
        </Row>
          
          <div style = {{textAlign:`left`}}>
            <h1>What is ESE Exam Plan</h1>
            <p>Let&rsquo;s come straight to the point. This video will have 3 sections. First Previous year paper analysis. Second Plan for ESE 2020. Third section is about our Customized plan tool.<br />
            So let&rsquo;s begin,<br />
            Let&rsquo;s start with no. 1 Point Previous Year Paper Analysis.<br />
            From Analysing last 25 Years total questions asked so far from these Subjects are as follows. But with earlier pattern these subjects used to get distributed in 2 separate papers. But from last 3 years pattern has changed and these two papers syllabus is combined to one with additional subjects like,<br />
            Mechatronics and Renewable Enenrgy in Mechanical<br />
            Tunelling in Airport Dock, Harbour Railway Section, in Civil<br />
            Engineering Mathematics, Computer Fundamentals, Systems &amp; Processing In ECE<br />
            Basic Electrical Engineering, Electromagnetics &amp; Advance Electronics Topics in Electrical<br />
            So if we see the average questions asked from last 3 years in these subjects, then list will look like this.<br />
            But in our analysis we will give more weightage that 70% to last three years paper, as it corresponds to New syllabus, but we will still give smaller amount which is 30% weightage to previous year papers before 2017.<br />
            Using this weightage our new Average questions from each subject will be this.<br />
            Similarly if go deep on the analysis and see how much questions asked form each topic from individual subjects, then that list will look this. Here we are showing example of one subject. Now again we can also further divide average questions asked from 3 last years. Take the last three years weightage as 70% and Total questions asked Average as 30% this will give new probable weighted average for each subject and their topics. And now converting this into marks, that is, out 300 marks this column shows how much marks you can score if you prepare well this topic. If we arrange it from highest marks to lowest marks, we can get the typical sequence of topics which are most important to least important.<br />
            Now there are total 104 topics, and if you just add top 42 topics you can score around 200 Marks in Mechanical<br />
            Now there are total 110 topics, and if you just add top 42 topics you can score around 200 Marks in Civil<br />
            Now there are total 113 topics, and if you just add top 39 topics you can score around 200 Marks In ECE<br />
            Now there are total 86 topics, and if you just add top 33 topics you can score around 200 Marks in Electrical<br />
            So you know when ever these topics comes in your preparation plan, you have to give extra efforts. Anyway our Plan will give extra weightage in terms of days to these topics. How to get this list, we will discuss in last section.<br />
            Now the next section is plan of Main Preparation. Now in our previous video, we have already cover preparation plan of GS and Engineering aptitude. You can get the video link in description. So in that video we have mentioned our preparation plan GS will start from 1 Feb and end on 15 march, so our core subject preparation will start from 16th March, till 31st December. Assuming our exam will be on 5th January 2020 which is first Sunday of the month.<br />
            Let&rsquo;s see the plan for each month one by one for 5 secs. <br />
            Here is plan for March. We have included 2 revisions, one after each subject and another after next subject. <br />
            Here is plan for April. Purpose of these revisions is to make sure we retain whatever we are learning in our plan.<br />
            Here is plan for May, we have also included backup days in each month, just to make sure if we miss our targets we can finish it in Backup days. If you want you can pause, or I will tell you how to get you plan in next section.<br />
            Here is plan for June, July, August, September, October, and November.<br />
            As you can see in November we will be starting our revision.<br />
            Here is the plan for December. We have sequence in revision based on the weightage of the subject. Whichever subject is having highest weightage will be covered first.<br />
            Next section of our video is Customized Plan Tool. <br />
            Most of the time what I have observed is you will see the video when you have already missed the starting date of plan. So to help you guys, I have created this tool, here you can give your own start date and end date and it will give you your own customized plan accordingly. <br />
            In last video we have seen in brief how you can use this tool to get your plan. In this video we will see in detail what other features it have. <br />
            First to access this tool you can go to our site www.careeraplus.in/Examplan<br />
            Here to get into ESE section just click on ESE button. <br />
            Once you select that there will be extra input section which will come, and why that section is there we will discuss in a while<br />
            And then you can choose Mechancial.<br />
            And then you can choose Civil.<br />
            And then you can choose Electrical<br />
            And then you can choose ECE</p>

            <p>Now in the first section you have three options, which are pretty obvious<br />
            First is you can choose to have combine plan for GS and Core subject. Second Option you can choose is Only GS, like if you just want to study for GS you can do that. Like in last video we have used this option to generate Plan for GS. And finally you can choose Only Core option, which gives plan for Core subject. Which we have used in this video.<br />
            Let me give one example how you can use these options. <br />
            Now let&rsquo;s assume you want to prepare for GS and Core parallel. Just get the plan of GS by selecting Only GS option and then get the plan of Core by selecting only core Option and then you can divide your day accordingly and follow both plan for your daily target.<br />
            You can write in comment, how want to prepare and we can suggest you which option to choose, and let&rsquo;s suppose that preparation plan is difficult to generate from given options then we try to enhance our tool in next version.<br />
            As I said, for this video we have used only core option.<br />
            Let&rsquo;s see the next panel.<br />
            Here first option is Start Date, so you can use this drop down menu to select the start date of your plan, and similarly end date of your plan.<br />
            Here for we have used 16 march 2019 as our start date, and 31 dec 2019 as end date. <br />
            Next option is do you want this plan for revision or Not. We will see this option later for now you don&rsquo;t have to click this option.<br />
            Ok so next option is for vacation. If you have any planned vacation for example, Diwali is on 27 October, and you are planning to take off from studies in this period, then you can choose option Yes, then you can choose start date and end date of your vacation. By default this option is No, once you click on Yes then only you can edit dates. Otherwise this option will be disabled.<br />
            That&rsquo;s it you have to click submit for Calendar Button, and you will get the plan.<br />
            Now to get the new calendar you have to refresh the page.<br />
            Now let&rsquo;s discuss what that revision option is all about.<br />
            Let&rsquo;s assume you came to know about this tool really late, and now you have very less time left or you have already done some preparation and you want to utilize this tool for revision. Then you can choose this option. And click for calendar, you will get the plan with sequence of subject of highest to least weightage. You can also choose this option when you are in revision section of our plan to get the topics to be covered as targets in this period. As we have not mentioned any Topics details in Final Revision slots.<br />
            So for Example, here in our plan our revision will start from 13 Nov 2019 and it will end with our plan that is 31 December. So I can choose first only Core option in first panel, and then start date of plan as 13 Nov and end date as 31 December. And choose revision option. That&rsquo;s it click on submit for calendar you will get the plan for revision.<br />
            Now the last point in this section Subject Weightage Button. So earlier in our video we have discussed the list of topics from highest Average marks to lowest average marks, you can just get that list by clicking Subject Weightage button.<br />
            Everything what I supposed to give you earlier you can access it any time through my site. I will update the data and weightage every year once the exam is done.<br />
            </p>
          </div>
        </Container>
        
      </div>
    </Layout1>
    </React.Fragment>
  )
}

export default EseExamplan;