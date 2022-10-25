

    var arr1=[1,2,3,4];
    var arr2=[1,2,6,8];
   
    var result=intersection(arr1,arr2);
    
    //function declaration
    function intersection(arr1,arr2){
       let element_arr=[];
    for(let i=0;i<arr1.length;i++){
         for(let j=0;j<arr2.length;j++){
            if(arr1[i]===(arr2[j])){
              element_arr.push(arr1[i]);
              break;
            }
        }
    }
    return element_arr;
}


console.log(result);


