import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../public/stylesheets/visualresume/visualresumeprofile.css"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout1 from '../../../components/Layout1';
import { getPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import {comp} from "../../../helpers/user/profile"
import dynamic from 'next/dynamic'
import AOS from "aos";
import "aos/dist/aos.css";

const PricingVisualResume = dynamic(() => import('../../../components/PricingVisualResume'))
const UserProfile = ({visualresumedata, photo, name, email, query, type}) => {
  
  const [values, setValues] = useState({
    profile: null,
    path: "PricingVisualResume",
    loading: true,
    error: false,
    bg: "rgb(1, 51, 66)",
    font: "rgb(75, 172, 198)",
    showResume: false,
    Resume: null
  })
  
  const {profile, path, loading, error, bg, font, showResume, Resume} = values;
  const init = ()=>{
    if(visualresumedata !== null){
      if(type == "fresher"){
        const BlockComponent = comp["fresher"]["template1"];
        setValues({...values, Resume: BlockComponent, bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)", showResume: true});
      }
      else if(type == "pro"){
        const BlockComponent = comp["pro"]["template1"];
        setValues({...values, Resume: BlockComponent, bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)", showResume: true});
      }else if(type == "exp"){
        const BlockComponent = comp["expert"]["template1"];
        setValues({...values, Resume: BlockComponent, bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)", showResume: true});
      }else {
        setValues({...values, bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)", showResume: false});
      }
      
    }
  }
  useEffect(()=>{
    init();
     
    AOS.init();
    AOS.refresh();
  }, [])
  const head = () => (
        <Head>
            <title>
                {name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best Visual resume Tool, Easy to use`} />
            <link rel="canonical" href={`${DOMAIN}/user/profile/${query.id}`} />
            <meta property="og:title" content={`Visual Resume Tool | ${APP_NAME}`} />
            <meta property="og:description" content={`Best Visual resume Tool, Easy to use`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/user/profile/${query.id}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/user/profile-photo/${query.id}`} />
            <meta property="og:image:secure_url" content={`${API}/user/profile-photo/${query.id}`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
        </Head>
    );
  
  
  
  return (
    <React.Fragment>
      {head()}
      <Layout1>
       {showResume && <Resume fac={5} bg={bg} font = {font} type = {type} visualresumedata = {visualresumedata} photo = {photo} name = {name} email = {email} username = {query}/>}
        {!showResume && <div style = {{width: `100%`, height: `10rem`, backgroundColor: `#e56d82`, fontSize: `4rem`, color:`white`, lineHeight: `10rem`, textAlign: `center`}}>
          There is No Resume Set For User
        </div>}
        {!showResume && <PricingVisualResume />}
      </Layout1>
      
    </React.Fragment>
  )
}

UserProfile.getInitialProps = ({ query }) => {
  
    return getPublicProfile(query.id).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            let visualresumedata = {};
          let arr = []
          let type = "";
          if(data.version >= 1){
            if(data.visualresumeexp.typeOfResume !== "" || data.visualresumepro.typeOfResume !== "" || data.visualresume.typeOfResume !== ""){
              
                if(data.visualresumeexp.typeOfResume !== ""){
                  visualresumedata = data.visualresumeexp;
                  type  = "exp";
                }else if(data.visualresumepro.typeOfResume !== ""){
                  visualresumedata = data.visualresumepro;
                  type = "pro";
                }else if(data.visualresume.typeOfResume !== ""){
                  visualresumedata = data.visualresume;
                  type = "fresher";
                }else{
                  visualresumedata = null
                  type = null
                  
                }
              
            }else{
              visualresumedata = null
              type = null
            }
          }else {
            visualresumedata = null
            type = null
          }
            
          
          
            return { visualresumedata: visualresumedata, photo: data.photo, name: data.name, email: data.email, query, type };
        }
    });
};



export default UserProfile;