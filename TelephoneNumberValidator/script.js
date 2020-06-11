//Return true if the passed string looks like a valid US phone number
//values to be considered valid input:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

//constraint:
//validate or reject the US phone number based on any combination of the formats provided above. 
//The area code is required. If the country code is provided, you must confirm that the country code is 1


function telephoneCheck(str) {
    const regEx = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g; 
    return regEx.test(str);
  }
  
  telephoneCheck("555-555-5555");
  
  
  
  
  
  