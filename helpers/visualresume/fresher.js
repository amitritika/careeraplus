import { FaRunning, FaBaseballBall, FaTableTennis, FaRegFutbol,FaChessKnight, FaSwimmer, FaMusic , FaGuitar,
			 FaShoePrints, FaPlane, FaHands, FaTheaterMasks, FaPaintBrush, FaBook, FaPenAlt, FaGamepad,
			 FaWifi, FaFilm,  FaSeedling, FaPaw} from 'react-icons/fa';


export const hobbiesListIcon = {
"Exercise" : "fas fa-running",
"Running" : "fas fa-running",
"Tennis" : "fas fa-baseball-ball",
"Table Tennis" : "fas fa-table-tennis",
"Cricket" : "fas fa-baseball-ball",
"Football" : "fas fa-reg-futbol",
"Chess" : "fas fa-chess-knight",
"Swimming" : "fas fa-swimmer",
"Listening Music" : "fas fa-music",
"Playing Guitar" : "fas fa-guitar",
"Playing Keyboard" : "fas fa-music",
"Playing Violin" : "fas fa-music",
"Playing Flute" : "fas fa-music",
"Singing" : "fas fa-music",
"Dancing" : "fas fa-shoe-prints",
"Travelling" : "fas fa-plane",
"Social Work" : "fas fa-hands",
"Drama" : "fas fa-theater-masks",
"Acting" : "fas fa-theater-masks",
"Painting" : "fas fa-paint-brush",
"Reading" : "fas fa-book",
"Writing" : "fas fa-pen-alt",
"Gaming" : "fas fa-gamepad",
"Browsing" : "fas fa-wifi",
"Movies" : "fas fa-film",
"Gardening" : "fas fa-seedling",
"Animal Care" : "fas fa-paw"
}

export const hobbiesList = {
"Exercise" : FaRunning,
"Running" : FaRunning,
"Tennis" : FaBaseballBall,
"Table Tennis" : FaTableTennis,
"Cricket" : FaBaseballBall,
"Football" : FaRegFutbol,
"Chess" : FaChessKnight,
"Swimming" : FaSwimmer,
"Listening Music" : FaMusic,
"Playing Guitar" : FaGuitar,
"Playing Keyboard" : FaMusic,
"Playing Violin" : FaMusic,
"Playing Flute" : FaMusic,
"Singing" : FaMusic,
"Dancing" : FaShoePrints,
"Travelling" : FaPlane,
"Social Work" : FaHands,
"Drama" : FaTheaterMasks,
"Acting" : FaTheaterMasks,
"Painting" : FaPaintBrush,
"Reading" : FaBook,
"Writing" : FaPenAlt,
"Gaming" : FaGamepad,
"Browsing" : FaWifi,
"Movies" : FaFilm,
"Gardening" : FaSeedling,
"Animal Care" : FaPaw
}

