import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { updateresume } from '../../../actions/user';
import { updateVisualResumePro } from '../../../actions/visualresume';
import {version1} from "../../../helpers/visualresume/pro/version"
const Payment = (props) => {
    const [values, setValues] = useState({
    error: false,
    visualresume: "",
      message: "",
      success: false
    });
  
  const {error, visualresume, message, success} = values;
    const token = props.token;
    const loadRelated = () => {
					let vdata = {}
				
						if(props.data.visualresumepro.typeOfResume !== "" ){
							vdata = props.data.visualresumepro.data
							if(!vdata.payment){
								vdata = version1(vdata);
							}
							
							}else{
								vdata = props.data.visualresumepro.data
							}
					
					vdata.payment = {status: true, date: props.date}
          saveInfo(vdata);
};

    

    useEffect(() => {
        loadRelated();
    }, []);

const saveInfo = (v) => {
		let visualresumeCopy = {};
      	visualresumeCopy.typeOfResume = "/visualresume/pro/template1";
				visualresumeCopy.data = v;
		 		setValues({ ...values, visualresumepro: visualresumeCopy.data, error: false, success: true });
    updateVisualResumePro(token, visualresumeCopy).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error });
          } else {
						
                  setValues({
                      ...values,
										visualresumepro: visualresumeCopy.data,
										message: "Resume Information Saved Successfully: Payment Comleted",
                    success: true
                  });
          }
      });
  }

		const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    return (
        <React.Fragment>
                {showSuccessMessage()}
                {showErrorMessage()}
        </React.Fragment>
    );
};


export default Payment;