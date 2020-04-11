import Page1 from "../../components/visualresume/expert/template1/pages/Page1"
import Page2 from "../../components/visualresume/expert/template1/pages/Page2"
import Page3 from "../../components/visualresume/expert/template1/pages/Page3"
import Page4 from "../../components/visualresume/expert/template1/pages/Page4"
import Page5 from "../../components/visualresume/expert/template1/pages/Page5"
import LeftBlock from "../../components/visualresume/expert/template1/pages/LeftBlock"
import RightBlock from "../../components/visualresume/expert/template1/pages/RightBlock"
import Block from "../../components/visualresume/expert/template1/pages/Block"

export const visualresumedata = {

  layout: {
    list: ["userInfoDisplay", "personalInfoDisplay", "profileSummaryInfoDisplay", "workexpInfoDisplay"],
    display: {
      userInfo: true,
      personalInfo: true,
      profileSummaryInfo: true,
      workexpInfo: true,
      competenciesInfo: false,
      techSkillsInfo: false,
      toolSkillsInfo: false,
      progSkillsInfo: false,
      softSkillsInfo: false,
      projectsInfo: false,
      educationInfo: false,
      certificationInfo: false,
      achievmentsInfo: false,
      publicationInfo: false,
      areaOfIntrestInfo: false,
      hobbiesInfo: false

    },

    classes: {
      userInfoClass: "btn btn-lg btn-success w-75 mt-2",
      personalInfoClass: "btn btn-lg btn-success w-75 mt-2",
      profileSummaryInfoClass: "btn btn-lg btn-success w-75 mt-2",
      workexpInfoClass: "btn btn-lg btn-success w-75 mt-2",
      competenciesInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      techSkillsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      toolSkillsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      progSkillsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      softSkillsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      projectsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      educationInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      certificationInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      achievmentsInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      publicationInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      areaOfIntrestInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2",
      hobbiesInfoClass: "btn btn-lg btn-outline-primary w-75 mt-2"

    }
  },

  personalInformation: {
    phone: "9xxxxxxxx9",
    designation: "Mxxxxxxxl Exxxxxxr",
    address: "BHOPAL, INDIA",
    visa: {optional: true, value: "USA B1/B2"}
  },

  profileSummaryInformation: {title: "Profile Summary",
    value: "To work in an organization where I can use my skills to achieve the organization objectives and get conductive environment to learn and grow."},

  competenciesInformation: {title: "Competencies",
    value: ["Project Management", "Leadership", "Web Development", "SAP", "CFD", "Finite Element Analysis", "CAD Design", "Product Development"]},

  workexpInformation: {title: "Work Experience",
    value: [{
      org: "LENNOX",
      designation: "CFD LEAD",
      startDate: "Jun 2014",
      endDate: "Present",
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      org: "LARESEN & TUOBRO",
      designation: "Executive Design",
      startDate: "Dec 2010",
      endDate: "Jun 2012",
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      org: "BPCL",
      designation: "Executive Operations",
      startDate: "Jun 2009",
      endDate: "Dec 2010",
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]},

  techSkillsInformation: {title: "Technical Skills",
    value: [{
      value: "CFD",
      rating: "4"
    },
    {
      value: "Fluids Flow Analysis",
      rating: "5"
    },
    {
      value: "Heat Transfer",
      rating: "4"
    },
    {
      value: "Automation",
      rating: "5"
    }
  ]},

  toolSkillsInformation: {title: "Tools Skills",
    value: [{
      value: "Ansys",
      rating: "4"
    },
    {
      value: "Fluent",
      rating: "5"
    },
    {
      value: "Meshing",
      rating: "4"
    },
    {
      value: "Ansys Customization Tool",
      rating: "5"
    }
  ]},

  progSkillsInformation: {title: "Programming Skills",
    value: [{
      value: "C/C++",
      rating: "4"
    },
    {
      value: "Python",
      rating: "5"
    },
    {
      value: "Javascript",
      rating: "4"
    }
  ]},

  softSkillsInformation: {title: "Soft Skills",
    value: [{
      value: "Leadership",
      rating: "4"
    },
    {
      value: "Project Management",
      rating: "5"
    },
    {
      value: "Communication",
      rating: "4"
    }
  ]},
  projectsInformation: {
    title: "Projetcs",
    value: [
      {
        title: "Project 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        designation: {optional: true, value: "Engineer III"},
        client: {optional: true, value: "A1B1 Pvt Ltd"},
        date: {optional: true, startDate: "Dec 2019", endDate: "Present"}
      },
      
      {
        title: "Project 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        designation: {optional: true, value: "Engineer II"},
        client: {optional: true, value: "ABC Pvt Ltd"},
        date: {optional: true, startDate: "May 2019", endDate: "Dec 2019"}
      },
      
      {
        title: "Project 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        designation: {optional: true, value: "Engineer I"},
        client: {optional: true, value: "XYZ Pvt Ltd"},
        date: {optional: true, startDate: "May 2018", endDate: "May 2019"}
      }
      
    ]
  },
  
  educationInformation: {
    title: "Education",
    value: [
      {
        optional: true,
        degree: "M.tech",
        college: "IIT Bombay",
        year: "2014",
        cgpa: "9.2 CGPA"
      },
      
      {
        optional: false,
        degree: "B.tech",
        college: "NIT Bhopal",
        year: "2009",
        cgpa: "7.8 CGPA"
      },
      
      {
        optional: false,
        degree: "HSC 10+2",
        college: "MP Board",
        year: "2005",
        cgpa: "88%"
      }
    ]
  },
  
  certificationInformation: {
    title: "Certifications",
    value: [
      "Certified in Project Management Course from NPTEL",
      "Certified in Competent Communicator from Toastmaster",
      "Certified in  Lean Bronze from LENNOX"
    ]
  },
  
  achievmentsInformation: {
    title: "Achievements",
    value: [
      "Awarded for Best Project Awards in 2019",
      "Filed patent For Variable Plate in Blower",
      "Filed Two Trade secrets"
    ]
  },
  
  publicationInformation: {
    title: "Publications",
    value: [
      {
        name: "Parsai A.",
        title: "Novel CFD model in Volume of Fluid method",
        year: "2014",
        journal: "IIT Kanpur Yearly Conference",
        pages: ""
      },
      {
        name: "Parsai A. & Sharma V.",
        title: "SDWLS model applied in Shock Formulation",
        year: "2015",
        journal: "Journal of Computation Physics, 148",
        pages: "125-128"
      }
    ]
  },
  
  areaOfIntrestInformation: {
    title: "Area of Intrest",
    value: [
      {
        category: "engineering",
        stream: "ME",
        subject: "Fluid Mechanics"
      },
      
      {
        category: "engineering",
        stream: "ME",
        subject: "Heat Transfer"
      },
      
       {
        category: "management",
        stream: "project",
        subject: "Project Management"
      }
    ]
  },
  
  hobbiesInformation: {
    title: "Hobbies",
    value: ["Running", "Chess", "Guitar"]
  }
}