function negative(arr){
    const positive=arr.filter(value => value>=0);
    const negative=arr.filter(value => value<0);
    return positive.concat(negative);
}


console.log(negative([1,-1,4,-9,-2,8]));