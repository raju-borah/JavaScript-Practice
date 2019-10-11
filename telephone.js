// telephone number Validation check
function telephoneCheck(str) {
   let myregex=/^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$|^\d{10}$/; 
   if(myregex.test(str))
    return true;
  else
  return false;
  }
  
  telephoneCheck("555-555-5555");