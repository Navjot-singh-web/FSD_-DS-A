const Salary = (bs,b) =>{
    return bs+b;
}

function printsalary(clbk,bs,b,name){
    const res = clbk(bs,b);
    const fres = "Hi " + name + " Your total salary is : " + res;
    console.log(fres);
}

printsalary(Salary,50000,18000,"Navjot");