export const areaOfIntrest = {
			subject: [
				{value:"ME", name: "Mechanical Engineering"},
				{value:"CE", name: "Civil Engineering"},
				{value:"ECE", name: "Electronics & Communication Engineering"},
				{value:"CSE", name: "Computer Science Engineering"},
				{value:"EE", name: "Electrical Engineering"},
				{value:"CHE", name: "Chemical Engineering"},
				{value:"IE", name: "Instrumentation Engineering"},
				{value:"IT", name: "Information Technology"},
				{value:"BCOM", name: "Bachelor of Commerce"}
			],
			topics: {
				"ME": [
					{value: "Engineering Mechanics", name: "Engineering Mechanics"},
					{value: "Strength of Materials", name: "Strength of Materials"},
					{value: "Theory Of machines", name: "Theory Of machines"},
					{value: "Machine Design", name: "Machine Design"},
					{value: "Fluid Mechanics", name: "Fluid Mechanics"},
					{value: "Heat Tranfer", name: "Heat Tranfer"},
					{value: "Thermodynamics", name: "Thermodynamics"},
					{value: "Refrigeration & Air Cond", name: "Refrigeration & Air Cond"},
					{value: "Manufacturing Eng", name: "Manufacturing Eng"},
					{value: "Industrial Eng", name: "Industrial Eng"}
				],
				
				"CE": [
				{name: "Solid Mechanics", value: "Solid Mechanics" },
				{name: "Structural Analysis", value: "Structural Analysis"},
				{name: "RCC Structures", value: "RCC Structures"},
				{name: "Design of Steel Structures", value: "Design of Steel Structures"},
				{name: "Geotechnical Engineering", value: "Geotechnical Engineering"},
				{name: "Fluid Mechanics & Machines", value: "Fluid Mechanics & Machines"},
				{name: "Environmental Engineering", value: "Environmental Engineering"},
				{name: "Irrigation Engineering", value: "Irrigation Engineering"},
				{name: "Engineering Hydrology", value: "Engineering Hydrology"},
				{name: "Transportation Engineering", value: "Transportation Engineering"},
				{name: "Geometics Engineering", value: "Geometics Engineering"},
				{name: "CMM and Eng Mech", value: "CMM and Eng Mech"}],
				
				"ECE": [
					{value: "Network Theory", name: "Network Theory"},
					{value: "Electromagnetics", name: "Electromagnetics"},
					{value: "Control Systems", name: "Control Systems"},
					{value: "Electronic Device & Circuits", name: "Electronic Device & Circuits"},
					{value: "Analog Circuits", name: "Analog Circuits"},
					{value: "Digital Circuits", name: "Digital Circuits"},
					{value: "Microprocessors", name: "Microprocessors"},
					{value: "Signals & Systems", name: "Signals & Systems"},
					{value: "Communication Systems", name: "Communication Systems"}
					
				],
				
				"CSE": [
					{value:"Theory of Comput", name:"Theory of Comput"},
					{value:"Digital Logic", name:"Digital Logic"},
					{value:"Comp Org & Architecture", name:"Comp Org & Architecture"},
					{value:"Prog & Data Structures", name:"Prog & Data Structures"},
					{value:"Algorithms", name:"Algorithms"},
					{value:"Compiler Design", name:"Compiler Design"},
					{value:"Operating Systems", name:"Operating Systems"},
					{value:"Databases", name:"Databases"},
					{value:"Computer Networks", name:"Computer Networks"}
					
				],
				
				"EE": [
					{value:"Electric Circuits", name: "Electric Circuits"},
					{value:"Signal & Systems", name: "Signal & Systems"},
					{value:"Electrical Machines", name: "Electrical Machines"},
					{value:"Power Systems", name: "Power Systems"},
					{value:"Control Systems", name: "Control Systems"},
					{value:"Measurement", name: "Measurement"},
					{value:"Analog Circuits", name: "Analog Circuits"},
					{value:"Digital Electronics", name: "Digital Electronics"},
					{value:"Power Electronics", name: "Power Electronics"},
					{value:"Electromagnetic Theory", name: "Electromagnetic Theory"}
				],
				
				"CHE": [
					{name:"Process Calculations", value:"Process Calculations"},
					{name:"Thermodynamics", value:"Thermodynamics"},
					{name:"Fluid Mechanics", value:"Fluid Mechanics"},
					{name:"Mechanical Operations", value:"Mechanical Operations"},
					{name:"Heat Transfer", value:"Heat Transfer"},
					{name:"Mass Transfer", value:"Mass Transfer"},
					{name:"Chemical Reaction Eng", value:"Chemical Reaction Eng"},
					{name:"Instrumentation", value:"Instrumentation"},
					{name:"Process Control", value:"Process Control"},
					{name:"Plant Design & Economics", value:"Plant Design & Economics"},
					{name:"Chemical Technology", value:"Chemical Technology"}
					
				],
				
				"IE": [
					{name:"Network Theory", value:"Network Theory"},
					{name:"Instrumentation", value:"Instrumentation"},
					{name:"Ananalog Electronics", value:"Ananalog Electronics"},
					{name:"Signal & System", value:"Signal & System"},
					{name:"Communication Sys", value:"Communication Sys"},
					{name:"Contorl System", value:"Contorl System"},
					{name:"Process Control", value:"Process Control"},
					{name:"Digital Electronics", value:"Digital Electronics"},
					{name:"Measurement", value:"Measurement"},
					{name:"Optical Instrumentation", value:"Optical Instrumentation"}
				],
				
				"IT": [
					{value:"Artificial Intelligence", name:"Artificial Intelligence"},
					{value:"Computer Architecture", name:"Computer Architecture"},
					{value:"Prog & Data Structures", name:"Prog & Data Structures"},
					{value:"Algorithms", name:"Algorithms"},
					{value:"Compiler Design", name:"Compiler Design"},
					{value:"Operating Systems", name:"Operating Systems"},
					{value:"Databases", name:"Databases"},
					{value:"Computer Networks", name:"Computer Networks"},
					{value:"Information Management", name:"Information Management"},
					{value:"Web Systems", name:"Web Systems"},
					{value:"Grid & Cloud Comput", name:"Grid & Cloud Comput"}
					
					
				],
				
				"BCOM": [
					{value:"Accounting", name:"Accounting"},
					{value:"Economics", name:"Economics"},
					{value:"Business & Corporate Law", name:"Business & Corporate Law"},
					{value:"Business Management", name:"Business Management"},
					{value:"Auditing", name:"Auditing"},
					{value:"Environmental Studies", name:"Environmental Studies"},
					{value:"Entrepreneurship", name:"Entrepreneurship"},
					{value:"Taxation", name:"Taxation"},
					{value:"Marketing", name:"Marketing"},
					{value:"Statistics", name:"Statistics"},
					{value:"Mathematics", name:"Mathematics"},
					{value:"Programming", name:"Programming"},
					{value:"Computer Application", name:"Computer Application"},
					{value:"Web Development", name:"Web Development"},
					{value:"Data Base Management", name:"Data Base Management"}
				]
			}
			
		}

