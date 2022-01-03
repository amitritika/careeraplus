import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from "shortid";
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getHash} from '../../actions/payUMoney';
import { getDiscount } from '../../actions/discount';

import { API, DOMAIN, APP_NAME, FB_APP_ID, KEY, PAYMENT_URL } from '../../config';
const Payment = (props) => {
    const [values, setValues] = useState({
			error:"",
			message:"",
      key: KEY,
      txnid: shortid.generate(),
      productinfo: props.values.productinfo,
      amount: props.amount,
      email: props.values.email,
      firstname: props.values.firstname,
      surl: `${API}/user/payment/${props.values.username}`,
      furl: `${API}/user/payment/${props.values.username}`,
      phone: "",
      hash: "",
			udf1: "",
			slug:"",
			toggle: false
    });
  
  const {error, message, key, txnid, productinfo, amount, email, firstname, surl, furl, phone, hash, udf1, slug, toggle} = values;

	useEffect(()=>{
		getHash(values).then( data1=>{
			if(data1.error){
				setValues({...values, error: data1.error});
			}else{
				setValues({...values, hash: data1.hash});

			}
		})
	}, [])
	
	const handleSubmit = () => {
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
					let v = values;
					v.amount = amt.toString();
					v.udf1 = slug;
					getHash(v).then( data=>{
						if(data.error){
							setValues({...values, error: data.error});
						}else{
							setValues({...values, hash: data.hash, amount: amt.toString(), udf1: slug, message: "Coupon Applied"});

						}
					})
				}else {
					setValues({...values, message: "Coupon Code Expired"});
				}
				
			}
		})
		
	}
    
	const handleClick = e => {
		let x = document.getElementById('payment_form');
		x.submit();
}
	
	const handleChange = e => {
	setValues({...values, phone: e.target.value});
}
	
	const handleChangeSlug = e => {
	setValues({...values, slug: e.target.value});
}
    
	const showSuccess = () => (
        <div className="alert alert-success mt-2" style={{ display: message ? "" : 'none' }}>
            {message}
        </div>
    );
    return (
       <React.Fragment>
				<div className = "container">
					<div style = {{fontSize: "3rem", textAlign: "center", margin: "2rem", fontWeight: "bold"}}>
						Base Price for Product - {productinfo} is {amount}
					</div>
					<div className = "row">
						<div className = "col-md-6">
							<div style = {{fontSize: "2rem", margin: "2rem", fontWeight: "bold"}}>
								Enter Phone Number
								<input name="phone" value={phone} onChange = {handleChange} className = "form-control w-50 mt-2 mb-2" style = {{fontSize: "2rem"}}/>
								<button onClick = {handleClick} className="btn btn-primary btn-lg">Pay Now</button>
								<form action={PAYMENT_URL} method='post' id = "payment_form" style = {{visibility: "hidden"}}>
                  <input type="hidden" name="key" value= {KEY} />
                  <input type="hidden" name="txnid" value= {txnid} />
                  <input type="hidden" name="productinfo" value={productinfo} />
                  <input type="hidden" name="amount" value={amount} />
                  <input type="hidden" name="email" value={email} />
                  <input type="hidden" name="firstname" value={firstname} />
                  <input type="hidden" name="surl" value={`${surl}/${txnid}`} />
                  <input type="hidden" name="furl" value={`${furl}/${txnid}`} />
                  <input type="hidden" name="phone" value={phone} />
                  <input type="hidden" name="hash" value={hash} />
									<input type="hidden" name="udf1" value={udf1} />
                  <input type="submit" value="submit" />
              	</form>
							</div>
						</div>
						<div className = "col-md-6">
							<div style = {{fontSize: "2rem", margin: "2rem", fontWeight: "bold"}}>
								Enter Your Discount Coupon
								<input name="text" value={slug} onChange = {handleChangeSlug} className = "form-control w-50 mt-2 mb-2" style = {{fontSize: "2rem"}}/>
								<button onClick = {handleSubmit} className="btn btn-primary btn-lg">Apply Coupon Code</button>
								{showSuccess()}
							</div>
							
						</div>
					</div>
				</div>
        </React.Fragment>
    );
};



export default Payment;