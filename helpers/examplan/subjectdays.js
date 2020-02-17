import {calendarPrinting} from "./calendar"

export const subjectDaysObj = (subjectObj) =>{
  
  const subjectDaysObjVar = {};
  var totalDaysFinal = ((subjectObj.endDate-subjectObj.startDate)/(1000*60*60*24)) + 1;
	var totalVacationDays = 0;
	if(subjectObj.vacation){
		totalVacationDays = ((subjectObj.endDateVac-subjectObj.startDateVac)/(1000*60*60*24)) + 1
	} 
	const totalDays = totalDaysFinal - totalVacationDays;
  const mainCourseDays = mainCourse(totalDays);
  const finalRevision1Days = finalRevision1(totalDays);
  const finalRevision2Days = finalRevision2(totalDays);
  const backUpDays = buDays(totalDays);
  const mainSubjectsDays = mainSubjects(totalDays, subjectObj.revision);
	const revision1Days = revision1(totalDays, subjectObj.revision);
	const revision2Days = revision2(totalDays, subjectObj.revision);
	
	var mc = mainCourseDays;
	var fr1 = finalRevision1Days;
	var fr2 = finalRevision2Days;
	var vc1 = 0;

	var z1 = 0;
	var z2 = 0;
	var z3 = 0;
	
	if(subjectObj.vacation)
	{
		vc1 = ((subjectObj.startDateVac-subjectObj.startDate)/(1000*60*60*24)) + 1;
		if (vc1 > mc+fr1)
		{
			z1 = mc;
			z2 = mc + fr1;
			z3 = mc + fr1 + fr2 + totalVacationDays;
		}
		else if(vc1 > mc && vc1 <= mc + fr1)
		{
			z1 = mc;
			z2 = mc + fr1 + totalVacationDays;
			z3 = mc + fr1 + fr2 + totalVacationDays;
		}
		else{
			z1 = mc + totalVacationDays;
			z2 = mc + fr1 + totalVacationDays;
			z3 = mc + fr1 + fr2 + totalVacationDays;
		}
	}
	else{
		z1 = mc;
		z2 = mc + fr1;
		z3 = mc + fr1 + fr2;
	}
	
	
  subjectDaysObjVar.totalDaysFinal = totalDaysFinal;
	subjectDaysObjVar.totalDays = totalDays;
	subjectDaysObjVar.totalVacationDays = totalVacationDays;
  subjectDaysObjVar.mainCourseDays = mainCourseDays;
  subjectDaysObjVar.finalRevision1Days = finalRevision1Days;
  subjectDaysObjVar.finalRevision2Days = finalRevision2Days;
	subjectDaysObjVar.backUpDays = backUpDays;
	subjectDaysObjVar.mainSubjectDays = mainSubjectsDays;
	subjectDaysObjVar.revision1Days = revision1Days;
	subjectDaysObjVar.revision2Days = revision2Days;
  subjectDaysObjVar.revision = subjectObj.revision;
	subjectDaysObjVar.z1 = z1;
	subjectDaysObjVar.z2 = z2;
	subjectDaysObjVar.z3 = z3;
	subjectDaysObjVar.subjectDaysObjVar = subjectDaysCalculation(subjectObj.subjectName, subjectObj.subjectWeightage, mainSubjectsDays, revision1Days, revision2Days, finalRevision1Days, finalRevision2Days);
	subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachTopic = topicDaysCalculation(subjectObj.subjectName, subjectDaysObjVar.subjectDaysObjVar.numberOfDaysForEachSubject, subjectObj.subjectTopicsName, subjectObj.subjectTopicsWeightage);
	
	
	var calendarObj = calendarPrinting(subjectDaysObjVar, subjectObj);
	
	subjectDaysObjVar.calendar = calendarObj;
	
  return subjectDaysObjVar
  
}


function mainCourse(totalDays){
	

	if(totalDays< 450 && totalDays > 70)
	{
		return Math.floor(totalDays*0.835);
	}
	else if(totalDays<70)
	{
		return totalDays;
	}
	else
	{
		return  Math.floor(totalDays*0.8);
	}
}

function finalRevision1(totalDays)
{
	if (totalDays < 450 && totalDays > 70)
	{
		return totalDays - Math.floor(totalDays * 0.835);
	}
	else if (totalDays < 70)
	{
		return 0;
	}
	else
	{
		return Math.floor(totalDays * 0.13);
	}
}

function finalRevision2(totalDays)
{
	if (totalDays < 450)
	{
		return 0;
	}
	else
	{
	 return totalDays - Math.floor(totalDays * 0.8) - Math.floor(totalDays * 0.13);
	}
}

function buDays(totalDays)
{
	if (totalDays > 90)
	{
		return Math.floor(mainCourse(totalDays) / 30);
	}
	else
	{
		return 0;
	}
}

function mainSubjects(totalDays, revision)
{
	if (revision)
	{
		return mainCourse(totalDays) - buDays(totalDays);
	}
	else{
		return Math.floor((mainCourse(totalDays) - buDays(totalDays)) * 0.7)
	}
}

