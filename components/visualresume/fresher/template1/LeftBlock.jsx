import "../../../../public/stylesheets/visualresume/fresher/template1/stylesheet.css"

const LeftBlock = (props) =>{
  
  const hobbiesList = {
"Exercise" : "running",
"Running" : "running",
"Tennis" : "baseball-ball",
"Table Tennis" : "table-tennis",
"Cricket" : "baseball-ball",
"Football" : "futbol",
"Chess" : "chess-knight",
"Swimming" : "swimmer",
"Listening Music" : "music",
"Playing Guitar" : "guitar",
"Playing Keyboard" : "music",
"Playing Violin" : "music",
"Playing Flute" : "music",
"Singing" : "music",
"Dancing" : "shoe-prints",
"Travelling" : "plane",
"Social Work" : "hands",
"Drama" : "theater-masks",
"Acting" : "theater-masks",
"Painting" : "paint-brush",
"Reading" : "book",
"Writing" : "pen-alt",
"Gaming" : "gamepad",
"Browsing" : "wifi",
"Movies" : "film",
"Gardening" : "seeding",
"Animal Care" : "paw"
}
	
	const skill1fill = ((parseInt(props.vr.skills.rating1)/5)*100).toString() + "%";
	const skill2fill = ((parseInt(props.vr.skills.rating2)/5)*100).toString() + "%";
	const skill3fill = ((parseInt(props.vr.skills.rating3)/5)*100).toString() + "%";
	const skill4fill = ((parseInt(props.vr.skills.rating4)/5)*100).toString() + "%";
	const skill5fill = ((parseInt(props.vr.skills.rating5)/5)*100).toString() + "%";
	const skill6fill = ((parseInt(props.vr.skills.rating6)/5)*100).toString() + "%";
	const skill7fill = ((parseInt(props.vr.skills.rating7)/5)*100).toString() + "%";
	const hobby1 = "fas fa-"+hobbiesList[props.vr.hobbies.hobby1] + " leftblock-icon"
	const hobby2 = "fas fa-"+hobbiesList[props.vr.hobbies.hobby2] + " leftblock-icon"
	const hobby3 = "fas fa-"+hobbiesList[props.vr.hobbies.hobby3] + " leftblock-icon"
  return(
    <div id = "left-block" style = {{backgroundColor: `${props.bg}`}}>
      <div id="profile-container">
			  <img id="profileImage" src={props.photo} />
			</div>
      <div id = "contact-resume" className = "leftblock-headings">
				CONTACT
			</div>
      <i className="fas fa-phone leftblock-icon" id = "phone-icon"></i>
			<div id = "contactphone-resume" className= "leftblock-text">
				{props.vr.pesrsonalInformation.phone}
			</div>
      <i className="fas fa-envelope leftblock-icon" id = "email-icon"></i>
			<div id = "contactemail-resume" className= "leftblock-text">
				{props.email}
			</div>
			<i className="fas fa-home leftblock-icon" id = "home-icon"></i>
			<div id = "contacthome-resume" className= "leftblock-text">
				{props.vr.pesrsonalInformation.address}
			</div>
			
			<div id = "profile-resume" className = "leftblock-headings">
				PROFILE
			</div>
			<div id = "profiletext-resume">
        <span id = "profiletext1-resume">{props.vr.pesrsonalInformation.aboutMe}</span>
			</div>
			
			<div id = "skills-resume" className = "leftblock-headings">
				SKILLS
			</div>
			
			<div id = "skill1div-resume" className = "skilldiv-resume">
				<p id = "skill1name-resume" className = "skillname-resume">{props.vr.skills.skill1}</p>
				<div id = "skill1rating-resume" className = "skillrating-resume"></div>
				<div id = "skill1ratingfill-resume" className = "skillratingfill-resume" style = {{width: `${skill1fill}`, backgroundColor: `${props.font}`}}></div>
			</div>
			
			<div id = "skill2div-resume" className = "skilldiv-resume">
				<p id = "skill2name-resume" className = "skillname-resume">{props.vr.skills.skill2}</p>
				<div id = "skill2rating-resume" className = "skillrating-resume"></div>
				<div id = "skill2ratingfill-resume" className = "skillratingfill-resume" style = {{width: `${skill2fill}`, backgroundColor: `${props.font}`}}></div>
			</div>
			
			<div id = "skill3div-resume" className = "skilldiv-resume">
				<p id = "skill3name-resume" className = "skillname-resume">{props.vr.skills.skill3}</p>
				<div id = "skill3rating-resume" className = "skillrating-resume"></div>
				<div id = "skill3ratingfill-resume" className = "skillratingfill-resume" style = {{width: `${skill3fill}`, backgroundColor: `${props.font}`}}></div>
			</div>
			
			<div id = "skill4div-resume" className = "skilldiv-resume">
				<p id = "skill4name-resume" className = "skillname-resume">{props.vr.skills.skill4}</p>
				<div id = "skill4rating-resume" className = "skillrating-resume"></div>
				<div id = "skill4ratingfill-resume" className = "skillratingfill-resume" style = {{width: `${skill4fill}`, backgroundColor: `${props.font}`}}></div>
			</div>
			
			<div id = "skill5div-resume" className = "skilldiv-resume">
				<p id = "skill5name-resume" className = "skillname-resume">{props.vr.skills.skill5}</p>
				<div id = "skill5rating-resume" className = "skillrating-resume"></div>
				<div id = "skill5ratingfill-resume" className = "skillratingfill-resume" style = {{width: `${skill5fill}`, backgroundColor: `${props.font}`}}></div>
			</div>
			
			
			<div id = "hobbies-resume" className = "leftblock-headings">
				HOBBIES
			</div>
			
			<i className={hobby1} id = "hobbies1-icon"></i>
			<div id = "hobbies1-resume" className= "leftblock-text">
				{props.vr.hobbies.hobby1}
			</div>
			
			<i className={hobby2} id = "hobbies2-icon"></i>
			<div id = "hobbies2-resume" className= "leftblock-text">
				{props.vr.hobbies.hobby2}
			</div>
			
			<i className={hobby3} id = "hobbies3-icon"></i>
			<div id = "hobbies3-resume" className= "leftblock-text">
				{props.vr.hobbies.hobby3}
			</div>
    </div>
  )
}

export default LeftBlock;