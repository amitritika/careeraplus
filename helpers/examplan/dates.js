export const dateObj = (date) =>{
  
  const dateObjVar = {};
  
  dateObjVar.day = date.getDay();
  dateObjVar.date = date.getDate(); 
  dateObjVar.month = date.getMonth();
  dateObjVar.year = date.getFullYear();
  return dateObjVar
  
}

