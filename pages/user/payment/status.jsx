import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from "shortid";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Private from "../../../components/auth/Private";
import Payment from "../../../components/common/Payment";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, updateTransactionsUser } from '../../../actions/user';

import { API, DOMAIN, APP_NAME, FB_APP_ID, KEY } from '../../../config';
const Checkout = () => {
    const [values, setValues] = useState({
			error:"",
      toggle: false,
      productinfo: "Visualresume",
      amount: "10.00",
      email: "",
      firstname: "",
			username:"",
      phone: "",
      hash: "",
			transactions:[],
			user: "",
			VisualResumeFresher: dynamic(() => import('../../../components/visualresume/fresher/PaymentStatus')),
			VisualResumePro: dynamic(() => import('../../../components/visualresume/pro/PaymentStatus')),
			VisualResumeExpert: dynamic(() => import('../../../components/visualresume/expert/PaymentStatus'))
    });
	const [date, setDate] = useState(new Date());
	const [toggleObj, setToggle] = useState({
		visualresumeFresher: false,
		visualresumePro: false,
		visualresumeExpert: false
	})
  
  const {error, toggle, productinfo, amount, email, firstname, username, phone, hash, transactions, user, VisualResumeFresher, VisualResumePro, VisualResumeExpert } = values;
	const { visualresumeFresher, visualresumePro, visualresumeExpert } = toggleObj;
	const token = getCookie('token');
   const loadRelated = () => {
			getProfile(token).then(data => {
			if (data.error) {
					setValues({ ...values, error: data.error });
			} else {
				setValues({...values, email:data.email, firstname: data.name, username: data.username, transactions: data.transactions, toggle: true, user: data });
				let trans = Object.values(data.transactions[0])[0];
				console.log(trans);
				if(trans.status == "success") {
					
					if(trans.productinfo == "visualresumeFresher"){
						setDate(trans.addedon);
						setToggle({...toggleObj, visualresumeFresher: true })
					}
					if(trans.productinfo == "visualresumePro"){
						setDate(trans.addedon);
						setToggle({...toggleObj, visualresumePro: true })
					}
					if(trans.productinfo == "visualresumeExpert"){
						setDate(trans.addedon);
						setToggle({...toggleObj, visualresumeExpert: true })
					}
					
				}
			}
	});
};

  
  
	
	
	useEffect(()=>{
		loadRelated();
		
	}, [])
    
const handleChange = e => {
	setValues({...values, phone: e.target.value});
}

const handleClick = e => {
	setValues({...values, toggle: true});
}



    
    return (
        <React.Fragment>
				<Private>
					<Layout>
              
						{toggle && <div>
							Your last Transaction for {Object.values(transactions[0])[0].productinfo} for Amount of {Object.values(transactions[0])[0].transaction_amount} was {Object.values(transactions[0])[0].status} with Transaction ID - {Object.values(transactions[0])[0].txnid}
						
						</div>}
						{visualresumeFresher && <VisualResumeFresher data = {user} date = {date} token = {token}/>}
						{visualresumePro && <VisualResumePro data = {user} date = {date} token = {token}/>}
						{visualresumeExpert && <VisualResumeExpert data = {user} date = {date} token = {token}/>}
            </Layout>
				</Private>
        </React.Fragment>
    );
};



export default Checkout;