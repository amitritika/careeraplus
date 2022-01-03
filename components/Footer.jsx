import {APP_NAME} from "../config";
import { FaYoutube, FaYoutubeSquare, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = (props) => {
  
  return (
    <footer id="footer">

    <div className="footer-top mt-4">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Career A+</h3>
            <p>
              Gandhi Road <br />
              Velachery, CHENNAI 600042<br />
              India <br /><br />
              <strong>Email:</strong> contact@careeraplus.in<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> <a href="/">Home</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/aboutus">About Us</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/contactus">Contact Us</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/blogs">Blogs</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <a href="/visualresume"><h4>Visual Resume</h4></a>
            <ul>
              <li><i className="fas fa-angle-right"></i> <a href="/visualresume/fresher">Fresher</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/visualresume/pro">Professional</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/visualresume/expert">Expert</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <a href="/examplan"><h4>Exam Plan</h4></a>
            <ul>
              <li><i className="fas fa-angle-right"></i> <a href="/examplan/gate">GATE</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/examplan/ese">ESE</a></li>
              <li><i className="fas fa-angle-right"></i> <a href="/examplan/psc">State PSC</a></li>
            </ul>
          </div>
          

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="mr-md-auto text-center text-md-left">
        <div className="copyright">
          &copy; Copyright <strong><span>Career A+</span></strong>. All Rights Reserved
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://www.youtube.com/channel/UCjauxsnDfKWEXvKA1Rl_E8A" className="twitter"><FaYoutube /></a>
        <a href="https://www.youtube.com/channel/UC6H0Dk6nvBcRrLSwJAqVbpA" className="twitter"><FaYoutubeSquare /></a>
        <a href="https://twitter.com/Career_O" className="twitter"><FaTwitter /></a>
        <a href="https://www.facebook.com/careeraplus/" className="facebook"><FaFacebookF /></a>
        <a href="https://www.instagram.com/careeraplus/" className="instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/56403348" className="linkedin"><FaLinkedinIn /></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;