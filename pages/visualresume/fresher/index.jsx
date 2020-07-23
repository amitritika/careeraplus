import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {useEffect, useState} from 'react'
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/stylesheets/examplan/index.css';
import Layout1 from "../../../components/Layout1"
import LayoutImages from "../../../components/visualresume/fresher/layout/LayoutImages"
import Private from "../../../components/auth/Private"
import {isAuth} from "../../../actions/auth"
import { payButtons} from '../../../actions/payUMoney';
import renderHTML from 'react-render-html';
import Link from 'next/link'

const Examplan = () => {
  
  const [fresher,  setFresher] = useState({
		button: "",
		discount: 0,
		price: 250
	});
  
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
    
  }, [])
  return (
    <Layout1>
      <Private>
        <div className = "examplan">
          <h1>Choose Your Template</h1>
          <Container>
            <Row>
							<Col xs="12" sm="12" md = "12" lg = "12" style = {{marginBottom: `0`}}>
								{(fresher.discount == 0) && <h1 className="card-title pricing-card-title">250 INR <small class="text-muted">/ yr</small></h1>}
									{(fresher.discount !== 0) && <p className="card-title pricing-card-title">{fresher.discount}% Discount</p>}
									{(fresher.discount !== 0) && <h2 className="card-title pricing-card-title"><del>250 INR<small class="text-muted">/ yr</small></del></h2>}
									{(fresher.discount !== 0) && <h1 className="card-title pricing-card-title">{fresher.price} INR <small class="text-muted">/ yr</small></h1>}
              </Col>
              <Col xs="12" sm="12" md = "12" lg = "12" style = {{}}	>
								{renderHTML(fresher.button)}
              </Col>
              <Col xs="12" sm="12" md = "4" lg = "4">
								<img src = "../../../images/visualresume/fresher/Template1.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
                <a href = "/visualresume/fresher/template1" className = "btn btn-outline-primary">Template 1</a>
              </Col>
              <Col xs="12" sm="12" md = "4" lg = "4">
								<img src = "../../../images/visualresume/fresher/Template2.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
                <a href = "/visualresume/fresher/template2" className = "btn btn-outline-primary">Template 2</a>
              </Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<img src = "../../../images/visualresume/fresher/Template3.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
                <a href = "/visualresume/fresher/template3" className = "btn btn-outline-primary">Template 3</a>
              </Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<img src = "../../../images/visualresume/fresher/Template4.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
                <a href = "/visualresume/fresher/template4" className = "btn btn-outline-primary">Template 4</a>
              </Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<img src = "../../../images/visualresume/fresher/Template5.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
                <a href = "/visualresume/fresher/template5" className = "btn btn-outline-primary">Template 5</a>
              </Col>
          </Row>
						<LayoutImages />
            {!isAuth() && <h1>Please Signin to Visit Visual Resume Page</h1>}
          </Container>
        </div>
      </Private>
    </Layout1>
  )
}

export default Examplan;