
    let a=[ 1,2,1,7]
    let obj={};
    const target=9;
    for(let i=0;i<a.length;i++){
        let result=target-a[i];
        if(obj.hasOwnProperty(result)){
            console.log(true);
            break;
        }
        else{
            obj[a[i]]=a[i];
        }
    }

