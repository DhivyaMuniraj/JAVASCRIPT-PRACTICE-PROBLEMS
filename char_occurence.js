
    //1 approach
    //get an input
    //check the type of input
    //create a function
    //change the input to upper case
    //declare the empty object
    //split the input
    //run the loop
    //use conditional statement
    //check if the value is present if present just increase the count
    //or else add the current element to the obj
    //finally return the object


//     let input_string="mada m";
//     if(typeof(input_string)!=="string"){
//         console.log("Enter the valid input")
//     }
//     function string_occurence(input){
//     input=input.toUpperCase();
//     let occurence_obj={};
//     let split_string=input.split("");
//     for(let item of split_string){
//         if(item!==" "){
//     occurence_obj.hasOwnProperty(item)?occurence_obj[item]+=1:occurence_obj[item]=1;
//      }
//     }
//     return occurence_obj
// }
//  console.log(string_occurence(input_string));


//  2 reduce
    //    Get an input
    //    check the type of input
    //    create a function
    //    change the input to toUpperCase
    //    split the input
    //    use callback function inside reduce and get the occurence of character
    
 let input_string="a  b";
 if(typeof(input_string)!=="string"){
        console.log("Enter the valid input")
    }
    function string_occurence(input){
     input=input.toUpperCase();
     let result=input.split("").reduce((previous,current)=>{
       if(current!==" "){previous.hasOwnProperty(current)?previous[current]+=1:previous[current]=1;}
       return previous;
     
     },{})
    return result;
    }
console.log(string_occurence(input_string));
 
