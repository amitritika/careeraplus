import {APP_NAME} from "../config"
import"../public/stylesheets/index.css";


import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';

const FAQ = (props) => {
  const showFaq = ()=> {
    return (
      props.faq.map((q, i)=> {
        let str = "#faq-list-" + `${i}`
        let str1 = "faq-list-" + `${i}`
        return(
          <li data-aos="fade-up">
              <i className="far fa-question-circle icon-help"></i> <a data-toggle="collapse" className="collapsed" href={str}>{q.ques}? <i className="fas fa-chevron-down icon-show"></i><i className="fas fa-chevron-up icon-close"></i></a>
              <div id={str1} className="collapse" data-parent=".faq-list">
                <p>
                  {q.ans}
                </p>
              </div>
            </li>
        )
      })
    )
  }
  return(
  
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
         </div>

        <div className="faq-list">
          <ul>
            {showFaq()}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default FAQ;