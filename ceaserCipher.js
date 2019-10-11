/**
 To convert a CIPHERTEXT to PLAINTEXT
 shift value is 13  
 */
function rot13(str) { // LBH QVQ VG!
  // creating an empty string 
  var plaintext="";
  
  for(var i=0;i<str.length;i++){
      // variable for storing ascii value
      var pascii=0;
      pascii=(str.charCodeAt(i));
    if(pascii>=65 && pascii<=77 ||pascii>=97 && pascii<=109)
		  {
        pascii=pascii+13;
      } 
    else if(pascii>=78 && pascii<=91 || pascii>=110 && pascii<=122) 
		    {
            pascii=pascii-13;
        }
        else{
          pascii=pascii;
        }
      plaintext=plaintext.concat(String.fromCharCode(pascii));
      }
       
    return {"CIPHERTEXT":str,"PLAINTEXT":plaintext};
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");