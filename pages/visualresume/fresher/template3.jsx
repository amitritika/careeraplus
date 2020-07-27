import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import Template from "../../../components/visualresume/fresher/Template"
import Resume from "../../../components/visualresume/fresher/template3/Resume"
import {componentSequence, colors} from "../../../helpers/visualresume/fresher/template3/template3"

const Template1 = () => {
 
  const head = () => {
    return(
      <Head>
        <title>
          Visual Resume Builder
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
        	<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" />
      </Head>
    )
  }
  
  
	
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
           <Template componentSequence = {componentSequence} colors = {colors} Resume = {Resume} type="fresher" template = "template3"/>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template1;