function revision2(totalDays, revision){
	if(revision)
	{
		return 0;
	}
	else{
		return Math.floor((mainCourse(totalDays) - buDays(totalDays)) * 0.2);
	}

}

function revision1(totalDays, revision)
{
	if(revision)
	{
		return 0;
	}
	else{
		return mainCourse(totalDays) - buDays(totalDays) - mainSubjects(totalDays) - revision2(totalDays);
	}
}

function subjectDaysCalculation(subjectName, subjectWeightage, mainSubjectsDays, revision1Days, revision2Days, finalRevision1Days, finalRevision2Days){
	var k =0;
	var subjectDaysObjVar = {};
	var sequence = [];
	var sequenceRev = [];
	var numberOfDaysForEachSubject = [];
	var subjectDaysDif = [];
	var numberOfDaysForEachSubjectRev1 = [];
	var subjectDaysDifRev1 = [];
	var numberOfDaysForEachSubjectRev2 = [];
	var subjectDaysDifRev2 =[];
	var numberOfDaysForEachSubjectFinalRev1 = [];
	var subjectDaysDifFinalRev1 = [];
	var numberOfDaysForEachSubjectFinalRev2 = [];
	var subjectDaysDifFinalRev2 = [];
	var subjectWeightage1 = subjectWeightage;
	
	var counterDays = 0;
	var counterRev1 = 0;
	var counterRev2 = 0;
	var counterFinalRev1 = 0;
	var counterFinalRev2 = 0;

	for (var i = 0; i< subjectName.length; i++)
	{
		sequence.push(i);
		sequenceRev.push(i);
		
		numberOfDaysForEachSubject.push(Math.floor(mainSubjectsDays * subjectWeightage[i]));
		subjectDaysDif.push(mainSubjectsDays * subjectWeightage[i] - numberOfDaysForEachSubject[i]);
		
		numberOfDaysForEachSubjectRev1[i] = Math.floor(revision1Days * subjectWeightage[i]);
		subjectDaysDifRev1[i] = revision1Days * subjectWeightage[i] - numberOfDaysForEachSubjectRev1[i];
    
		numberOfDaysForEachSubjectRev2[i] = Math.floor(revision2Days * subjectWeightage[i]);
		subjectDaysDifRev2[i] = revision2Days * subjectWeightage[i] - numberOfDaysForEachSubjectRev2[i];
		
		numberOfDaysForEachSubjectFinalRev1[i] = Math.floor(finalRevision1Days * subjectWeightage[i]);
		subjectDaysDifFinalRev1[i] = finalRevision1Days * subjectWeightage[i] - numberOfDaysForEachSubjectFinalRev1[i];
		
		numberOfDaysForEachSubjectFinalRev2[i] = Math.floor(finalRevision2Days * subjectWeightage[i]);
		subjectDaysDifFinalRev2[i] = finalRevision2Days * subjectWeightage[i] - numberOfDaysForEachSubjectFinalRev2[i];
		
		counterDays = counterDays + numberOfDaysForEachSubject[i];
		counterRev1 = counterRev1 + numberOfDaysForEachSubjectRev1[i];
		counterRev2 = counterRev2 + numberOfDaysForEachSubjectRev2[i];
		counterFinalRev1 = counterFinalRev1 + numberOfDaysForEachSubjectFinalRev1[i];
		counterFinalRev2 = counterFinalRev2 + numberOfDaysForEachSubjectFinalRev2[i];
	}
	
	var difDays = mainSubjectsDays - counterDays;
	var difRev1 = revision1Days - counterRev1;
	var difRev2 = revision2Days - counterRev2;
	var difFinalRev1 = finalRevision1Days - counterFinalRev1;
	var difFinalRev2 = finalRevision2Days - counterFinalRev2;
	var subjectDifMax = 0;
	
	for(i = 1; i<=difDays; i++){
		subjectDifMax = subjectDaysDif[0];
		k = 0;
		for (var j =0; j< subjectName.length; j++)
		{
			if(subjectDaysDif[j] > subjectDifMax)
			{
				subjectDifMax = subjectDaysDif[j];
				k = j;
			}
		}
		
		subjectDaysDif[k] = 0;
		numberOfDaysForEachSubject[k] = numberOfDaysForEachSubject[k] + 1;
		
	}
	
	for(i = 1; i<=difRev1; i++){
		subjectDifMax = subjectDaysDifRev1[0];
		k = 0;
		for (j = 0; j< subjectName.length; j++)
		{
			if(subjectDaysDifRev1[j] > subjectDifMax)
			{
				subjectDifMax = subjectDaysDifRev1[j];
				k = j;
			}
		}
		subjectDaysDifRev1[k] = 0;
		numberOfDaysForEachSubjectRev1[k] = numberOfDaysForEachSubjectRev1[k] + 1;
	}
	
	for(i = 1; i<=difRev2; i++){
		subjectDifMax = subjectDaysDifRev2[0];
		k = 0;
		for (var j =0; j< subjectName.length; j++)
		{
			if(subjectDaysDifRev2[j] > subjectDifMax)
			{
				subjectDifMax = subjectDaysDifRev2[j];
				k = j;
			}
		}
		subjectDaysDifRev2[k] = 0;
		numberOfDaysForEachSubjectRev2[k] = numberOfDaysForEachSubjectRev2[k] + 1;
	}
	
	for(i = 1; i<=difFinalRev1; i++){
		subjectDifMax = subjectDaysDifFinalRev1[0];
		k = 0;
		for (j =0; j< subjectName.length; j++)
		{
			if(subjectDaysDifFinalRev1[j] > subjectDifMax)
			{
				subjectDifMax = subjectDaysDifFinalRev1[j];
				k = j;
			}
		}
		subjectDaysDifFinalRev1[k] = 0;
		numberOfDaysForEachSubjectFinalRev1[k] = numberOfDaysForEachSubjectFinalRev1[k] + 1;
	}
	
	for(i = 1; i<=difFinalRev2; i++){
		subjectDifMax = subjectDaysDifFinalRev2[0];
		k = 0;
		for (j =0; j< subjectName.length; j++)
		{
			if(subjectDaysDifFinalRev2[j] > subjectDifMax)
			{
				subjectDifMax = subjectDaysDifFinalRev2[j];
				k = j;
			}
		}
		subjectDaysDifFinalRev2[k] = 0;
		numberOfDaysForEachSubjectFinalRev2[k] = numberOfDaysForEachSubjectFinalRev2[k] + 1;
	}
	
	k = 0;
	for(i = 0; i< subjectName.length; i++){
		subjectDifMax = subjectWeightage1[0];
		k = 0;
		for(j = 0; j< subjectName.length; j++){
			if (subjectDifMax < subjectWeightage1[j])
			{
				subjectDifMax = subjectWeightage1[j];
				k = j;
			}
		}
		sequenceRev[i] = k;
		subjectWeightage1[k] = 0;
	}
	
	sequence[subjectName.length] = subjectName.length;
	sequenceRev[subjectName.length] = subjectName.length;
	sequence[subjectName.length+1] = subjectName.length+1;
	sequenceRev[subjectName.length+1] = subjectName.length+1;
	
	if(revision1Days< 0.5)
	{
		for(var i = 0; i< subjectName.length; i++)
		{
			sequence[i]=sequenceRev[i];
		}
	}
	
	subjectDaysObjVar.sequence = sequence;
	subjectDaysObjVar.sequenceRev = sequenceRev;
	subjectDaysObjVar.numberOfDaysForEachSubject = numberOfDaysForEachSubject;
	subjectDaysObjVar.numberOfDaysForEachSubjectRev1 = numberOfDaysForEachSubjectRev1;
	subjectDaysObjVar.numberOfDaysForEachSubjectRev2 = numberOfDaysForEachSubjectRev2;
	subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev1 = numberOfDaysForEachSubjectFinalRev1
	subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev2 = numberOfDaysForEachSubjectFinalRev2
	
	return subjectDaysObjVar;
}


