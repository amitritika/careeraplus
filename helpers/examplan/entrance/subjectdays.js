import {calendarPrinting} from "./calendar"

export const subjectDaysObj = (subjectObj) =>{
  
  const subjectDaysObjVar = {};
  var totalDaysFinal = ((subjectObj.endDate-subjectObj.startDate)/(1000*60*60*24)) + 1;
	var totalVacationDays = 0;
	if(subjectObj.vacation){
		totalVacationDays = ((subjectObj.endDateVac-subjectObj.startDateVac)/(1000*60*60*24)) + 1
	} 
	
	
	const totalDays = totalDaysFinal - totalVacationDays;
  const mainCourseDays = mainCourse(totalDays, subjectObj.classSelected);
  const finalRevision1Days = finalRevision1(totalDays, subjectObj.classSelected);
  const backUpDays = buDays(totalDays, subjectObj.classSelected);
	let revision1Days = revision1(subjectObj.revision, subjectObj.class11.chapterTopicsName,subjectObj.class12.chapterTopicsName, subjectObj.classSelected);
	if(mainCourseDays <100){
		revision1Days.revisionDays = 0;
		revision1Days.revisionArr = [[0,0,0],[0,0,0]];
	}
  const mainSubjectsTotalDays = mainSubjectsTotal(totalDays, subjectObj.revision, revision1Days.revisionDays,subjectObj.classSelected);
	const mainSubjectsDays = mainSubjects(mainSubjectsTotalDays, revision1Days, subjectObj.classWeightage);
	var mc = mainCourseDays;
	var fr1 = 0;
	for (var i=0; i<2; i++){
		for(var j=0; j<3; j++){
			fr1 = fr1 + finalRevision1Days[i][j];
		}
	}
	
	var vc1 = 0;
	var z1 = 0;
	var z2 = 0;
	
	if(subjectObj.vacation)
	{
		vc1 = ((subjectObj.startDateVac-subjectObj.startDate)/(1000*60*60*24)) + 1;
		
		if(vc1 > mc)
		{
			z1 = mc;
			z2 = mc + fr1 + totalVacationDays;
		}
		else{
			z1 = mc + totalVacationDays;
			z2 = mc + fr1 + totalVacationDays;
		}
	}
	else{
		z1 = mc;
		z2 = mc + fr1;
	}
	
	
  subjectDaysObjVar.totalDaysFinal = totalDaysFinal;
	subjectDaysObjVar.totalDays = totalDays;
	subjectDaysObjVar.totalVacationDays = totalVacationDays;
  subjectDaysObjVar.mainCourseDays = mainCourseDays;
  subjectDaysObjVar.finalRevision1Days = finalRevision1Days;
	subjectDaysObjVar.backUpDays = backUpDays;
	subjectDaysObjVar.mainSubjectTotalDays = mainSubjectsTotalDays;
	subjectDaysObjVar.mainSubjectDays = mainSubjectsDays;
	subjectDaysObjVar.revision1Days = revision1Days;
  subjectDaysObjVar.revision = subjectObj.revision;
	subjectDaysObjVar.z1 = z1;
	subjectDaysObjVar.z2 = z2;
	
	const chapterWeightage = [subjectObj.class11.chapterWeightage, subjectObj.class12.chapterWeightage]
	const chapterName = [subjectObj.class11.chapterName, subjectObj.class12.chapterName]
	const chapterTopicsName = [subjectObj.class11.chapterTopicsName, subjectObj.class12.chapterTopicsName]
	const chapterTopicsWeightage = [subjectObj.class11.chapterTopicsWeightage, subjectObj.class12.chapterTopicsWeightage]
	subjectDaysObjVar.subjectDaysObjVar = subjectDaysCalculation(chapterName, chapterWeightage, mainSubjectsDays, revision1Days.revisionDays);
	subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachTopic = topicDaysCalculation(chapterName, subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachChapter, chapterTopicsName, chapterTopicsWeightage);
	
	subjectDaysObjVar.chapterNameMod = chapterNameMod(chapterName, subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachChapter);
	subjectDaysObjVar.chapterTopicsNameMod = chapterTopicsNameMod(chapterTopicsName, subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachTopic);
	var calendarObj = calendarPrinting(subjectDaysObjVar, subjectObj);
	
	//subjectDaysObjVar.calendar = calendarObj;
	
  return subjectDaysObjVar
  
}


