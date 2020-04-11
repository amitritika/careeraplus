import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from "../../components/Layout"
import Private from "../../components/auth/Private";
import { isAuth } from '../../actions/payUMoney';
import { API, KEY, SALT } from '../../config';
import UpdateProfileNavComponent from "../../components/user/UpdateProfileNavComponent"
import { getHash } from '../../actions/payUMoney';
import React from 'react';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const Checkout = () => {
  const head = () => {
    return(
      <Head>
        <title>
          Checkout Page
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <script id="bolt" src="https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js" bolt-color="<color-code>" bolt-logo="<image path>"></script>
          <script id="bolt" src="https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js" bolt-color="<color-code>" bolt-logo="<image path>"></script>
      
        
      </Head>
    )
  }
  
  
  var pd = {
     key: {KEY},
     txnid: "123",
     amount: "55",
     firstname: "Amit Parsai",
     email: "parsai.amit@gmail.com",
     phone: "7708652276",
     productinfo: "examplan",
     surl: {API},
     furl: {API},
     hash: ''
}
  
  let data = {
      'txnid': pd.txnid,
      'email': pd.email,
      'amount': pd.amount,
      'productinfo': pd.productinfo,
      'firstname': pd.firstname
    }
  const handlePayment = () => {
    getHash(data).then(data1=>{
      console.log(data1);
      pd.hash = data1.hash;
    })
    
    redirectToPayU(pd)
  }
  
  const redirectToPayU = (pd) => {
    console.log(pd);
    window.bolt.launch(pd, {
    responseHandler: function (response) {
      console.log(response)
    },
      catchException: function (response) {
    // the code you use to handle the integration errors goes here
    // Make any UI changes to convey the error to the user
  }
});
  }

  return (
    <React.Fragment>
      {head()}
      <Layout>
          <Private>
            <div className="container">
              <Button onClick = {handlePayment}>Pay Now</Button>
            </div>
          </Private>
      </Layout>
    </React.Fragment>
  
)
}

export default Checkout;