import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import DateComponent from "../../../components/DateComponent"
import {dateObj} from "../../../helpers/examplan/dates"
import {subjectDaysObj} from "../../../helpers/examplan/entrance/subjectdays"
import {DateCalendarComponent, WeekDayNameComponent, WeekDaysComponent} from "../../../components/examplan/helper"
import {WeekComponent, MonthComponent, YearComponent} from "../../../components/examplan/calendar"

 

const JeeExamplan = () => {
	const class11 = {
		subjectName: ["Math", "Physics", "Chemistry"],
		subjectWeightage: [0.531563492, 0.463492063, 0.430530226],
		chapterName: [
			["Algebra","Diff Calc","Int Calc","Coord Geom","Trigono"],
			["Mechanics","Waves","Thermo"],
			["Physical 1","Inorgnanic 1","Organic 1"]
		],
		chapterWeightage: [
			[0.450542723621542,0.0842229422040402,0.0501664750586022,0.319512668528002,0.0955551905878137],
			[0.691780821917808,0.089041095890411,0.219178082191781],
			[0.180655789143395,0.531769689363037,0.287574521493568]
		],
		chapterTopicsName: [
		[
		["Complex Numbers","Theory Of Equations","Sequences & Series","Permutation & Combination","Binomial Theorem","Classical Probaility","Mathematical Reasoning"],
		["Functions-Sets","Limit & Continuity"],
		["Statistics"],
		["Straight lines and pair of straight lines","Circle","Parabola","Ellipse","Hyperbola"],
		["Trigonometric ratios and identities","Trigonometric equations"]
		],
		[
		["Units & Dimensions","Error in Measurements","One Dimensional Motion","Relative Motion","Projectile Motion","Newton's Laws of motion","Friction","Work, power and energy","Circular Motion","Centre of mass","Rotation","Gravitation","Simple Harmonic Motion","Properties of Matter","Fluid Mechanics"],
		["Wave motion","Sound Wave"],
		["Heat Transfer","Thermodynamics","Kinetic Theory of Gasses"]
		],
		[
		["Mole Concept","Atomic Structure"],
		["Periodic Properties","Chemical Bonding","Gaseous State","Thermodynamics","Chemical Equilibrium","Ionic Equilibrium","Hydrogen","s- Block","p-Block Elements Group 13 & 14"],
		["Nomenclature & Isomerism","General organic Chemistry","Hydrocarbons","Environmental Chemistry"]
		]
		],
		chapterTopicsWeightage: [
			[
				[0.152439024390244,0.139183457051962,0.231972428419936,0.112672322375398,0.19220572640509,0.0389713679745493,0.132555673382821],
				[0.0781776280801276,0.921822371919872],
				[1],
				[0.242990654205608,0.252336448598131,0.205607476635514,0.158878504672897,0.14018691588785],
				[0.625,0.375]
			],
			[
				[0.0841584158415841,0.0841584158415841,0.0594059405940594,0.00495049504950495,0.0099009900990099,0.0495049504950495,0.0148514851485149,0.0891089108910891,0.0247524752475248,0.0841584158415841,0.168316831683168,0.0891089108910891,0.113861386138614,0.0327606290040769,0.0910017472335469],
				[0.0384615384615385,0.961538461538462],
				[0.828125,0.03125,0.140625]
			],
			[
				[0.551020408163265,0.448979591836735],
				[0.103997639769878,0.173329399616463,0.069331759846585,0.194128927570438,0.103997639769878,0.0901312878005606,0.0591144478691936,0.128081303716586,0.0778875940404189],
				[0.115384615384615,0.269230769230769,0.243589743589744,0.371794871794872]
			]
		]
		
	}
	
	const class12 = {
		subjectName: ["Math", "Physics", "Chemistry"],
		subjectWeightage: [0.468436508, 0.536507937, 0.569469774],
		chapterName: [
			["Algebra","Diff Calc","Int Calc","Trigono","Vectors","3D Geom"],
			["Optics","EM","Mod Phy"],
			["Physical 2","Inorganic 2","Organic 2"]
		],
		chapterWeightage: [
			[0.21794900293106,0.222946918997679,0.301577351202074,0.040662114768819,0.0711587008454332,0.145705911254935],
			[0.150887573964497,0.609467455621302,0.239644970414201],
			[0.284307911279801,0.275293559482861,0.440398529237338]
		],
		chapterTopicsName: [
			[
				["Conditional Probability","Matrices & Determinents"],
				["Functions - Relations","Differentiability & Diffrentiation","Application of Derivatives"],
				["Indefinite Integral","Definite Integral","Area","Differential equations"],
				["Inverse circular functions"],
				["Vectors"],
				["3D geometry"]
			],
			[
				["Ray Optics","Wave Optics"],
				["Electric Charge & Fields","Electrostatistics Potential","Capacitance","Current electricity","Moving Charges & Magnetism","Magnetism & Matter","Electromagnetic Induction","Alternaticg Current","Electromagnetic Waves"],
				["Dual Nature & Radiation & Matter","Atoms","Nuclear physics","Semiconductors"]
			],
			[
				["Solid State","Solutions & Colligative Properties","Electrochemistry","Chemical Kinetics","Nuclear Chemistry","Surface Chemsitry"],
				["Extraction of Metals","p-Block Elements Group 15 & 16","d & f block Elements","Transition Elements & Coordinate Compounds","Qualitative Analysis"],
				["Pracical Organic Chemistry","Alkyl Halides","Alcohols & Ethers","Aldehydes & Ketones","Carboxylic Acids & Their Derivatives","Amines","Aromatic Compounds","Biomolecules","Polymers","Chemistry in Everyday Life"]
			]
		],
		chapterTopicsWeightage: [
			[
				[0.347015128415692,0.652984871584308],
				[0.270461059491165,0.273577102690813,0.455961837818022],
				[0.247191011235955,0.292134831460674,0.224719101123595,0.235955056179775],
				[1],
				[1],
				[1]
			],
			[
				[0.392156862745098,0.607843137254902],
				[0.0660194174757281,0.0990291262135922,0.106796116504854,0.252427184466019,0.0268267756770567,0.143076136944303,0.106796116504854,0.0533980582524272,0.145631067961165],
				[0.12962962962963,0.259259259259259,0.12962962962963,0.481481481481482]
			],
			[
				[0.156862745098039,0.205882352941176,0.245098039215686,0.186274509803922,0.0490196078431373,0.156862745098039],
				[0.192373976734166,0.220379146919431,0.182249030590263,0.354373115036622,0.0506247307195174],
				[0.0759493670886076,0.151898734177215,0.0949367088607595,0.107594936708861,0.0443037974683544,0.120253164556962,0.10126582278481,0.253164556962025,0.0316455696202532,0.0189873417721519]
			]
		]
	}
	
  
  const [revision, setrevision] = useState(false);
  const [vacation, setvacation] = useState(false);
	const [classSelected,  setclassSelected] = useState("0");
	const [startDateObj, setstartDateObj] = useState({});
	const [endDateObj, setendDateObj] = useState({});
  const [startDateVacObj, setstartDateVacObj] = useState(new Date(2019,9,25));
	const [endDateVacObj, setendDateVacObj] = useState(new Date(2019,9,31));
	const [calendar1, setcalendar1] = useState([]);
	const [cal, setcal] = useState(false);

  let subjectDaysObjVar = {};
	let vac = "";
	let cal1 = "";
	let classWeightage = [1,0];
  
  const startDate = (date) => {
		setstartDateObj(date);
    //startDateObj = date;
  }
  const endDate = (date) => {
		setendDateObj(date);
   // endDateObj = date;
  }
	
	const startDateVac = (date) => {
    setstartDateVacObj(date);
  }
  const endDateVac = (date) => {
    setendDateVacObj(date);
  }
  
	const handleClassChange = (event) => {
    setclassSelected(event.target.value);
		
  }
	
  const handleChange = (event) => {
    setrevision(!revision);
  }
	const handleChangeVac = (event) => {
    setvacation(!vacation);
  }
  
  const calendar = () => {
		if(parseInt(classSelected) === 1){
			classWeightage = [0.15, 0.85];
		}
		if(parseInt(classSelected) === 2){
			classWeightage = [0.468436508, 0.569469774];
		}
		const subjectObj = {
			startDate: startDateObj,
			endDate: endDateObj,
			classSelected: parseInt(classSelected),
			class11: class11,
			class12: class12,
			revision: revision, 
			vacation: vacation, 
			startDateVac: startDateVacObj, 
			endDateVac: endDateVacObj,
			classWeightage: classWeightage
		}
// 			subjectName: subjectName,
// 			subjectWeightage: subjectWeightage,
// 			subjectTopicsName: subjectTopicsName,
// 			subjectTopicsWeightage: subjectTopicsWeightage,
// 			revision: revision, 
// 			vacation: vacation, 
// 			startDateVac: startDateVacObj, 
// 			endDateVac: endDateVacObj
// 		}
    subjectDaysObjVar = subjectDaysObj(subjectObj);
// 		setcalendar1(subjectDaysObjVar.calendar);
// 		console.log(subjectDaysObjVar);
// 		setcal(true);
		console.log(subjectDaysObjVar);
  }
	if(vacation){
		vac = <React.Fragment>
							<DateComponent date={startDateVac}/>
							<DateComponent date={endDateVac}/>
					</React.Fragment>
	}
	else{
		vac = "";
	}
	
	if(cal){
		console.log(calendar1);

	cal1 = 	<React.Fragment>
			<div style = {{backgroundColor: `#721c24`, borderRadius: `10px`, margin: `10px`, border: `1px solid black`, height: `50px`}}>
				Calendar for JEE
			</div>
			<YearComponent
				monthName = {calendar1.monthName}
				bgColor = {calendar1.bgColor} 
				dates = {calendar1.dates} 
				dateColor = {calendar1.dateColor} 
				sub = {calendar1.sub} 
				topic = {calendar1.topic} 
				test = {calendar1.test}
				/>
		</React.Fragment>
	}
  return (
    <Layout>
      <div className = "examplan">
        <h1>JEE Examplan</h1>
				<label>
          Class 11:
          <input type="radio" name = "class" onChange={handleClassChange} value = "0"/>
        </label>
				<label>
          Class 12:
          <input type="radio" name = "class" value = "1" onChange={handleClassChange}/>
        </label>
				<label>
          Dropper:
          <input type="radio" name = "class" value = "2" onChange={handleClassChange}/>
        </label>
        <DateComponent date={startDate}/>
        <DateComponent date={endDate}/>
        <label>
          Revision:
          <input type="checkbox" onChange={handleChange} />
        </label>
				<label>
         Vacation:
          <input type="checkbox" onChange={handleChangeVac} />
        </label>
				{vac}
        <Button outline color="warning" size="md" onClick = {()=> {calendar()}}>Submit</Button>
        
        {cal1}
      </div>
    </Layout>
  )
}

export default JeeExamplan;