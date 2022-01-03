import { FaRegIdBadge, FaRegCalendarAlt, FaEnvelope, FaBlog, FaLayerGroup} from "react-icons/fa";
const Hero = () => {

  return(
  
    <div id="hero1" className="d-flex align-items-center" style = {{background: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80") top center', backgroundSize: 'cover'}}>
              <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9 u-center-text">
                    <h1>We help to build Your Dream Career</h1>
                    <h2>We want Dream Job for Everyone</h2>
                  </div>
                </div>
                <div className="u-center-text">
                  <a href="#about" className="button-primary scrollto">Get Started</a>
                </div>

                <div className="row" style = {{marginTop: '10rem'}}>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box-1">
                      <div className="icon-box-1-icon"><FaRegIdBadge /></div>
                      <h4 className="icon-box-1-title"><a href="/visualresume">Visual Resume</a></h4>
                      <p className="icon-box-1-description">Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min.</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box-1">
                      <div className="icon-box-1-icon"><FaRegCalendarAlt /></div>
                      <h4 className="icon-box-1-title"><a href="examplan">Exam Plan</a></h4>
                      <p className="icon-box-1-description">Data Analytics driven Exam Plan with TEST, Backup Days and 3 revision cycle, for GATE, ESE, State PSC and many more.</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                    <div className="icon-box-1">
                      <div className="icon-box-1-icon"><FaBlog /></div>
                      <h4 className="icon-box-1-title"><a href="blogs">Blogs</a></h4>
                      <p className="icon-box-1-description">We provide extensive information on Career path and advice to improve skills through Videos and Blogs</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                    <div className="icon-box-1">
                      <div className="icon-box-1-icon"><FaEnvelope /></div>
                      <h4 className="icon-box-1-title"><a href="/contactus">Support</a></h4>
                      <p className="icon-box-1-description">You can reach us for any support or help. Mail us directly at <em>contact@careeraplus.in</em></p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
  );
}

export default Hero;