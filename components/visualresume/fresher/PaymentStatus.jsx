import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { updateresume } from '../../../actions/user';
import { updateVisualResume } from '../../../actions/visualresume';
import {version1} from "../../../helpers/visualresume/fresher/version"
import {visualresumedata} from "../../../helpers/visualresume/fresher"
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
					if(props.data.version == 0){
						vdata = props.data.visualresume
						
						vdata = version1(vdata);
					}
					else{
						if(props.data.visualresume.typeOfResume !== "" ){
							vdata = props.data.visualresume.data
							if(!vdata.payment){
								vdata = version1(vdata);
							}
							
							}else{
								vdata = visualresumedata
							}
					}
					vdata.payment = {status: true, date: props.date}
          saveInfo(vdata);
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