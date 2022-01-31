function timeWord(date){
// takes date and creates an hours and minutes variable notice where the split is.
 let hours = date.split(":")[0];
 let minutes = date.split(":")[1];

/* Word Bank. Num is a bank on numbers between 1-20. 
Tens is a bank on the first part of double digit numbers. 
nums[0] set to 12 Important to do to get 12 at hour 0 later. */
 let nums = [" ","one","two","three","four","five","six","seven", "eight","nine","ten","eleven", "tweleve","thirteen","fourteen","fifteen","sixteen","seventeen", "eightteen","nineteen","twenty"];
 nums[0] = "twelve";
 let tens = ["twenty","thirty","fourty","fifty"];
/* Split minutes in order to convert to word
   use ten to decide what double digit number needs to be used
   use single to decide what single digit number needs to be used
   
*/
 let ten = minutes.split("")[0]
 // because tens dont actually need to be used untill 20 subtract 2 from array length to match
 ten = tens[ten-2];

 let single = minutes.split("")[1];
 single = nums[single]
/* create a default value for minuteString and hourString that will return a string if all if statements below arent used.
   by setting the variables for these things here, it allows for me to call or maniuplate this variables later.

*/
 let minuteString = nums[parseInt(minutes)];
 let hourString = nums[parseInt(hours)];
 let string = "";

 /////////////////////////CONDITIONALS/////////////////////

 // Checks to see if hours is Greater than 12 if so hourString will convert to miltary time.
 // notice "nums[hours-12]"this takes a number greater than 12 and figures out what the word that needs to be used is
 if(hours >= 12){
    hourString = `${nums[hours-12]}`
    string += hourString + " ";   
}
// Checks minutes if greater than 20, will create a minuteString as a double digit number.
// Example: minutes =23 outcome should be twenty three   
if(minutes > 20){
    minuteString = `${ten}${single}`
    string += minuteString; 
}
// sets string after we understand the conditions of the inputed value. if no conditions are used, 
// you already have hourString and minuteString set. 
string = `${hourString} ${minuteString}`;
// if hours is greater then 12, add PM to the string otherwise add AM.
hours >= 12 ? string+= " PM" : string+= " AM"; 
//If string is "00:00" string needs to be midnight
if(parseInt(hours) === 0 && parseInt(minutes) === 0){
    string = "midnight";
    
}
//if string is "12:00" string needs to be noon
if(parseInt(hours) === 12 && parseInt(minutes) === 0){
    string = "noon";
    
}

console.log(string);
}



timeWord("23:55")