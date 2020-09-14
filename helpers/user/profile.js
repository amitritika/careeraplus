import dynamic from 'next/dynamic'
export const visualresumepath = {
  fresher: {
    template1 : {
      leftblock: "components/visualresume/fresher/template1/LeftBlock",
      rightblock: "components/visualresume/fresher/template1/RightBlock",
      resume: "components/visualresume/fresher/template1/Resume",
      componentSequence: "/home/cabox/workspace/frontend/helpers/visualresume/expert/template1/template1",
      bg: "rgb(1, 51, 66)",
      font: "rgb(75, 172, 198)",
    }
  },
  
  expert: {
    template1 : {
      leftblock: "components/visualresume/expert/template1/LeftBlock",
      rightblock: "components/visualresume/expert/template1/RightBlock",
      block: "components/visualresume/expert/template1/Block",
      resume: "components/visualresume/expert/template1/Resume",
      componentSequence: "helpers/visualresume/expert/template1/template1",
      bg: "rgb(1, 51, 66)",
      font: "rgb(75, 172, 198)",
    }
  },
}

export const comp = {
  fresher: {
    template1 : dynamic(() => import('../../components/visualresume/fresher/template1/Profile'))
  }
}