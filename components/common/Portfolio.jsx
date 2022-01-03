import { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  
  const [cls, setcls] = useState({
    all : "filter-active",
    fresher: "",
    pro: "",
    expert: ""
  });
  
  const [cls2, setcls2] = useState({
    all : "",
    fresher: "block",
    pro: "block",
    expert: "block"
  });
  
  const [cls3, setcls3] = useState({
    all : "",
    fresher: 1,
    pro: 1,
    expert: 1
  });
  
  const cardStyleFresher = {
    opacity: cls3.fresher,
    display: cls2.fresher,
    transition: "all .3s ease-in"
  };
  
  const cardStylePro = {
    opacity: cls3.pro,
    display: cls2.pro,
    transition: "all .3s ease-in"
  };
  
  const cardStyleExpert = {
    opacity: cls3.expert,
    display: cls2.expert,
    transition: "all .3s ease-in"
  };
  
  const handleCls = (x) => {
    const obj = {
      all : "",
      fresher: "",
      pro: "",
      expert: ""
    }
    
    const obj2 = {
      all : "",
      fresher: "none",
      pro: "none",
      expert: "none"
    };
    
    const obj3 = {
      all : "",
      fresher: 0,
      pro: 0,
      expert: 0
    };
    
    obj[x] = "filter-active";
    
    if(x !== "all"){
      obj2[x] = "block";
      obj3[x] = 1;
      setcls2(obj2);
      setTimeout(()=> setcls3(obj3), 300);
    }else{
      obj2["fresher"] = "block";
      obj2["pro"] = "block";
      obj2["expert"] = "block";
      obj3["fresher"] = 1;
      obj3["pro"] = 1;
      obj3["expert"] = 1;
      setcls2(obj2);
      setTimeout(()=> setcls3(obj3), 300);
    }
    
    setcls(obj);
    
  }
  
  return(
  
    <div style = {{marginTop: `6rem`}} id="port" className="port">
              <div className="container" data-aos="fade-up">

                <div className="section-title-1">
                  <h2>Visual Resume Templates</h2>
                  <p>Fresher ideal for Just College pass out students. Professional for 0-4 years experience. Expert for 4+ years experience.</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="150">
                  
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="port-filters">
                      <li data-filter="*" className={cls.all} onClick = {() => handleCls("all")}>All</li>
                      <li data-filter=".filter-fresher" className={cls.fresher} onClick = {() => handleCls("fresher")}>Fresher</li>
                      <li data-filter=".filter-pro" className={cls.pro} onClick = {() => handleCls("pro")}>Professional</li>
                      <li data-filter=".filter-expert" className={cls.expert} onClick = {() => handleCls("expert")}>Expert</li>
                    </ul>
                  </div>
                </div>

                <div className="row port-container" data-aos="fade-up" data-aos-delay="300">
                  
                  
                    <div className="col-lg-4 col-md-6 port-item filter-fresher" style = {cardStyleFresher}>
                      <div className="port-wrap">
                        <img src="images/visualresume/fresher/Template1.JPG" className="img-fluid" alt=""></img>
                        <div className="port-wrap__info">
                          <h4>Template 1</h4>
                          <p>Fresher</p>
                          <div className="port-wrap__links">
                            <a href="/visualresume/fresher/template1" title="More Details"><i className="fas fa-link"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   

                  <div className="col-lg-4 col-md-6 port-item filter-pro" style = {cardStylePro}>
                    <div className="port-wrap">
                      <img src="images/visualresume/pro/Template2.JPG" className="img-fluid" alt=""></img>
                      <div className="port-wrap__info">
                        <h4>Template 2</h4>
                        <p>Professional</p>
                        <div className="port-wrap__links">
                          <a href="/visualresume/pro/template2" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 port-item filter-expert" style = {cardStyleExpert}>
                    <div className="port-wrap">
                      <img src="images/visualresume/expert/Template3.JPG" className="img-fluid" alt=""></img>
                      <div className="port-wrap__info">
                        <h4>Template 3</h4>
                        <p>Expert</p>
                        <div className="port-wrap__links">
                          <a href="/visualresume/expert/template3" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 port-item filter-fresher" style = {cardStyleFresher}>
                      <div className="port-wrap">
                        <img src="images/visualresume/fresher/Template4.JPG" className="img-fluid" alt=""></img>
                        <div className="port-wrap__info">
                          <h4>Template 1</h4>
                          <p>Fresher</p>
                          <div className="port-wrap__links">
                            <a href="/visualresume/fresher/template4" title="More Details"><i className="fas fa-link"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   

                  <div className="col-lg-4 col-md-6 port-item filter-pro" style = {cardStylePro}>
                    <div className="port-wrap">
                      <img src="images/visualresume/pro/Template5.JPG" className="img-fluid" alt=""></img>
                      <div className="port-wrap__info">
                        <h4>Template 2</h4>
                        <p>Professional</p>
                        <div className="port-wrap__links">
                          <a href="/visualresume/pro/template5" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 port-item filter-expert" style = {cardStyleExpert}>
                    <div className="port-wrap">
                      <img src="images/visualresume/expert/Template1_1.PNG" className="img-fluid" alt=""></img>
                      <div className="port-wrap__info">
                        <h4>Template 3</h4>
                        <p>Expert</p>
                        <div className="port-wrap__links">
                          <a href="/visualresume/expert/template1" title="More Details"><i className="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
  );
}

export default Portfolio;