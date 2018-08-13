function evalid(){
    let nameReg  = /^[a-z\d_]{3,}@\w+(.com|.in|.org)$/;
    let  x;
    x = document.getElementById("emailid").value;
    if(nameReg.test(x))
    {
        document.getElementById("eidpara").innerHTML ="valid";
        console.log("valid input");
    }
    else
    {
        document.getElementById("eidpara").innerHTML ="invalid email ";
        document.getElementById("emailid").focus();
        console.log("invalid input");
    }
}
function pswdvalid(){
    console.log("in passwd");
    let  p = document.getElementById("pwd").value ;
    let  cp = document.getElementById("cpwd").value ;
    if(p == cp){
        document.getElementById("pwdpara").innerHTML ="matched";
        console.log("valid input");
    }
    else
    {
        document.getElementById("pwdpara").innerHTML =" doesnt match ";
        document.getElementById("cpwd").focus();
        console.log("invalid input");
    }
}
function success(){
    e=document.getElementById("emailid").value;
    p=document.getElementById("pwd").value;
    n=document.getElementById("name").value;
    ph=document.getElementById("phno").value;
    let myObj= {email : e,password:p,name:n,phoneno:ph};
    let o = JSON.stringify(myObj);
    console.log(o);
    localStorage.setItem(e,o);
    
}