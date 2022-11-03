<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    let input_string="hi dhivya"
//1 approach
// 1)Get the input
// 2)create the function to find longest string
// 3)split the string 
// 4)Declare the empty array
// 5)consider the first index of array is largest length
// 6)Run the for loop
// 7)Compare the length
// 8)If the length is greater than consider one push the element into the empty array and change the largest length
// 9)print the last element of the array


// function longestWord(input){
// let words = input.split(" ");
// var long_word = 0;
//  var arr=[];
// for(var i = 0; i < words.length; i++){
//    if(long_word < words[i].length){
//        long_word = words[i].length;
//        arr.push(words[i]);
//    }
// }
// return arr[arr.length-1]
// }
// console.log(longestWord(input_string));

//2 approach
//get the input
//create a function 
//split the string
//using sort function sort the array
//print the last index

// function longestWord(input){
// let words = input.split(" ");
// let result=words.sort(function(a,b){
//     return a.length-b.length;
// })
// return result[result.length-1]
// }
// console.log(longestWord(input_string));


//3 approach
// function longestWord(input){
// let result=input.split(" ").sort((a,b)=>a.length-b.length);
// return result[result.length-1]
// }
// console.log(longestWord(input_string));


//4 approach
 // get the input
 //create a function
 //split the string
 //declare empty object and initialize max to 0
 //check if the current string is present in object if not add the length
 //finally take the length and compare and return the max string
//  function longestWord(input) {
//     let splited_string= input.split(" ");
//     let obj = {}
//     let max = 0
//     let word = ""
//     for (let i of splited_string) {
//         if (obj.hasOwnProperty(i)) {
//             obj[i] = i.length;
//         }
//     }
//     for (let i in obj) {
//         if (obj[i] > max) {
//             word = i;
//         }
//     }
//     return(word);
// }

// console.log(longestWord(input_string));


//
// approach 5
// get an input
// create a function
// split the String
// store a first splited word in a variable
// run the loop
// compare length
// if current length is greater than previous length store the word 
// return the word
function longestWord(input){
    let splited_arr = str.split(" ");
    let long_string = splited_arr[0];
    for (let i of splited_arr){
        if(i.length > temp.length){
            long_string = i;
        }
    }
    return(long_string);
}

console.log(longestWord(input_string));

</script>
</html>
