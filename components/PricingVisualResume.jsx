import {APP_NAME} from "../config"
import"../public/stylesheets/index.css";
import {useEffect, useState} from 'react'
import { payButtons} from '../actions/payUMoney';
import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';

const Pricing = (props) => {
  
  const [fresher,  setFresher] = useState({
		button: "",
		discount: 0,
		price: 250
	});
  const [pro,  setPro] = useState({
		button: "",
		discount: 0,
		price: 500
	})
  const [expert,  setExpert] = useState({
		button: "",
		discount: 0,
		price: 1000
	})
  
  useEffect(()=>{
    let price =0
    payButtons("fresher").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 250 - (250 * (data.discount)/100);
					setFresher({button: data.button, price: price, discount: data.discount})
				}else{
					setFresher({button: data.button, price: 250, discount: data.discount})
				}
				
      }
		})
    
    payButtons("pro").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 500 - (500 * (data.discount)/100);
					setPro({button: data.button, price: price, discount: data.discount})
				}else{
					setPro({button: data.button, price: 500, discount: data.discount})
				}
      }
		})
    
     payButtons("expert").then( data=>{
			if(data.error){
				console.log(data.error)
			}else{
				if(data.discount !== 0){
					price = 1000 - (1000 * (data.discount)/100);
					setExpert({button: data.button, price: price, discount: data.discount})
				}else{
					setExpert({button: data.button, price: 1000, discount: data.discount})
				}
      }
		})
    
    
    
  }, [])
  return(
  
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Visual Resume Pricing</h2>
          <p> Pay yearly once and get Your Visual profile sharable profile which has attractive and clickable Post image. Get unlimited Downloads and Printing enabled for year.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="zoom-im" data-aos-delay="100">
            <div className="box">
              <h3>Fresher</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="Card image cap" />
                
              {(fresher.discount == 0) && <h4><sup>₹</sup>250<span> / yr</span></h4>}
              {(fresher.discount !== 0) && <h3 className="">{fresher.discount}% Discount</h3>}
              {(fresher.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup>₹</sup>250<span> / yr</span></h3>}
              {(fresher.discount !== 0) && <h4><sup>₹</sup>{fresher.price}<span> / yr</span></h4>}
              <ul>
                <li>1 Page Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Basic Layout</li>
                    <li>Layout Change Limited</li>
                    <li>Ideal For Fresher with No Experience</li>
              </ul>
              {isAuth() && <div className="btn-wrap">
                <a href="/visualresume/fresher" className="btn-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/fresher" className = "btn btn-outline-primary menu-button">Fresher Resume Builder</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="box featured">
              <h3>Professional</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
              
              {(pro.discount == 0) && <h4><sup>₹</sup>500<span> / yr</span></h4>}
              {(pro.discount !== 0) && <h3 className="">{pro.discount}% Discount</h3>}
              {(pro.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup>₹</sup>500<span> / yr</span></h3>}
              {(pro.discount !== 0) && <h4><sup>₹</sup>{pro.price}<span> / yr</span></h4>}
              <ul>
                <li>2 Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Professional Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 0-4 Years Professionls</li>
              </ul>
              {isAuth() && <div className="btn-wrap">
                <a href="/visualresume/pro" className="btn-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/pro" className = "btn btn-outline-primary menu-button">Professional Resume Builder</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="box">
              <h3>Expert</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
              
              {(expert.discount == 0) && <h4><sup>₹</sup>1000<span> / yr</span></h4>}
              {(expert.discount !== 0) && <h3 className="">{expert.discount}% Discount</h3>}
              {(expert.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup>₹</sup>1000<span> / yr</span></h3>}
              {(expert.discount !== 0) && <h4><sup>₹</sup>{expert.price}<span> / yr</span></h4>}
              <ul>
                <li>Unlimited Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Expert Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 4+ Years Professionals</li>
              </ul>
              {isAuth() && <div className="btn-wrap">
                <a href="/visualresume/expert" className="btn-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/expert" className = "btn btn-outline-primary menu-button">Expert Resume Builder</a>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;