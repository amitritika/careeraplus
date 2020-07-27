import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import Template from "../../../components/visualresume/pro/Template"
import Resume from "../../../components/visualresume/pro/template3/Resume"
import {componentSequence, colors} from "../../../helpers/visualresume/pro/template3/template3"

const Template1 = () => {


  const head = () => {
    return(
      <Head>
        <title>
          Visual Resume Builder
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet" />
          <link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" />
        
      </Head>
    )
  }
	
  
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
          <Private>
						<Template componentSequence = {componentSequence} colors = {colors} Resume = {Resume} type="pro" template = "template1"/>
          </Private>
      </Layout>
      
    </React.Fragment>
  
)
}

export default Template1;