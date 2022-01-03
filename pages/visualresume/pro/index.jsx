import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {useEffect, useState} from 'react'
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/stylesheets/examplan/index.css';
import Layout1 from "../../../components/Layout1"
import LayoutImages from "../../../components/visualresume/pro/layout/LayoutImages"  
import Private from "../../../components/auth/Private"
import {isAuth} from "../../../actions/auth"
import { payButtons} from '../../../actions/payUMoney';
import renderHTML from 'react-render-html';
import Link from 'next/link'

const Examplan = () => {
  
  const [pro,  setPro] = useState({
		button: "",
		discount: 0,
		price: 500
	})
  
  useEffect(()=>{
    
  }, [])
  return (
    <Layout1>
      <Private>
        <div className = "examplan">
          <h1>Choose Your Resume</h1>
          <Container>
            <Row>
              <Col xs="12" sm="12" md = "12" lg = "12" style = {{marginBottom: `0`}}>
								{(pro.discount == 0) && <h1 className="card-title pricing-card-title">500 INR <small class="text-muted">/ yr</small></h1>}
									{(pro.discount !== 0) && <p className="card-title pricing-card-title">{pro.discount}% Discount</p>}
									{(pro.discount !== 0) && <h2 className="card-title pricing-card-title"><del>500 INR<small class="text-muted">/ yr</small></del></h2>}
									{(pro.discount !== 0) && <h1 className="card-title pricing-card-title">{pro.price} INR <small class="text-muted">/ yr</small></h1>}
              </Col>
              <Col xs="12" sm="12" md = "12" lg = "12" style = {{}}	>
								<a href="/user/payment/visualresume/pro" className="button-buy">Buy Now</a>
              </Col>
              <Col xs="12" sm="12" md = "4" lg = "4">
								<div>
									<img src = "../../../images/visualresume/pro/Template1.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
								</div>
								<div>
									<a href = "/visualresume/pro/template1" className = "button-secondary">Template 1</a>
								</div>
              </Col>
              <Col xs="12" sm="12" md = "4" lg = "4">
								<div>
									<img src = "../../../images/visualresume/pro/Template2.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
								</div>
								<div>
									<a href = "/visualresume/pro/template2" className = "button-secondary">Template 2</a>
								</div>
              </Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<div>
									<img src = "../../../images/visualresume/pro/Template3.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
								</div>
								<div>
									<a href = "/visualresume/pro/template3" className = "button-secondary">Template 3</a>
								</div>
							</Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<div>
									<img src = "../../../images/visualresume/pro/Template4.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
								</div>
								<div>
									<a href = "/visualresume/pro/template4" className = "button-secondary">Template 4</a>
								</div>
							</Col>
							<Col xs="12" sm="12" md = "4" lg = "4">
								<div>
									<img src = "../../../images/visualresume/pro/Template5.JPG" style = {{height: `400px`, marginBottom: `10px`, boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}></img>
								</div>
								<div>
									<a href = "/visualresume/pro/template5" className = "button-secondary">Template 5</a>
								</div>
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