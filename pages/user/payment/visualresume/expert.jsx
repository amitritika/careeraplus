import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from "shortid";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../../components/Layout';
import Private from "../../../../components/auth/Private";
import Payment from "../../../../components/common/Payment";
import Discount from "../../../../components/common/Discount";
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../../../actions/auth';
import { getProfile, updateTransactionsUser } from '../../../../actions/user';

import { API, DOMAIN, APP_NAME, FB_APP_ID, KEY } from '../../../../config';
const Checkout = () => {
    const [values, setValues] = useState({
			error:"",
      toggle: false,
      productinfo: "visualresumeExpert",
      amount: "1000.00",
      email: "",
      firstname: "",
			username:"",
      phone: "",
      hash: "",
			transactions:[]
    });
  
  const {error, toggle, productinfo, amount, email, firstname, username, phone, hash, transactions} = values;
	
	const token = getCookie('token');
   const loadRelated = () => {
			getProfile(token).then(data => {
			if (data.error) {
					setValues({ ...values, error: data.error });
			} else {
				setValues({...values, email:data.email, firstname: data.name, username: data.username, transactions: data.transactions, toggle: true});
				
			}
	});
};

  
  
	
	
	useEffect(()=>{
		loadRelated();
		
	}, [])
    
const handleChange = e => {
	setValues({...values, amount: e});
}

const handleClick = e => {
	setValues({...values, toggle: true});
}
    
    return (
        <React.Fragment>
				<Private>
					<Layout>
						{toggle && <Payment amount = {amount} values = {values}/>}
           </Layout>
				</Private>
        </React.Fragment>
    );
};



export default Checkout;