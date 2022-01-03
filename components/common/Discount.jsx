import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from "shortid";
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getDiscount } from '../../actions/discount';


import { API, DOMAIN, APP_NAME, FB_APP_ID, KEY } from '../../config';
const Discount = (props) => {
    const [values, setValues] = useState({
			error:"",
			message: "",
      discount: "",
			slug:"",
			toggle: false,
			amount: props.amount
    });
  
  const { error, message, discount, slug, toggle, amount } = values;

	useEffect(()=>{
		
	}, [])
	
	const handleSubmit = () => {
		
		
	}
    
	const handleClick = e => {
		getDiscount(values.slug).then( data1=>{
			if(data1.error){
				setValues({...values, error: data1.error, message: "Coupon Code not available"});
			}else{
				
				let per = data1[0].amount;
				let count = data1[0].count;
				let expired = data1[0].expired;
				let amt = parseInt(amount);
				let string = "";
				if(per > 100) {
					per = 100;
				}
				if(!expired && count > 0){
					amt = (amt - (per * amt / 100));
					amt = Math.round(amt);
					props.onChange(amt.toString())
				}
				
				setValues({...values, discount: data1[0], amount: amt.toString()});
			}
		})
}
	
	const handleChangeSlug = e => {
	setValues({...values, slug: e.target.value});
}
	
	const showSuccess = () => (
        <div className="alert alert-success" style={{ display: message ? "" : 'none' }}>
            {message}
        </div>
    );
    
    return (
        <React.Fragment>
					<div>
						Enter Your Discount Coupon
					</div>
					<input name="text" value={slug} onChange = {handleChangeSlug} />
					<button onClick = {handleClick}>Apply Coupon Code</button>
        </React.Fragment>
    );
};



export default Discount;