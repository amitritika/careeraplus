import { useState, useEffect, useRef } from 'react';
import {FaRegQuestionCircle, FaChevronDown, FaChevronUp} from "react-icons/fa"

const FAQ = (props) => {
  
  const [cls, setcls] = useState(Array(props.faq.length).fill("collapsed"));
  const [cls2, setcls2] = useState(Array(props.faq.length).fill("collapse1"));
  const [height, setHeight] = useState(Array(props.faq.length).fill({
    maxHeight: "0px",
    transition: "all 1s ease-in"
  }));
  
  const handleClick = (i) => {
    
    let arr = Array(props.faq.length).fill("collapsed");
    let arr2 = Array(props.faq.length).fill("collapse1");
    let arr3 = Array(props.faq.length).fill({
                                              maxHeight: "0px",
                                              transition: "all 1s ease-in"
                                            });
    if(cls[i] == "collapsed"){
      arr[i] = "";
      arr2[i] = "collapse1 show";
      arr3[i] = {
                  maxHeight: "500px",
                  transition: "all 1s ease-in"
                }
      setcls(arr);
      setcls2(arr2);
      setHeight(arr3);
    }else{
      
      setTimeout(()=> setcls2(arr2), 30);
      setTimeout(()=> setcls(arr), 30);
      setTimeout(()=> setHeight(arr3), 300);
      
    }
  }
  
  const faqStyle = {
    maxHeight: height,
    transition: "all 1s ease-in"
  };
  
  const showFaq = ()=> {
    return (
      props.faq.map((q, i)=> {
        let str = "#faq-list-" + `${i}`
        let str1 = "faq-list-" + `${i}`
        return(
          <li data-aos="fade-up" key = {i}>
              <FaRegQuestionCircle className = "faq__help"/> 
              <a  className={cls[i]} onClick = {() => handleClick(i)} style = {{cursor: "pointer"}}>{q.ques}?
                <FaChevronDown className = "faq__show"/>
                <FaChevronUp className = "faq__close"/>
              </a>
            <div style = {height[i]}>
              <div id={str1} className={cls2[i]}>
                <p>
                  {q.ans}
                </p>
              </div>
              </div>
            </li>
        )
      })
    )
  }
  return(
  
    <div id="faq" className="u-bg-light">
      <div className="container" data-aos="fade-up">

        <div className="section-title-1 u-margin-top-medium">
          <h2>Frequently Asked Questions</h2>
         </div>

        <div className="faq">
          <ul>
            {showFaq()}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default FAQ;