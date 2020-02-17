import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import PscComponent from "../../../components/examplan/PscComponent"
import { NavItem, NavLink } from 'reactstrap';
import Link from "next/link"
const MppscHindiExamplan = () => {
	const exam = ["psc", "MPPSC"];
	const stream = ["mppschindi", "Hindi"];
  
  return (
    <Layout>
			<Private>
				<PscComponent exam = {exam} stream = {stream}/>
			</Private>
    </Layout>
  )
}

export default MppscHindiExamplan;