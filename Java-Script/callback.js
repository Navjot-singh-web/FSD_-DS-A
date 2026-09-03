const sum = (a,b)=>{
 return a+b;
}

function sumwithMsg(clbk, msg){
    const result = clbk(20,30);
    const fresult = "Hi " + msg + "Your score is : "+ result;
    console.log(fresult); 
}

sumwithMsg(sum, "MR.Deepak");