import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../../public/stylesheets/visualresume/main.css"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout1 from '../../../components/Layout1';
import { getPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import {comp} from "../../../helpers/user/profile"
import dynamic from 'next/dynamic'

const PricingVisualResume = dynamic(() => import('../../../components/PricingVisualResume'))
const UserProfile = ({visualresumedata, photo, name, email, query}) => {
  
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
      const BlockComponent = comp["fresher"]["template1"];
      console.log(path)
      setValues({...values, Resume: BlockComponent, bg: visualresumedata.data.colors.bg, font: visualresumedata.data.colors.font, showResume: false});
    }
  }
  useEffect(()=>{
    init();
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
        </Head>
    );
  
  
  
  return (
    <React.Fragment>
      {head()}
      <Layout1>
       {showResume && <Resume fac={5} bg={bg} font = {font}/>}
        <div className = "container">
          <div style = {{boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`, marginTop: `20px`}}>
            <img src = {`${API}/user/resume-photo/${query.id}`} style = {{width: `1050px`}}></img>
          </div>
           <div style = {{margin: `20px`}}>
            <a href = "/visualresume" className = "btn btn-outline-primary" style = {{fontSize: `2rem`}}>Get Your Visual Resume -></a>
          </div>
        </div>
        
       
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
            if(data.visualresumeexp.typeOfResume !== "" || data.visualresumepro.typeOfResume !== "" || data.visualresume.typeOfResume !== ""){
              if(data.visualresumeexp.data.payment || data.visualresumepro.data.payment || data.visualresume.data.payment){
                if(data.visualresumeexp.data.payment.status){
                  visualresumedata = data.visualresumeexp
                }else if(data.visualresumepro.data.payment.status){
                  visualresumedata = data.visualresumepro
                }else if(data.visualresume.data.payment.status){
                  visualresumedata = data.visualresume
                }else{
                  visualresumedata = null
                  
                }
              }else{
                visualresumedata = null
              }
              
            }else{
              visualresumedata = null
            }
          
          
            return { visualresumedata: visualresumedata, photo: data.photo, name: data.name, email: data.email, query };
        }
    });
};



export default UserProfile;