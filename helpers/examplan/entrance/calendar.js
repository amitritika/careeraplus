export const calendarPrinting = (subjectDays, subjectObj) =>
{
	var monthCounter = subjectObj.startDate.getMonth()+1;
	var yearCounter = subjectObj.startDate.getFullYear();
	var numberOfYears = subjectObj.endDate.getFullYear() - subjectObj.startDate.getFullYear();
	var numberOfMonths = 0;
	var numberOfDaysMonth = 0;
	var sheetName = "";
	var monthFirstDay;
	var dayCounter = 0;
	var dateCalendar = "";
	var startDateStr = new Date(subjectObj.startDate.getFullYear(), subjectObj.startDate.getMonth(), subjectObj.startDate.getDate());
	var endDateStr = new Date(subjectObj.endDate.getFullYear(), subjectObj.endDate.getMonth(), subjectObj.endDate.getDate());
	var startV1DateStr = subjectObj.startDateVac.getTime();
	var endV1DateStr = subjectObj.endDateVac.getTime();
	var dateCounter = 1;
	var endDatePlus;
	var pos1 =0;
	var pos2 = 0;
	var pos3 = 0;
  
  var months = [0,31,28,31,30,31,30,31,31,30,31,30,31];
  var monthName = ["0","January","Februray","March","April","May","June","July","August","September","October","November","December"];
  var weekDaysName = ["0", "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Staurday"];
	var subjectColor = ["rgb(221, 217, 196)","rgb(197, 217, 241)","rgb(242, 220, 219)","rgb(235, 241, 222)","rgb(228, 223, 236)","rgb(218, 238, 243)","rgb(253, 233, 217)","rgb(196, 189, 151)","rgb(141, 180, 226)","rgb(184, 204, 228)","rgb(230, 184, 183)","rgb(216, 228, 188)","rgb(204, 192, 218)","rgb(183, 222, 232)","rgb(252, 213, 180)","rgb(83, 141, 213)","rgb(149, 179, 215)","rgb(218, 150, 148)","rgb(196, 215, 155)","rgb(177, 160, 199)","rgb(146, 205, 220)","rgb(250, 191, 143)","rgb(217, 217, 217)","rgb(191, 191, 191)","rgb(255, 255, 255)"];

	var totalDaysCounter = 1;
	var subjectCounter = 0;
	var sumCounter = 0;
	var subjectTotalDays = 0;
	var topicCounter = 0;
	var topicDayCounter = 1;

	var monthDateFlag = false;
	var startDateFlag = false;
	var endDateFlag = true;
	var backupDayFlag = false;
	var vacationFlag = false;
	
	var rev = 0;
	if (subjectObj.revision1Days.revisionDays > 0){
		rev = 1;
	}
	
	let calendar = [];
	const a1 = [ [["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					  [["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
						[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]]
	];
	
	//console.log([calendar,a1]);

	if (numberOfYears === 0){
		numberOfMonths = (subjectObj.endDate.getMonth()+1) - (subjectObj.startDate.getMonth()+1) + 1;
	}
    else{
		numberOfMonths = 13 - (subjectObj.startDate.getMonth()+1) + (subjectObj.endDate.getMonth()+1) + 12 * (numberOfYears - 1);
	}
	
	
	for (var l =1; l<= numberOfMonths ; l++)
	{
		calendar.push([[],[ [["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					  [["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
						[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]],
					 	[["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1],["#495057","","","white",false, 1]]
	]]);
		//console.log([calendar,a1]);
	}
	
	
	for (l =1; l<= numberOfMonths ; l++)
	{
		
		calendar[l-1][0]= (monthName[monthCounter]).toString() + "-" + yearCounter.toString();
	
		if (leapyear(yearCounter))
		{
			months[2] = 29;
		}
		else
		{
			months[2] = 28;
		}
		monthFirstDay = new Date(yearCounter, monthCounter-1, 1);
		dayCounter = -monthFirstDay.getDay();
		if(dayCounter>0)
		{
			dayCounter = -6;
		}
		
		if (monthCounter === 1){
			dateCounter = months[12] + dayCounter + 1;
		}
		else{
			dateCounter = months[monthCounter - 1] + dayCounter + 1;
		}
		
		numberOfDaysMonth = months[monthCounter];
		
		
		for (var i =1; i<= 6 ; i++)
		{
			
			for (var j =1; j<= 7 ; j++)
			{
				
				
				
				if(dayCounter === 0){
					dateCounter = 1;
					dayCounter = -100;
					monthDateFlag = true;
					
				}
				
				
				
				if (monthCounter === 2){
					if (leapyear(yearCounter)){
						if (dateCounter === months[monthCounter] + 1 && dayCounter !== -2){
							dateCounter = 1;
							monthDateFlag = false;
						}
					}
					else{
						if (dateCounter === months[monthCounter] + 1 && dayCounter !== -3){ 
							dateCounter = 1;
							monthDateFlag = false;
						}
					}
				}
				else{
					if (dateCounter === months[monthCounter] + 1 && dayCounter !== -1) {
						dateCounter = 1;
						monthDateFlag = false;
					}
				}
				calendar[l-1][1][i-1][j-1][5] = dateCounter;
				
				//calendar[l-1][1][i-1][j-1][6] = dayCounter;
				//calendar[l-1][1][i-1][j-1][7] = l-1;
				//calendar[l-1][1][i-1][j-1][8] = i-1;
				//calendar[l-1][1][i-1][j-1][9] = j-1;
				
				
				if(dayCounter>-6){
					//console.log([calendar[l-1][1][i-1][j-1][5],l-1,i-1,j-1]);
				}
				//console.log(calendar);
				if (!monthDateFlag){
					calendar[l-1][1][i-1][j-1][0] = "#f1f1f1";
				}

				dateCalendar = new Date(yearCounter, monthCounter-1, dateCounter);
				//dateCounter.toString()+ "/"+monthCounter.toString()+ "/"+yearCounter.toString()
				if(dateCalendar.getTime() === startDateStr.getTime() && dayCounter < -6 && monthDateFlag)///try here  
				{
					startDateFlag = true;
					
					
				}


				if(dateCalendar.getTime() === startV1DateStr && dayCounter < -6 && monthDateFlag && subjectObj.vacation)
				{
					vacationFlag = true;
				}


				//Main Calendar Printing
				//console.log(endDateFlag);

				if(startDateFlag && endDateFlag && monthDateFlag)
				{
					
					if(totalDaysCounter<=subjectDays.z1)
					{
						

						if(subjectCounter === 0)
						{
							subjectTotalDays = subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]] + 
																 subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectRev1[subjectDays.subjectDaysObjVar.sequence[subjectCounter]];
						}
						else if(subjectCounter === subjectObj.subjectName.length){
							subjectTotalDays = subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectRev2[subjectDays.subjectDaysObjVar.sequence[subjectCounter-1]];
						}
						else
						{
							subjectTotalDays = subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]] + 
																 subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectRev1[subjectDays.subjectDaysObjVar.sequence[subjectCounter]] + 
																 subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectRev2[subjectDays.subjectDaysObjVar.sequence[subjectCounter-1]];
						}

						if (dateCounter === months[monthCounter] && subjectDays.backUpDays > 0 && !vacationFlag)
						{
							calendar[l-1][1][i-1][j-1][1] = "BACKUP";
							backupDayFlag = true;
							sumCounter++;

						}
						else
						{
							backupDayFlag = false;
						}

						if(vacationFlag)
						{
							calendar[l-1][1][i-1][j-1][1] = "VACATION";
							sumCounter++;
						}

						if(!vacationFlag && !backupDayFlag && totalDaysCounter > sumCounter && totalDaysCounter <= sumCounter + subjectTotalDays)
						{
							if (totalDaysCounter <= sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]]){
								
								calendar[l-1][1][i-1][j-1][3] = subjectColor[subjectDays.subjectDaysObjVar.sequence[subjectCounter]];
								calendar[l-1][1][i-1][j-1][1] = subjectObj.subjectName[subjectDays.subjectDaysObjVar.sequence[subjectCounter]];
								
								
								calendar[l-1][1][i-1][j-1][2] = subjectObj.subjectTopicsName[subjectDays.subjectDaysObjVar.sequence[subjectCounter]][topicCounter];
								
								topicDayCounter++;

								if(totalDaysCounter === sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]]){
									calendar[l-1][1][i-1][j-1][4] = true;

								}

								if (topicDayCounter > subjectDays.subjectDaysObjVar.numberOfDaysForEachTopic[subjectDays.subjectDaysObjVar.sequence[subjectCounter]][topicCounter]){
									topicCounter = topicCounter + 1;
                  topicDayCounter = 1;

								}
							}
							else if (totalDaysCounter > sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]] && totalDaysCounter <= sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubject[subjectDays.subjectDaysObjVar.sequence[subjectCounter]] + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectRev1[subjectDays.subjectDaysObjVar.sequence[subjectCounter]]){
							
								calendar[l-1][1][i-1][j-1][3] = subjectColor[subjectDays.subjectDaysObjVar.sequence[subjectCounter]];
								calendar[l-1][1][i-1][j-1][1] = subjectObj.subjectName[subjectDays.subjectDaysObjVar.sequence[subjectCounter]];
								
								calendar[l-1][1][i-1][j-1][2] = "Rev1";
								

							}
							else{
								
								calendar[l-1][1][i-1][j-1][3] = subjectColor[subjectDays.subjectDaysObjVar.sequence[subjectCounter-1]];
								calendar[l-1][1][i-1][j-1][1] = subjectObj.subjectName[subjectDays.subjectDaysObjVar.sequence[subjectCounter-1]];
								
								calendar[l-1][1][i-1][j-1][2] = "Rev2";
								


							}

							if (totalDaysCounter === sumCounter + subjectTotalDays){
								subjectCounter = subjectCounter + 1;
								sumCounter = sumCounter + subjectTotalDays;
								topicCounter = 0;
							}

						}


						if(totalDaysCounter === subjectDays.z1){
							sumCounter = subjectDays.z1;
							subjectCounter = 0;
						}

					}
					else if (totalDaysCounter <= subjectDays.z2 && totalDaysCounter > subjectDays.z1 && subjectDays.finalRevision1Days > 0)
					{
						
						if(vacationFlag)
						{
							
							calendar[l-1][1][i-1][j-1][1] = "VACATION";
							
							sumCounter++;
						}
						else
						{
							if(totalDaysCounter <= sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev1[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]]){
								
								calendar[l-1][1][i-1][j-1][3] = subjectColor[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];
								calendar[l-1][1][i-1][j-1][1] = subjectObj.subjectName[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];
								
								calendar[l-1][1][i-1][j-1][2] = "FinalRev1";
								

							}
							if(totalDaysCounter === sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev1[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]]){
								sumCounter = sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev1[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];
								subjectCounter = subjectCounter + 1;

							}
							if (totalDaysCounter === subjectDays.subjectDaysObjVar.z2){
								subjectCounter = 0;
                sumCounter = subjectDays.subjectDaysObjVar.z2;

							}

						}


					}
					else
					{
						if(totalDaysCounter <= subjectDays.subjectDaysObjVar.z3 && totalDaysCounter > subjectDays.subjectDaysObjVar.z2 && subjectDays.subjectDaysObjVar.finalRevision2Days > 0)
						{
							

							if(vacationFlag)
							{
								calendar[l-1][1][i-1][j-1][1] = "VACATION";
								sumCounter++;
							}
							else
							{
								if(totalDaysCounter <= sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev2[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]]){
									
									calendar[l-1][1][i-1][j-1][3] = subjectColor[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];
									calendar[l-1][1][i-1][j-1][1] = subjectObj.subjectName[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];

									calendar[l-1][1][i-1][j-1][2] = "FinalRev2";

								}
								if(totalDaysCounter === sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev2[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]]){
									sumCounter = sumCounter + subjectDays.subjectDaysObjVar.numberOfDaysForEachSubjectFinalRev2[subjectDays.subjectDaysObjVar.sequenceRev[subjectCounter]];
	                 subjectCounter = subjectCounter + 1;

								}
								if (totalDaysCounter === subjectDays.subjectDaysObjVar.z3){
									subjectCounter = 0;
	                sumCounter = subjectDays.subjectDaysObjVar.z3;

								}

							}

						}
					}

					totalDaysCounter++;
					
				}



				if(dateCalendar.getTime() === endDateStr.getTime() && dayCounter < -6 && monthDateFlag)
				{
					endDateFlag = false;
				}
				if(dateCalendar === endV1DateStr && dayCounter < -6 && monthDateFlag && subjectObj.vacation)
				{
					vacationFlag = false;
				}

				dateCounter = dateCounter + 1;
				dayCounter++;
			}
			
			
			
		}
		
		
		monthCounter = monthCounter + 1;
    
		if (monthCounter > 12){
			monthCounter = 1;
			yearCounter = yearCounter + 1;
		}
		
		
		
	}
	return calendarPrintingProps(calendar)
	
}

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