function mainCourse(totalDays, classSelected){
	
	if(classSelected === 1 || classSelected === 0){
		if(totalDays >= 200){
		return totalDays - 30
		}
		else if(totalDays < 200 && totalDays >=100){
			return totalDays - 21
		}
		else if(totalDays < 100 && totalDays > 45){
			return totalDays - 15
		}
		else{
			return totalDays
		}
	}
	
	else{
		if(totalDays >= 200){
		return totalDays - 45
		}
		else if(totalDays < 200 && totalDays >=125){
			return totalDays - 30
		}
		else if(totalDays < 125 && totalDays >= 75){
			return totalDays - 21
		}
		else if(totalDays < 75 && totalDays > 45){
			return totalDays - 15
		}
		else{
			return totalDays
		}
	}
	

}

function finalRevision1(totalDays, classSelected)
{
	if(classSelected === 1 || classSelected === 0){
		if(classSelected === 0){
			if(totalDays >= 200){
				return [[10,10,10],[0,0,0]]
				}
				else if(totalDays < 200 && totalDays >=100){
					return [[7,7,7],[0,0,0]]
				}
				else if(totalDays < 100 && totalDays > 45){
					return [[5,5,5],[0,0,0]]
				}
				else{
					return [[0,0,0],[0,0,0]]
				}
		}
		else{
			if(totalDays >= 200){
				return [[0,0,0],[10,10,10]]
				}
				else if(totalDays < 200 && totalDays >=100){
					return [[0,0,0],[7,7,7]]
				}
				else if(totalDays < 100 && totalDays > 45){
					return [[0,0,0],[5,5,5]]
				}
				else{
					return [[0,0,0],[0,0,0]]
				}
		}
		
	}
	
	else{
		if(totalDays >= 200){
		return [[7,7,7],[8,8,8]]
		}
		else if(totalDays < 200 && totalDays >=125){
			return [[5,5,5],[5,5,5]]
		}
		else if(totalDays < 125 && totalDays >= 75){
			return [[3,3,3],[4,4,4]]
		}
		else if(totalDays < 75 && totalDays >= 45){
			return [[2,2,2],[3,3,3]]
		}
		else{
			return [[0,0,0],[0,0,0]]
		}
	}
}


function buDays(totalDays, classSelected)
{
	if (totalDays > 90)
	{
		return Math.floor(mainCourse(totalDays, classSelected) / 30);
	}
	else
	{
		return 0;
	}
}


function revision1(revision, class11, class12, classSelected)
{
	var count = 0;
	var count1 = 0;
	var i = 0;
	var j = 0;
	var l = 0;
	var m11 = 0;
	var p11 = 0;
	var c11 = 0;
	var m12 = 0; 
	var p12 = 0; 
	var c12 = 0;
	
	if(revision)
	{
		return {revisionArr: [[m11,p11,c11],[m12,p12,c12]],
				 revisionDays: count1};
	}
	else{
		if(classSelected === 0){
			for (i =0; i<3; i++){
				for (j =0; j<class11[i].length; j++){
					for (l =0; l<class11[i][j].length; l++){
						count++;
						count1++;
					}
				}
				if(i===0){
					m11 = count;
					count = 0;
				}
				else if(i === 1){
					p11 = count;
					count = 0;
				}
				else{
					c11 = count;
					count = 0;
				}
			}
		}
		else if(classSelected === 1){
			for (i =0; i<class12.length; i++){
				for (j =0; j<class12[i].length; j++){
					for (l =0; l<class12[i][j].length; l++){
						count++;
						count1++;
					}
				}
				if(i===0){
					m12 = count;
					count = 0;
				}
				else if(i === 1){
					p12 = count;
					count = 0;
				}
				else{
					c12 = count;
					count = 0;
				}
			}
		}
		else{
			for (i =0; i<class11.length; i++){
				for (j =0; j<class11[i].length; j++){
					for (l =0; l<class11[i][j].length; l++){
						count++;
						count1++;
					}
				}
				if(i===0){
					m11 = count;
					count = 0;
				}
				else if(i === 1){
					p11 = count;
					count = 0;
				}
				else{
					c11 = count;
					count = 0;
				}
			}
			for (i =0; i<class12.length; i++){
				for (j =0; j<class12[i].length; j++){
					for (l =0; l<class12[i][j].length; l++){
						count++;
						count1++;
					}
				}
				if(i===0){
					m12 = count;
					count = 0;
				}
				else if(i === 1){
					p12 = count;
					count = 0;
				}
				else{
					c12 = count;
					count = 0;
				}
			}
		}
	}
	return {revisionArr: [[m11,p11,c11],[m12,p12,c12]],
				 revisionDays: count1};
}

function mainSubjectsTotal(totalDays, revision, rev1, classSelected)
{
	if (revision)
	{
		return mainCourse(totalDays, classSelected) - buDays(totalDays, classSelected);
	}
	else{
		return mainCourse(totalDays, classSelected) - buDays(totalDays, classSelected) - rev1
	}
}

