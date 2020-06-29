export const version1 = (data) => {
  data.payment =  {
		status: false,
		date: new Date()
	}
  
  data.personalInformation.phone2 =  {optional: false, value: "8xxxxxxxx8"}
  data.personalInformation.addressFull =  {optional: false, value: "MIG-15, Anandvihar Colony, Arera Border, Bhopal, MP, INDIA, 461003"};
  data.personalInformation.photoDisplay = true
return data;
}