export const iconList = {
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

export const visualresumedata = {
	layout: {
    sequence: ["userInfo",
    "personalInfo",
    "profileSummaryInfo",
    "educationInfo",
    "projectsInfo",
		"workexpInfo",
    "techSkillsInfo",
		"areaOfIntrestInfo",
    "achievmentsInfo",
    "hobbiesInfo"],
    sequencelr: {
    left: ["userInfo",
    "personalInfo",
    "profileSummaryInfo",
    "techSkillsInfo",
    "hobbiesInfo"],
    
    right: [
    "educationInfo",
		"projectsInfo",
    "workexpInfo",
		"areaOfIntrestInfo",
    "achievmentsInfo"
    ]
                     },
    list: ["userInfoDisplay", 
					 "personalInfoDisplay", 
					 "profileSummaryInfoDisplay", 
					 "educationInfoDisplay", 
					 "projectsInfoDisplay",
					 "workexpInfoDisplay", 
					 "techSkillsInfoDisplay", 
					 "areaOfIntrestInfoDisplay", 
					 "achievmentsInfoDisplay", 
					 "hobbiesInfoDisplay"],
    listLR: {
      left: ["userInfoDisplay", "personalInfoDisplay", "profileSummaryInfoDisplay", "techSkillsInfoDisplay", "hobbiesInfoDisplay"],
      right: ["educationInfoDisplay","projectsInfoDisplay", "workexpInfoDisplay", "areaOfIntrestInfoDisplay", "achievmentsInfoDisplay"]
    },
    display: {
      userInfo: true,
      personalInfo: true,
      profileSummaryInfo: true,
      educationInfo: true,
			projectsInfo: true,
      workexpInfo: true,
      techSkillsInfo: true,
   		areaOfIntrestInfo: true,
      achievmentsInfo: true,
      hobbiesInfo: true

    },

    classes: {
      userInfoClass: "btn btn-sm btn-success w-75 mt-2",
      personalInfoClass: "btn btn-sm btn-success w-75 mt-2",
      profileSummaryInfoClass: "btn btn-sm btn-success w-75 mt-2",
      educationInfoClass: "btn btn-sm btn-success w-75 mt-2",
			projectsInfoClass: "btn btn-sm btn-success w-75 mt-2",
      workexpInfoClass: "btn btn-sm btn-success w-75 mt-2",
      techSkillsInfoClass: "btn btn-sm btn-success w-75 mt-2",
   		areaOfIntrestInfoClass: "btn btn-sm btn-success w-75 mt-2",
      achievmentsInfoClass: "btn btn-sm btn-success w-75 mt-2",
      hobbiesInfoClass: "btn btn-sm btn-success w-75 mt-2"

    }
  },
	pesrsonalInformation: {
			title: "ABOUT ME",
			photoDisplay:true, 
      phone: "9xxxxxxxx9",
			phone2: "8xxxxxxxx8",
			phone2Option: false,
      designation:"Mxxxxxxxl Exxxxxxr",
      address:"BHOPAL, INDIA",
			addressFull: "MIG-15, Anandvihar Colony, Arera Border, Bhopal, MP, INDIA, 461003",
			addressDisplay: false,
      aboutMe: "To work in an organization where I can use my skills to achieve the organization objectives and get conductive environment to learn and grow."
    },
    educationalInformation: {
				title: "EDUCATION",
						value: [
					{
						optional: true,
						degree: "B.tech",
						college: "NIT Bhopal",
						year: "2009",
						cgpa: "7.8 CGPA",
						toggle: true
					},

					{
						optional: true,
						degree: "HSC",
						college: "MP Board",
						year: "2005",
						cgpa: "88%",
						toggle: true
					},

					{
						optional: true,
						degree: "SSC 10th",
						college: "MP Board",
						year: "2003",
						cgpa: "78%",
						toggle: true
					}
				],
        
      },
    projectInformation: {
				title: "PROJECTS",
				value: [
					{
						title: "TREADMIL BICYCLE",
						desc: "<p>Treadmill bicycle is a unique way of moving. In this project we made a prototype of a bicycle which gets the power not with pedal wheel but with the movement of treadmill belt when you walk on it.</p>",
					},
					{
						title: "Gear CAD Design",
						desc: "<p>Designed Gear Design in Pro-E, uing a parametric Model. <br> By using only two parameters, Module and No. of theeths a CAD model will be generated automatically.</p>"
					}
				]
        
      },
    trainingInformation: {
				title: "INDUSTRIAL EXPOSURE",
				value: [
					{
						type: "Industrial Training",
						org: "EICHER TRACTORS",
						startDate: "01/05/2015",
						endDate: "01/06/2015",
						desc: "<p>Unit of TAFE Motors and Tractor Ltd. Projects Handled: <p> 1. Rapid Entire Body Assessment (REBA) </p> <p>2. Hazard Identification and Risk Analysis (HIRA)</p>"
					},
					{
						type: "Industrial Training",
						org: "BHEL Bhopal",
						startDate: "01/07/2016",
						endDate: "01/07/2016",
						desc: "<p>Unit of Turbine Manufacturing.<br>Gained Knowledge on Manufacturing and Design process of Gas Turbine.</p>"
					}
				]
      },
    skills: {
				title: "SKILLS",
				value: [
					{
						value: "Pro-E",
						rating: "4"
					},
					{
						value: "AUTOCAD",
						rating: "4"
					},
					{
						value: "MS Office",
						rating: "3"
					},
					{
						value: "Good and Efficient learner",
						rating: "5"
					},
					{
						value: "Positive Attitude",
						rating: "5"
					}
				],
        skill1: "Pro-E",
        rating1: "4",
        skill2: "AUTOCAD",
        rating2: "4",
        skill3: "MS Office",
        rating3: "3",
        skill4: "Good and Efficient learner",
        rating4: "5",
        skill5: "Positive Attitude",
        rating5: "5",
        skill6: "Skill 6",
        rating6: "4",
        skill6Display: false,
        skill7: "Skill 7",
        rating7: "5",
        skill7Display: false
      },
      hobbies: {
				title: "HOBBIES",
				value: ["Tennis", "Running", "Playing Guitar"],
        hobby1: "Tennis",
        hobby2: "Running",
        hobby3: "Playing Guitar"
      },
    areaOfIntrest:{
				title: "AREA OF INTRESTS",
        area: "eng",
        area1: "ME",
        area1Topic: "Strength of Materials",
        area2: "ME",
        area2Topic: "Fluid Mechanics",
        area3: "ME",
        area3Topic: "Heat Tranfer",
        show: false
      },
    extraCurricular: {
				title: "EXTRA CURRICULAR",
				value: [
					"Qualified GATE 2018",
					"Won 3rd Prize in Debate Competition in College",
					"Active member of KD Food for Life a Non-profit Social organization"
				],
        extra1: "Qualified GATE 2018",
        extra2: "Won 3rd Prize in Debate Competition in College",
        extra3: "Active member of KD Food for Life a Non-profit Social organization",
        extra4: "",
        extra5: "",
        extra4Display: false,
        extra5Display: false
      },
	payment: {
		status: false,
		date: new Date()
	}
}