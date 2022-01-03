import {APP_NAME} from "../../config"
import"../../public/stylesheets/index.css";
import {useEffect, useState} from 'react'
import { payButtons} from '../../actions/payUMoney';
import { signout, isAuth } from '../../actions/auth';
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
    
    
  }, [])
  return(
  
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="section-title-1">
          <h2>Visual Resume Pricing</h2>
          <p> Pay yearly once and get Your Visual profile sharable profile which has attractive and clickable Post image. Get unlimited Downloads and Printing enabled for year.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-box">
              <h3>Fresher</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="Card image cap" />
                
              {(fresher.discount == 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>250<span> / yr</span></h4>}
              {(fresher.discount !== 0) && <h3 className="">{fresher.discount}% Discount</h3>}
              {(fresher.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup><i class="fas fa-rupee-sign"></i></sup>250<span> / yr</span></h3>}
              {(fresher.discount !== 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>{fresher.price}<span> / yr</span></h4>}
              <ul>
                <li>1 Page Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Basic Layout</li>
                    <li>Layout Change Limited</li>
                    <li>Ideal For Fresher with No Experience</li>
              </ul>
              {isAuth() && <div>
                <a href="/user/payment/visualresume/fresher" className="button-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/fresher" className = "button-menu">Fresher Resume Builder</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-box u-featured">
              <h3>Professional</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
              
              {(pro.discount == 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>500<span> / yr</span></h4>}
              {(pro.discount !== 0) && <h3 className="">{pro.discount}% Discount</h3>}
              {(pro.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup><i class="fas fa-rupee-sign"></i></sup>500<span> / yr</span></h3>}
              {(pro.discount !== 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>{pro.price}<span> / yr</span></h4>}
              <ul>
                <li>2 Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Professional Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 0-4 Years Professionls</li>
              </ul>
              {isAuth() && <div className="">
                <a href="/user/payment/visualresume/pro" className="button-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/pro" className = "button-menu-f">Professional Resume Builder</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-box">
              <h3>Expert</h3>
              <img top width="100%" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
              
              {(expert.discount == 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>1000<span> / yr</span></h4>}
              {(expert.discount !== 0) && <h3 className="">{expert.discount}% Discount</h3>}
              {(expert.discount !== 0) && <h3 style = {{color: "#ccc", textDecoration: "line-through"}}><sup><i class="fas fa-rupee-sign"></i></sup>1000<span> / yr</span></h3>}
              {(expert.discount !== 0) && <h4><sup><i class="fas fa-rupee-sign"></i></sup>{expert.price}<span> / yr</span></h4>}
              <ul>
                <li>Unlimited Pages Resume</li>
                    <li>Unlimited Printing</li>
                    <li>URL for Resume Sharing</li>
                    <li>Expert Layout</li>
                    <li>Layout Change Extensive</li>
                    <li>Ideal For 4+ Years Professionals</li>
              </ul>
              {isAuth() && <div className="btn-wrap">
                <a href="/user/payment/visualresume/expert" className="button-buy">Buy Now</a>
              </div>}
              {!isAuth() && <p>Sign In To Purchase</p>}
            </div>
            <div style = {{width: `100%`, textAlign: `center`, marginTop: `10px`}}>
              <a href = "/visualresume/expert" className = "button-menu">Expert Resume Builder</a>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;