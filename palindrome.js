/**
 To check whether a string is palindrome or not.
 example:
 (reversing the string and checking it perfect match or not)
 1."RAR"=="RAR"
 2."RAA"!="AAR"
  example 1 is palindrome.
 
 */
function palindrome(str) {
    // Good luck!
      var i,f=0;
    str=str.replace(/[^1a-zA-Z ]/g,'');
    str=str.replace(/\s/g,'');
    str=str.toLowerCase();
    for (i=0;i<str.length;i++)
  
    {
      if(str[i]!=str[str.length-i-1])
      {
        f=1;
        break;
      }
    }
    console.log(str); 
    if(f)
    {
      return false;
    }
    else{
      return true;
    } 
  
    
  }