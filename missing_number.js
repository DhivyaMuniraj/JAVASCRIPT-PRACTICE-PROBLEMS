function positive(input){
    let arr= input.sort(function(a, b){return a - b});
    for(let i = 0; i< arr.length; i++){
       if ( arr[i+1]-arr[i]!== 1 )
       {
        return (arr[i]+1);
        break;
       }
      }
  }
  input=[1,3,4]
  console.log(positive(input));