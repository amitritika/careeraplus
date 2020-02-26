import "../../../../public/stylesheets/visualresume/fresher/template1/stylesheet.css"
import renderHTML from 'react-render-html';
const RightBlock = (props) =>{
	
	const iconList = {
  "Engineering Mechanics" : "truck-loading",
	"Strength of Materials" : "i-cursor",
	"Theory Of machines" : "cogs",
	"Machine Design" : "cog",
	"Fluid Mechanics" : "tint",
	"Heat Tranfer" : "thermometer-half",
	"Thermodynamics" : "fire",
	"Refrigeration & Air Cond" : "snowflake",
	"Manufacturing Eng" : "hammer",
	"Industrial Eng" : "industry",

	"Solid Mechanics" : "truck-loading",
	"Structural Analysis" : "building",
	"RCC Structures" : "building",
	"Design of Steel Structures" : "building",
	"Geotechnical Engineering" : "globe-americas",
	"Fluid Mechanics & Machines" : "tint",
	"Environmental Engineering" : "cloud",
	"Irrigation Engineering" : "water",
	"Engineering Hydrology" : "water",
	"Transportation Engineering" : "truck",
	"Geometics Engineering" : "earth",
	"CMM and Eng Mech" : "map",

	"Network Theory" : "memory",
	"Electromagnetics" : "charging-station",
	"Control Systems" : "microscope",
	"Electronic Device & Circuits" : "laptop",
	"Analog Circuits" : "clock",
	"Digital Circuits" : "digital-tacograph",
	"Microprocessors" : "microchip",
	"Signals & Systems" : "signal",
	"Communication Systems" : "satellite-dish",

	"Electric Circuits" : "memory",
	"Electrical Machines" : "medapps",
	"Power Systems" : "medapps",
	"Measurement" : "microscope",
	"Digital Electronics" : "digital-tacograph",
	"Power Electronics" : "microchip",
	"Electromagnetic Theory" : "charging-station",

	"Process Calculations" : "map",
	"Mechanical Operations" : "thermometer-half",
	"Mass Transfer" : "atom",
	"Chemical Reaction Eng" : "atom",
	"Instrumentation" : "microscope",
	"Process Control" : "network-wired",
	"Plant Design & Economics" : "industry",
	"Chemical Technology" : "tablets",

	"Theory of Comput" : "laptop",
	"Digital Logic" : "memory",
	"Comp Org & Architecture" : "memory",
	"Prog & Data Structures" : "code",
	"Algorithms" : "code-branch",
	"Compiler Design" : "laptop-code",
	"Operating Systems" : "windows",
	"Databases" : "database",
	"Computer Networks" : "network-wired",

	"Optical Instrumentation" : "microscope"

	}
	
	const area1 = "areaintrest-logo fas fa-" + iconList[props.vr.areaOfIntrest.area1Topic];
	const area2 = "areaintrest-logo fas fa-" + iconList[props.vr.areaOfIntrest.area2Topic];
	const area3 = "areaintrest-logo fas fa-" + iconList[props.vr.areaOfIntrest.area3Topic];

  return(
    <div id = "right-block">
      <div id = "name-resume" style={{color: `${props.bg}`}}>
				{props.name}
			</div>
			<div id = "designation-resume" style={{color: `${props.bg}`}}>
				{props.vr.pesrsonalInformation.designation}
			</div>
			
			<div id = "vl"></div>
			
			<div id = "educationlogo-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className="fas fa-graduation-cap right-block-logo"></i>
			</div>
			<div id = "education-resume" className = "rightblock-headings" style={{color: `${props.bg}`}}>
				EDUCATION
			</div>
			
			<div id = "graduationdot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "graduationyear-resume" className = "rightblock-year" style={{color: `${props.font}`}}>
			{props.vr.educationalInformation.latestMonth}, {props.vr.educationalInformation.latestYear}
			</div>
			<div id = "graduationdetails-resume" className = "details-resume">
				<p className = "degree-resume" style={{color: `${props.bg}`}}>{props.vr.educationalInformation.latestDegree}</p>
				<p className = "college-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.latestCollege}</p>
			</div>
      <div id = "graduationcgpa-resume">
        <p className = "cgpa-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.latestCgpa}</p>
      </div>
      
      <div id = "hscdot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
      <div id = "hscyear-resume" className = "rightblock-year" style={{color: `${props.font}`}}>
      {props.vr.educationalInformation.nextMonth}, {props.vr.educationalInformation.nextYear}
      </div>
      <div id = "hscdetails-resume" className = "details-resume">
        <p className = "degree-resume" style={{color: `${props.bg}`}}>{props.vr.educationalInformation.nextDegree}</p>
        <p className = "college-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.nextCollege}</p>
      </div>
      <div id = "hsccgpa-resume">
        <p className = "cgpa-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.nextCgpa}</p>
      </div>
      
      <div id = "sscdot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "sscyear-resume" className = "rightblock-year" style={{color: `${props.font}`}}>
			{props.vr.educationalInformation.lastMonth}, {props.vr.educationalInformation.lastYear}
			</div>
			<div id = "sscdetails-resume" className = "details-resume">
				<p className = "degree-resume" style={{color: `${props.bg}`}}>{props.vr.educationalInformation.lastDegree}</p>
				<p className = "college-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.lastCollege}</p>
			</div>
      <div id = "ssccgpa-resume">
        <p className = "cgpa-resume" style={{color: `${props.font}`}}>{props.vr.educationalInformation.lastCgpa}</p>
      </div>
			
			<div id = "projectlogo-resume" className  = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className ="fas fa-cog right-block-logo" ></i>
			</div>
			<div id = "project-resume" className  = "rightblock-headings">
				PROJECT
			</div>
			
      <div id = "majproject1dot-resume" className  = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "majproject-resume" style = {{color: `${props.font}`}}>
			<p>
				<span className  = "project-resume">
					Maj Proj Title:
				</span>
				{props.vr.projectInformation.majTitle}
			</p>
			
			{renderHTML(props.vr.projectInformation.majDes)}
			</div>
      
      <div id = "minproject1dot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "minproject-resume" style = {{color: `${props.font}`}}>
			<p>
				<span className = "project-resume">
					Min Proj Title:
				</span>
				{props.vr.projectInformation.minTitle}
			</p>
          {renderHTML(props.vr.projectInformation.minDes)}
			</div> 
			
			<div id = "traininglogo-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className = "fas fa-tools right-block-logo"></i>
			</div>
			<div id = "training-resume" className = "rightblock-headings"> 
				INDUSTRIAL EXPOSURE
			</div>
			<div id = "training1dot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "training1-resume" style = {{color: `${props.font}`}}>
			<p id = "training1dates-resume">
				<span className = "project-resume">
					{props.vr.trainingInformation.training1}-
				</span>
				{props.vr.trainingInformation.startDate1} - {props.vr.trainingInformation.endDate1}
			</p>
			
			<p id = "training1org-resume">
				<span className = "project-resume">
					{props.vr.trainingInformation.org1}
				</span>
			</p>
				{renderHTML(props.vr.trainingInformation.des1)}
			</div>
			
			{props.skills.trainingDisplay && <div>
			<div id = "training2dot-resume" className = "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
			<div id = "training2-resume" style = {{color: `${props.font}`}}>
			<p id = "training1dates-resume">
				<span className = "project-resume">
					{props.vr.trainingInformation.training2}-
				</span>
				{props.vr.trainingInformation.startDate2} - {props.vr.trainingInformation.endDate2}
			</p>
			
			<p id = "training2org-resume">
				<span className = "project-resume">
					{props.vr.trainingInformation.org2}
				</span>
			</p>
			{renderHTML(props.vr.trainingInformation.des2)}
			</div>
			</div>}
			
			{props.skills.trainingDisplay && <div>
			<div id = "arealogo-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className = "fas fa-book-reader right-block-logo"></i>
			</div>
			<div id = "area-resume" className = "rightblock-headings"> 
				AREA OF INTEREST
			</div>
			<div id = "areaintrest-resume" style = {{color: `${props.font}`}}>
				<div id = "areaintrest1-resume">
					<div id = "areaintrestlogo1-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area1}></i>
					</div>
					<div id = "areaintresttext1-resume">{props.vr.areaOfIntrest.area1Topic}</div>
				</div>
				
				<div id = "areaintrest2-resume">
					<div id = "areaintrestlogo2-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area2}></i>
					</div>
					<div id = "areaintresttext2-resume">{props.vr.areaOfIntrest.area2Topic}</div>
				</div>
				
				<div id = "areaintrest3-resume">
					<div id = "areaintrestlogo3-resume" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area3}></i>
					</div>
					<div id = "areaintresttext3-resume">{props.vr.areaOfIntrest.area3Topic}</div>
				</div>
			</div>
			
			<div id = "extralogo-resume" className =  "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className = "fas fa-palette right-block-logo"></i>
			</div>
			<div id = "extra-resume" className =  "rightblock-headings"> 
				EXTRA CURRICULAR
			</div>
      <div id = "extra1dot-resume" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
      <div id = "extra1-resume" className =  "extra" style = {{color: `${props.font}`}}>
        {props.vr.extraCurricular.extra1}
      </div>
      <div id = "extra2dot-resume" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
      <div id = "extra2-resume" className =  "extra" style = {{color: `${props.font}`}}>
        {props.vr.extraCurricular.extra2}
      </div>
      <div id = "extra3dot-resume" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
      <div id = "extra3-resume" className =  "extra" style = {{color: `${props.font}`}}>
        {props.vr.extraCurricular.extra3}
      </div>
			</div>}
			
			{!props.skills.trainingDisplay && <div>
			<div id = "arealogo-resume-training" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className = "fas fa-book-reader right-block-logo"></i>
			</div>
			<div id = "area-resume-training" className = "rightblock-headings"> 
				AREA OF INTEREST
			</div>
			<div id = "areaintrest-resume-training" style = {{color: `${props.font}`}}>
				<div id = "areaintrest1-resume-training">
					<div id = "areaintrestlogo1-resume-training" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area1}></i>
					</div>
					<div id = "areaintresttext1-resume-training">{props.vr.areaOfIntrest.area1Topic}</div>
				</div>
				
				<div id = "areaintrest2-resume-training">
					<div id = "areaintrestlogo2-resume-training" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area2}></i>
					</div>
					<div id = "areaintresttext2-resume-training">{props.vr.areaOfIntrest.area2Topic}</div>
				</div>
				
				<div id = "areaintrest3-resume-training">
					<div id = "areaintrestlogo3-resume-training" className = "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
						<i className = {area3}></i>
					</div>
					<div id = "areaintresttext3-resume-training">{props.vr.areaOfIntrest.area3Topic}</div>
				</div>
			</div>
			
			<div id = "extralogo-resume-training" className =  "right-block-logo-div" style={{backgroundColor: `${props.bg}`}}>
				<i className = "fas fa-palette right-block-logo"></i>
			</div>
			<div id = "extra-resume-training" className =  "rightblock-headings"> 
				EXTRA CURRICULAR
			</div>
			<div>
				<div id = "extra1dot-resume-training" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
				<div id = "extra1-resume-training" className =  "extra" style = {{color: `${props.font}`}}>
					{props.vr.extraCurricular.extra1}
				</div>
			</div>
			{!props.skills.extra4Display && <div>
				<div>
					<div id = "extra2dot-resume-training" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra2-resume-training" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra2}
					</div>
				</div>
				<div>
					<div id = "extra3dot-resume-training" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra3-resume-training" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra3}
					</div>
				</div>
			</div>}
				
			{props.skills.extra4Display && !props.skills.extra5Display && <div>
				<div>
					<div id = "extra2dot-resume-extra4" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra2-resume-extra4" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra2}
					</div>
				</div>
				<div>
					<div id = "extra3dot-resume-extra4" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra3-resume-extra4" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra3}
					</div>
				</div>
				<div>
					<div id = "extra4dot-resume-extra4" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra4-resume-extra4" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra4}
					</div>
				</div>
			</div>}
				
			{props.skills.extra5Display && <div>
				<div>
					<div id = "extra2dot-resume-extra5" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra2-resume-extra5" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra2}
					</div>
				</div>
				<div>
					<div id = "extra3dot-resume-extra5" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra3-resume-extra5" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra3}
					</div>
				</div>
				<div>
					<div id = "extra4dot-resume-extra5" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra4-resume-extra5" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra4}
					</div>
				</div>
				<div>
					<div id = "extra5dot-resume-extra5" className =  "rightblock-dot" style={{backgroundColor: `${props.bg}`}}></div>
					<div id = "extra5-resume-extra5" className =  "extra" style = {{color: `${props.font}`}}>
						{props.vr.extraCurricular.extra5}
					</div>
				</div>
			</div>}
				
			</div>}
			
    </div>
    
    
  )
  }

export default RightBlock;