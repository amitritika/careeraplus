import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import EseComponent from "../../../components/examplan/EseComponent"
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import { NavItem, NavLink } from 'reactstrap';

const ElectronicsEseExamplan = () => {
	const exam = ["ese", "ESE"];
	const stream = ["electronics", "Electronics"];
	const desc = "We provide Exam Plan for any Exam with Data Analytics and Previous Year Papers Analysis. This Exam Plan Tool generates time table for GATE, ESE, PSC, UPSC, JEE, NEET"
  
  const head = () => (
        <Head>
            <title>
             Exam plan ESE Electronics & Communication| {APP_NAME}
            </title>
             <script data-ad-client="ca-pub-1792623713572003" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <meta name="description" content= {`${desc}`} />
            <link rel="canonical" href={`${DOMAIN}/examplan/ese/electronics`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content={`${desc}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/examplan/ese/electronics`} />
            <meta property="og:site_name" content={`${APP_NAME} | Exam Plan | ESE Electronics & Communication`} />

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
					<EseComponent exam = {exam} stream = {stream}/>
			</Layout>
		</React.Fragment>
  )
}

export default ElectronicsEseExamplan;