function mainSubjects(subDays, rev, classWeightage){
	var a = [[],[]];
	var rev1 = rev.revisionArr;
	var rev1TotalDays = rev.revisionDays;
	var subjectTotalDays = subDays + rev1TotalDays;
	var class11 = 0;
	var class12 = 0;
	var m11 = 0;
	var p11 = 0;
	var c11 = 0;
	var m12 = 0; 
	var p12 = 0; 
	var c12 = 0;

	class11 = Math.floor(subjectTotalDays*classWeightage[0]);
	class12 = subjectTotalDays - class11;

	m11 = class11 - 2 * Math.floor(class11/3) - rev1[0][0];
	p11 = Math.floor(class11/3) - rev1[0][1];
	c11 = Math.floor(class11/3) - rev1[0][2];

	m12 = class12 - 2 * Math.floor(class12/3) - rev1[1][0];
	p12 = Math.floor(class12/3) - rev1[1][1];
	c12 = Math.floor(class12/3) - rev1[1][2];
	a = [
		[m11, p11, c11],
		[m12, p12, c12]
	];
	return a;
	
}

function subjectDaysCalculation(chapterName, chapterWeightage, mainSubjectsDays, revision1Days){
	var k =0;
	var subjectDaysObjVar = {};
	var chapterSequence = [[[],[],[]], [[],[],[]]];
	var chapterSequenceRev = [[[],[],[]], [[],[],[]]];
	var numberOfDaysForEachChapter = [[[],[],[]], [[],[],[]]];
	var chapterDaysDif = [[[],[],[]], [[],[],[]]];
	var numberOfDaysForEachChapterRev1 = [[[],[],[]], [[],[],[]]];
	
	var chapterWeightage1 = chapterWeightage;
	
	var counterDays = 0;
	
	var i = 0;
	var j = 0;
	var l = 0;
	
	var i1 = 0;
	var j1 = 0;
	
	for(i = 0; i < 2; i++){
		for (j = 0; j < 3; j++){
			
			counterDays = 0;
			
			for (l = 0; l< chapterName[i][j].length; l++)
			{
				chapterSequence[i][j].push(l);
				chapterSequenceRev[i][j].push(l);

				numberOfDaysForEachChapter[i][j].push(Math.floor(mainSubjectsDays[i][j] * chapterWeightage[i][j][l]));
				chapterDaysDif[i][j].push(mainSubjectsDays[i][j] * chapterWeightage[i][j][l] - numberOfDaysForEachChapter[i][j][l]);

				counterDays = counterDays + numberOfDaysForEachChapter[i][j][l];
			}
			
			var difDays = mainSubjectsDays[i][j] - counterDays;
			var subjectDifMax = 0;
			
			for(i1 = 1; i1<=difDays; i1++){
				subjectDifMax = chapterDaysDif[i][j][0];
				k = 0;
				for (j1 =0; j1< chapterName[i][j].length; j1++)
				{
					if(chapterDaysDif[i][j][j1] > subjectDifMax)
					{
						subjectDifMax = chapterDaysDif[i][j][j1];
						k = j1;
					}
				}

				chapterDaysDif[i][j][k] = 0;
				numberOfDaysForEachChapter[i][j][k] = numberOfDaysForEachChapter[i][j][k] + 1;

			}
			
			k = 0;
			for(i1 = 0; i1< chapterName[i][j].length; i1++){
				subjectDifMax = chapterWeightage1[i][j][0];
				k = 0;
				for(j1 = 0; j1< chapterName[i][j].length; j1++){
					if (subjectDifMax < chapterWeightage1[i][j][j1])
					{
						subjectDifMax = chapterWeightage1[i][j][j1];
						k = j1;
					}
				}
				chapterSequenceRev[i][j][i1] = k;
				chapterWeightage1[i][j][k] = 0;
			}

			chapterSequence[i][j][chapterName[i][j].length] = chapterName[i][j].length;
			chapterSequenceRev[i][j][chapterName[i][j].length] = chapterName[i][j].length;
			chapterSequence[i][j][chapterName[i][j].length+1] = chapterName[i][j].length+1;
			chapterSequenceRev[i][j][chapterName[i][j].length+1] = chapterName[i][j].length+1;
			
			if(revision1Days< 0.5)
			{
				for(i1 = 0; i1< chapterName[i][j].length; i1++)
				{
					chapterSequence[i][j][i1]=chapterSequenceRev[i][j][i1];
				}
			}
		
		}
	}

	
	
	
	
	subjectDaysObjVar.sequence = chapterSequence;
	subjectDaysObjVar.sequenceRev = chapterSequenceRev;
	subjectDaysObjVar.numberOfDaysForEachChapter = numberOfDaysForEachChapter;
	
	return subjectDaysObjVar;
}


