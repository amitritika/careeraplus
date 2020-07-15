import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Private from "../../../components/auth/Private";
import { useState, useEffect } from 'react';

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
const Payment = () => {
    const [values, setValues] = useState({
    error: true,
      message: "",
      success: false
    });
  
  const {error, message, success} = values;
    

    const head = () => (
        <Head>
            <title>
                Payment Cancelled | {APP_NAME}
            </title>
            <meta name="description" content="Payment Status" />
        </Head>
    );
    const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

    const showErrorMessage = () => (
        <div className="alert alert-warning" style={{ display: error ? '' : 'none' }}>
            "Payment Cancelled"
        </div>
    );
    
    return (
        <React.Fragment>
            {head()}
            <Layout>
              <Private>
                {showSuccessMessage()}
                {showErrorMessage()}
              </Private>
            </Layout>
        </React.Fragment>
    );
};


export default Payment;