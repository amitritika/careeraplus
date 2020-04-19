import "../../../../public/stylesheets/visualresume/fresher/template1/stylesheet.css"
import renderHTML from 'react-render-html';
const RightBlock = (props) =>{
	
	const iconList = {
  "Engineering Mechanics" : "fas fa-truck-loading",
	"Strength of Materials" : "fas fa-i-cursor",
	"Theory Of machines" : "fas fa-cogs",
	"Machine Design" : "fas fa-cog",
	"Fluid Mechanics" : "fas fa-tint",
	"Heat Tranfer" : "fas fa-thermometer-half",
	"Thermodynamics" : "fas fa-fire",
	"Refrigeration & Air Cond" : "fas fa-snowflake",
	"Manufacturing Eng" : "fas fa-hammer",
	"Industrial Eng" : "fas fa-industry",

	"Solid Mechanics" : "fas fa-truck-loading",
	"Structural Analysis" : "fas fa-building",
	"RCC Structures" : "fas fa-building",
	"Design of Steel Structures" : "fas fa-building",
	"Geotechnical Engineering" : "fas fa-globe-americas",
	"Fluid Mechanics & Machines" : "fas fa-tint",
	"Environmental Engineering" : "fas fa-cloud",
	"Irrigation Engineering" : "fas fa-water",
	"Engineering Hydrology" : "fas fa-water",
	"Transportation Engineering" : "fas fa-truck",
	"Geometics Engineering" : "fas fa-globe-americas",
	"CMM and Eng Mech" : "fas fa-map",

	"Network Theory" : "fas fa-memory",
	"Electromagnetics" : "fas fa-charging-station",
	"Control Systems" : "fas fa-microscope",
	"Electronic Device & Circuits" : "fas fa-laptop",
	"Analog Circuits" : "fas fa-clock",
	"Digital Circuits" : "fas fa-digital-tachograph",
	"Microprocessors" : "fas fa-microchip",
	"Signals & Systems" : "fas fa-signal",
	"Communication Systems" : "fas fa-satellite-dish",

	"Electric Circuits" : "fas fa-memory",
	"Electrical Machines" : "fas fa-medapps",
	"Power Systems" : "fas fa-medapps",
	"Measurement" : "fas fa-microscope",
	"Digital Electronics" : "fas fa-digital-tacograph",
	"Power Electronics" : "fas fa-microchip",
	"Electromagnetic Theory" : "fas fa-charging-station",

	"Process Calculations" : "fas fa-map",
	"Mechanical Operations" : "fas fa-thermometer-half",
	"Mass Transfer" : "fas fa-atom",
	"Chemical Reaction Eng" : "fas fa-atom",
	"Instrumentation" : "fas fa-microscope",
	"Process Control" : "fas fa-network-wired",
	"Plant Design & Economics" : "fas fa-industry",
	"Chemical Technology" : "fas fa-tablets",

	"Theory of Comput" : "fas fa-laptop",
	"Digital Logic" : "fas fa-memory",
	"Comp Org & Architecture" : "fas fa-memory",
	"Prog & Data Structures" : "fas fa-code",
	"Algorithms" : "fas fa-code-branch",
	"Compiler Design" : "fas fa-laptop-code",
	"Operating Systems" : "fab fa-windows",
	"Databases" : "fas fa-database",
	"Computer Networks" : "fas fa-network-wired",

	"Optical Instrumentation" : "fas fa-microscope",
		
	"Artificial Intelligence": "fas fa-code-branch",
	"Computer Architecture" : "fas fa-memory",
	"Information Management" : "fas fa-network-wired",
	"Web Systems": "fab fa-chrome",
	"Grid & Cloud Comput": "fas fa-cloud-upload-alt",
		
		"Accounting": "fas fa-file-invoice",
		"Economics": "fas fa-rupee-sign", 
		"Business & Corporate Law": "fas fa-gavel",
		"Business Management": "fas fa-briefcase",
		"Auditing": "fas fa-search-dollar",
		"Environmental Studies": "fas fa-globe-americas",
		"Entrepreneurship": "fas fa-user-tie",
		"Taxation": "fas fa-hand-holding-usd",
		"Marketing": "fas fa-bullhorn",
		"Statistics": "fas fa-chart-bar",
		"Mathematics": "fas fa-calculator",
		"Programming": "fas fa-code",
		"Computer Application": "fas fa-laptop-code",
		"Web Development": "fab fa-chrome",
		"Data Base Management": "fas fa-database",

	}
	
	const area1 = "areaintrest-logo " + iconList[props.vr.areaOfIntrest.area1Topic];
	const area2 = "areaintrest-logo " + iconList[props.vr.areaOfIntrest.area2Topic];
	const area3 = "areaintrest-logo " + iconList[props.vr.areaOfIntrest.area3Topic];

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