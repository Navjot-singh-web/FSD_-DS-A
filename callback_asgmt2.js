function check(id1,id2,pass1, pass2){
if((id1 === id2) && (pass1 == pass2))
      return "Your user id and password is correct."
else 
    return "Your user id or password is not correct."
}

function combin(clbk,id2,pass2){
    const res = clbk(123,id2,"nav",pass2);
    console.log(res);
}

combin(check,12,"nav");