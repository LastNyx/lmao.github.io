function validasi(){
    var full=document.getElementById("full");
    var email=document.getElementById("email");
    var user=document.getElementById("user");
    var password=document.getElementById("password");
    var SEA=document.getElementById("SEA");
    var KRJP=document.getElementById("KRJP");
    var Europe=document.getElementById("Europe");
    var SouthAmerica=document.getElementById("SouthAmerica");
    var NorthAmerica=document.getElementById("NorthAmerica");

    if(full.value.length<4){
        alert("Fullname musty contains more than 4 characters");
    }
    else if(!email.value.endsWith("binus.ac.id")){
        alert("Your email don't required our permissions");
    }
    else if(!alnum(user.value)){
        alert("Username must contains alphabet and number only ");
    }
    else if(password.value.length < 8 || password.value.length > 16 ){
        alert("Password must contain between 8-16 characters");
    }
    else if(!SEA.checked&&!KRJP.checked&&!Europe.checked&&!SouthAmerica.checked&&!NorthAmerica.checked){
        alert("Region must be selected");
    }
    else{
        alert("YOU HAVE COMPLETED YOUR REGISTRATION");
    }
}


function alnum(user){
    var isLetter=false;
    var isNum=false;
    for(let k=0; k<user.length; k++){
    if(isNaN(user[k])){
        isLetter=true;
        }
        else{
            isNum=true;
        }
        if(isLetter&&isNum){
            return true;
        }       
    }
    return false;
}   
