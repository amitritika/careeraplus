import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import PscComponent from "../../../components/examplan/PscComponent"
import { NavItem, NavLink } from 'reactstrap';
import Link from "next/link"
const MppscEnglishExamplan = () => {
	const exam = ["psc", "MPPSC"];
	const stream = ["mppscenglish", "English"];
  
  return (
    <Layout>
				<PscComponent exam = {exam} stream = {stream}/>
    </Layout>
  )
}

export default MppscEnglishExamplan;