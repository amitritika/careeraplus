import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { Nav, NavItem, NavLink, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
import { getCookie, isAuth } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';

const UpdateProfileNavComponent = (props) => {
  const [values, setValues] = useState({
        message: '',
        success: false,
        error: false,
        name: "",
        photo:"/images/profile.png",
        visualresume: "",
        examplan: ""
    });
  const token = getCookie('token');
  const { message, success, error, name, photo, visualresume, examplan} = values;
  const init=() => {
    getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
          
					if(data.photo){
            props.pr({
            name: data.name,
            photo: `${API}/user/photo/${data.username}`,
            visualresume: data.visualresume.typeOfResume,
						examplan: data.examplan.goal
          });
						setValues({
                ...values,
                name: data.name,
								photo: `${API}/user/photo/${data.username}`,
              	visualresume: data.visualresume.typeOfResume,
                examplan: data.examplan.goal[2]
            });
					}else{
            props.pr({
            name: data.name,
            photo: "/images/profile.png",
            visualresume: data.visualresume.typeOfResume,
						examplan: data.examplan.goal
          });
						setValues({
                ...values,
                name: data.name,
                visualresume: data.visualresume.typeOfResume,
                examplan: data.examplan.goal[2]
            });
					}
          
          
        }
    });
  }
  
  useEffect(() => {
      init();
			
  }, []);

  return (

           <Col xs = "2">
             <div></div>
             <h6>Update Profile</h6>
             <Nav vertical>
              <NavItem>
                <NavLink href="/user/update/account-information">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={examplan}>Examplan</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href={visualresume}>Visual Resume</NavLink>
              </NavItem>
            </Nav>
            </Col>
)
}

export default UpdateProfileNavComponent;