function topicDaysCalculation(chapterName, numberOfDaysForEachChapter, chapterTopicsName, chapterTopicsWeightage)
{
	var k = 0;
	var numberOfDaysForEachTopic = [[[],[],[]], [[],[],[]]];
	var topicDaysDif = [[[],[],[]], [[],[],[]]];
	var counterTopicsDays = [[[],[],[]], [[],[],[]]];
	var difTopicsDays = [[[],[],[]], [[],[],[]]];
	var subjectDifMax = 0;
	
	var i = 0;
	var j = 0;
	var l = 0;
	var m = 0;
	var l1 = 0;
	var i1 = 0;
	var j1 = 0;
	
	
	for(i = 0; i < 2; i++){
		for (j = 0; j < 3; j++){
			for (l =0; l<chapterName[i][j].length;l++)
			{
				numberOfDaysForEachTopic[i][j].push([]);
				topicDaysDif[i][j].push([]);
			}
		}
	}
	
	
	for(i = 0; i < 2; i++){
		for (j = 0; j < 3; j++){
			for(l = 0; l< chapterName[i][j].length ; l++)
			{
				counterTopicsDays[i][j][l] = 0;
				for (m = 0; m< chapterTopicsName[i][j][l].length; m++)
				{
					numberOfDaysForEachTopic[i][j][l][m] = Math.floor(numberOfDaysForEachChapter[i][j][l] * chapterTopicsWeightage[i][j][l][m]);
					topicDaysDif[i][j][l][m] = numberOfDaysForEachChapter[i][j][l] * chapterTopicsWeightage[i][j][l][m] - numberOfDaysForEachTopic[i][j][l][m];
					counterTopicsDays[i][j][l] = counterTopicsDays[i][j][l] + numberOfDaysForEachTopic[i][j][l][m];
				}
				difTopicsDays[i][j][l] = numberOfDaysForEachChapter[i][j][l] - counterTopicsDays[i][j][l];
			}
			
			for(l1 = 0; l1< chapterName[i][j].length; l1++){
				for(i1 = 1; i1<=difTopicsDays[i][j][l1]; i1++){
					subjectDifMax = topicDaysDif[i][j][l1][0];
					k = 0;
					for (j1 =0; j1< chapterTopicsName[i][j][l1].length; j1++)
					{
						if(topicDaysDif[i][j][l1][j1] > subjectDifMax)
						{
							subjectDifMax = topicDaysDif[i][j][l1][j1];
							k = j1;
						}
					}
					topicDaysDif[i][j][l1][k] = 0;
					numberOfDaysForEachTopic[i][j][l1][k] = numberOfDaysForEachTopic[i][j][l1][k] + 1;
				}
			}
		}
	}
	
	
	
	return numberOfDaysForEachTopic;
}

function chapterNameMod (chapterName, chapterDays){
	
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var l1 = 0;
	
	for (i=0; i<2; i++){
		for(j=0; j<3; j++){
			if(chapterName[i][j].length > 1){
				for(l=chapterName[i][j].length-1; l>=0; l--){
					if(chapterDays[i][j][l] === 0){
						if(l === 0 ){
							for(l1=0; l1<chapterName[i][j].length; l1++){
								if(chapterDays[i][j][l1] > 0){
									chapterName[i][j][l1] = chapterName[i][j][0];
									break;
								}
							}
						}
						else{
							chapterName[i][j][l-1] = chapterName[i][j][l-1] + "+" + chapterName[i][j][l];
						}
					}
				}
			}
		}
	}
	
	return chapterName;
}

function chapterTopicsNameMod (chapterTopicsName, chapterTopicsDays){
	
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var l1 = 0;
	
	for (i=0; i<2; i++){
		for(j=0; j<3; j++){
			for(k=0; k<chapterTopicsName[i][j].length; k++){
				if(chapterTopicsName[i][j][k].length > 1){
					for(l=chapterTopicsName[i][j][k].length-1; l>=0; l--){
						if(chapterTopicsDays[i][j][k][l] === 0){
							if(l === 0 ){
								for(l1=0; l1<chapterTopicsName[i][j][k].length; l1++){
									if(chapterTopicsDays[i][j][k][l1] > 0){
										chapterTopicsName[i][j][k][l1] = chapterTopicsName[i][j][k][0];
										break;
									}
								}
							}
							else{
								chapterTopicsName[i][j][k][l-1] = chapterTopicsName[i][j][k][l-1] + "+" + chapterTopicsName[i][j][k][l];
							}
						}
					}
				}
			}
		}
	}
	
	return chapterTopicsName;
}