/**
 To convert the decimal Number to roman number 
 
 */
var convertToRoman = function(num) {
    //storing the nums sets in roman and decimal
    var numSet = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanSet = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    // assigning a empty string
    var roman = '';
  
    for (let i = 0; i < numSet.length; i++) {
     
        while (num >=numSet[i]  ) {
        roman = roman + romanSet[i];
        num = num - numSet[i];
      }
    
    }
  
    return roman;
  }
  
  // test here
  convertToRoman(36);