import { FaAngleDoubleRight } from "react-icons/fa";
const Hero = () => {

  return(
  
    <div style = {{marginTop: `6rem`}}>
              <div className="container" data-aos="fade-up">

                <div className="section-title-1">
                  <h2>What We DO</h2>
                  <p>Our aim is to help everyone to get their Dream Job.</p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <p>
                      Following are few ways through which we can help you to achive your Dream Career.
                    </p>
                    <ul style = {{listStyleType: 'none'}}>
                      <li className = "u-list-1"><FaAngleDoubleRight color = "#2487ce"/> We provide easy to use Visual Resume tool.</li>
                      <li className = "u-list-1"><FaAngleDoubleRight color = "#2487ce"/> Visual Resume attracts recruiter to spend more time on profile. </li>
                      <li className = "u-list-1"><FaAngleDoubleRight color = "#2487ce"/> It helps you stand out in a crowd.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      We also provide, Exam Plan tool, to customize your time table for preparation of any competitive exam. We use extensive data analytics to generate
                      exam plan with Test, Revision, Backup Days and many more.
                    </p>
                    <a href="aboutus" className="button-secondary">Who we Are</a>
                  </div>
                </div>

              </div>
            </div>
  );
}

export default Hero;