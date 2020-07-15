import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../../../components/Layout';
import Private from "../../../../../components/auth/Private";
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../../../../actions/auth';
import { getProfile, updateresume } from '../../../../../actions/user';
import { updateVisualResume } from '../../../../../actions/visualresume';
import {version1} from "../../../../../helpers/visualresume/fresher/version"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
const Payment = () => {
    const [values, setValues] = useState({
    error: false,
    visualresume: "",
      message: "",
      success: false
    });
  
  const {error, visualresume, message, success} = values;
    const token = getCookie('token');
    const loadRelated = () => {
        getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
					let vdata = {}
					if(data.version == 0){
						vdata = data.visualresume
						
						vdata = version1(vdata);
					}
					else{
						if(data.visualresume.typeOfResume !== "" ){
							vdata = data.visualresume.data
							if(!vdata.payment){
								vdata = version1(vdata);
							}
							
							}else{
								vdata = visualresumedata
							}
					}
					vdata.payment = {status: true, date: new Date()}
          saveInfo(vdata);
        }
    });
};

    

    useEffect(() => {
        loadRelated();
    }, []);

const saveInfo = (v) => {
		let visualresumeCopy = {};
      	visualresumeCopy.typeOfResume = "/visualresume/fresher/template1";
				visualresumeCopy.data = v;
		 		setValues({ ...values, visualresume: visualresumeCopy.data, error: false, success: true });
    updateVisualResume(token, visualresumeCopy).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error });
          } else {
						
                  setValues({
                      ...values,
										visualresume: visualresumeCopy.data,
										message: "Resume Information Saved Successfully: Payment Comleted",
                    success: true
                  });
          }
      });
  }

    const head = () => (
        <Head>
            <title>
                Fresher Payment | {APP_NAME}
            </title>
            <meta name="description" content="Payment Status" />
        </Head>
    );
    const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    
    return (
        <React.Fragment>
            {head()}
            <Layout>
              <Private>
                {showSuccessMessage()}
                {showErrorMessage()}
              </Private>
            </Layout>
        </React.Fragment>
    );
};


export default Payment;