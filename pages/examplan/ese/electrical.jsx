import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import EseComponent from "../../../components/examplan/EseComponent"
import { NavItem, NavLink } from 'reactstrap';

const ElectricalEseExamplan = () => {
	const exam = ["ese", "ESE"];
	const stream = ["electrical", "Electrical"];
  return (
    <Layout>
			<Private>
				<EseComponent exam = {exam} stream = {stream}/>
			</Private>
    </Layout>
  )
}

export default ElectricalEseExamplan;