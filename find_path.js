
var obj = {
a: {

        b: {

            c: 12,

            j: false

        },

        k: null

    }

};



const findPath = function(object, path){
    const arr=path.split(".");
    const first=arr[0];
 if(!object.hasOwnProperty(first)){
      console.log("undefined");
     }
else{
    const obj1=object[first];
     arr.shift();
      let str;
      (arr.length==0)?console.log(obj1):(str=arr.join(".") ,findPath(obj1,str));

    }
};
console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
