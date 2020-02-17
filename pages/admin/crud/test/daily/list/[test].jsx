import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../../../../../components/Layout"
import Admin from "../../../../../../components/auth/Admin";
import { isAuth } from '../../../../../../actions/auth';
import { getTestList, removeTest } from "../../../../../../actions/test/daily/test";
import { getCookie } from '../../../../../../actions/auth';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
const DailyTestList = ({data}) => {
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const token = getCookie("token");
  
  const removeTest1 = (slug) =>{
    removeTest(token, slug).then((res, err)=>{
      if(err){
        console.log(err)
      }else{
        console.log(res)
      }
    })
  }
  
  const showList = () =>{
   return  (
     data.map((d, i)=> {
       let date = Date.parse(d.date);
       date = new Date(date);
       let slug = d.slug;
       let day = date.getDate();
       let mon = date.getMonth();
       let year = date.getFullYear();
       let str = ""
       if (d.test=="aptitide"){
         str = "Aptitude"
       }
       str = day + "-" + month[mon] + "-" + year + " " + str + " Test";
       return (
        <li key = {i} className = "mt-2">
         <Link href = {`/user/test/daily/${slug}`}><a>{str}</a></Link>
         <Button onClick={() => Router.replace(`/admin/crud/test/daily/${slug}`)} color = "info" className = "btn-sm ml-2 mr-2">Update</Button>
         <Button onClick={() => removeTest1(slug)} color = "danger" className = "btn-sm ml-2 mr-2">Delete</Button>
         </li>
       )
     })
           )
    
  }
  
  return (
  <Layout>
      <Admin>
        <div className="container">
          <div className = "mt-4 text-center h1">Daily Tests List</div>
          <ul>
            {showList()}
          </ul>
        </div>
      </Admin>
  </Layout>
)
}

DailyTestList.getInitialProps = ({ query }) => {
    return getTestList(query.test).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { data: data };
        }
    });
};

export default DailyTestList;