function topicDaysCalculation(subjectName, numberOfDaysForEachSubject, subjectTopicsName, subjectTopicsWeightage)
{
	var k = 0;
	var numberOfDaysForEachTopic = [];
	var topicDaysDif = [];
	var counterTopicsDays = [];
	var difTopicsDays = [];
	var subjectDifMax = 0;
	for (var i =0; i<subjectName.length;i++)
	{
		numberOfDaysForEachTopic.push([]);
		topicDaysDif.push([]);
	}
	for(var i = 0; i< subjectName.length ; i++)
	{
		counterTopicsDays[i] = 0;
		for (var j = 0; j< subjectTopicsName[i].length; j++)
		{
			numberOfDaysForEachTopic[i][j] = Math.floor(numberOfDaysForEachSubject[i] * subjectTopicsWeightage[i][j]);
			topicDaysDif[i][j] = numberOfDaysForEachSubject[i] * subjectTopicsWeightage[i][j] - numberOfDaysForEachTopic[i][j];
			counterTopicsDays[i] = counterTopicsDays[i] + numberOfDaysForEachTopic[i][j];
		}
		difTopicsDays[i] = numberOfDaysForEachSubject[i] - counterTopicsDays[i];
	}
	
	for(var l = 0; l< subjectName.length; l++){
		for(var i = 1; i<=difTopicsDays[l]; i++){
			subjectDifMax = topicDaysDif[l][0];
			k = 0;
			for (var j =0; j< subjectTopicsName[l].length; j++)
			{
				if(topicDaysDif[l][j] > subjectDifMax)
				{
					subjectDifMax = topicDaysDif[l][j];
					k = j;
				}
			}
			topicDaysDif[l][k] = 0;
			numberOfDaysForEachTopic[l][k] = numberOfDaysForEachTopic[l][k] + 1;
		}
	}
	
	return numberOfDaysForEachTopic;
}