import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Head from 'next/head';
import Private from "../../../components/auth/Private";
import GateComponent from "../../../components/examplan/GateComponent"
import { NavItem, NavLink } from 'reactstrap';
import Link from "next/link"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
const InstrumentationGateExamplan = () => {
	const exam = ["gate", "GATE"];
	const stream = ["instrumentation", "Instrumentation"];
  
	const desc = "We provide Exam Plan for any Exam with Data Analytics and Previous Year Papers Analysis. This Exam Plan Tool generates time table for GATE, ESE, PSC, UPSC, JEE, NEET"
  
  const head = () => (
        <Head>
            <title>
             Exam plan GATE Instrumentation | {APP_NAME}
            </title>
						<script data-ad-client="ca-pub-1792623713572003" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/examplan/gate/instrumentation`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/examplan/gate/instrumentation`} />
            <meta property="og:site_name" content={`${APP_NAME} | Exam Plan | GATE | Instrumentation`} />

            <meta property="og:image" content={`${API}/image/examplan`} />
            <meta property="og:image:secure_url" content={`${API}/image/examplan`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
	
  return (
    <React.Fragment>
			{head()}
		<Layout>
				<GateComponent exam = {exam} stream = {stream}/>
    </Layout>
		</React.Fragment>
  )
}

export default InstrumentationGateExamplan;