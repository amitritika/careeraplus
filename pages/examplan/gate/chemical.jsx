import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import GateComponent from "../../../components/examplan/GateComponent"
import { NavItem, NavLink } from 'reactstrap';
import Link from "next/link"
const ChemicalGateExamplan = () => {
	const exam = ["gate", "GATE"];
	const stream = ["chemical", "Chemical"];
  
  return (
    <Layout>
			<Private>
				<GateComponent exam = {exam} stream = {stream}/>
			</Private>
    </Layout>
  )
}

export default ChemicalGateExamplan;