function calendarPrintingProps(calendar) {
	const properties = {
		monthName: [],
		bgColor: [],
		dates: [],
		dateColor:[],
		sub:[],
		topic: [],
		test: []
	};
	
	for (var l=0; l<calendar.length; l++){
		
		properties.monthName.push(calendar[l][0]);
		properties.bgColor[l] = [];
		properties.dates[l] = [];
		properties.dateColor[l] = [];
		properties.sub[l] = [];
		properties.topic[l] = [];
		properties.test[l] = [];
			
		for (var i=0; i<6; i++){
			properties.bgColor[l][i] = [];
			properties.dates[l][i] = [];
			properties.dateColor[l][i] = [];
			properties.sub[l][i] = [];
			properties.topic[l][i] = [];
			properties.test[l][i] = [];
			for (var j=0; j<7; j++){
				properties.bgColor[l][i][j] = calendar[l][1][i][j][3];
				properties.dates[l][i][j] = calendar[l][1][i][j][5];
				properties.dateColor[l][i][j] = calendar[l][1][i][j][0];
				properties.sub[l][i][j] = calendar[l][1][i][j][1];
				properties.topic[l][i][j] = calendar[l][1][i][j][2];
				properties.test[l][i][j] = calendar[l][1][i][j][4];
			}
		}
		
	}
	
	return properties
}