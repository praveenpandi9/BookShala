function validun(){
    let nameReg  = /^[a-z\d_]{3,}@\w+(.com|.in|.org)$/;
    let  x;
    x = document.getElementById("username").value;
    if(nameReg.test(x))
    {
        document.getElementById("usrpara").innerHTML ="valid";
        console.log("valid input");
        
    }
    else
    {
        document.getElementById("usrpara").innerHTML ="invalid user name";
        document.getElementById("username").focus();
        console.log("invalid input");
    }
}
function validpswd(){
    let pswdReg = /^[a-zA-Z\d]{7,}$/ ;
    let  p = document.getElementById("password").value ;
    console.log("inside password validation")
    console.log(p);
    if(pswdReg.test(p))
    {
        document.getElementById("pswdpara").innerHTML ="valid";
        console.log("valid input");
    }
    else
    {
        document.getElementById("pswdpara").innerHTML ="invalid password ";
        document.getElementById("password").focus();
        console.log("invalid input");
    }
}
function hello( ){
    let  x ;
    x = document.getElementById("username").value;
    let y = localStorage.getItem(x);
    let o = JSON.parse(y);
    let  p = document.getElementById("password").value;
    try{
    if(o.password == p){
        alert("login successful");
    }
    else{
        alert("invalid password/username try again");
    }
    }
    catch (e){
        alert("invalid password/username try again");
    }

    }