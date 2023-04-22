function validation(){
    var name = document.getElementById("un").value;
    var msg1 = document.getElementById("msg1");

    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var msg2 = document.getElementById("msg2");
    var msg3 = document.getElementById("msg3");

    var email = document.getElementById("email").value;
    var msg4 = document.getElementById("msg4");

    var mob = document.getElementById("mob").value;
    var msg5 = document.getElementById("msg5");
    

    if(name.length==0){
        msg1.innerHTML="*Name can't be empty";
        return false;
    }
    if(name.length<=2){
        msg1.innerHTML="*name should contain more than 2 character";
        return false;
    }
  
    for(let i = 0;i < name.length ;i++){
        if((name.charAt(i)>='a' && name.charAt(i)<='z') || (name.charAt(i)>='A' && name.charAt(i)<='Z') ){
            continue;
        }else{
            msg1.innerHTML = "*username should only contain alphabet";
            return false;
        }
    }
   
    msg1.innerHTML = "";

    if(pass1.length == 0){
        msg2.innerHTML="*password can't be empty";
        return false;
    }

    msg2.innerHTML = "";

    if(pass1 != pass2){
        msg3.innerHTML = "*password doesn't match";
        return false;
    }

    msg3.innerHTML = "";

    if(email.indexOf('@')==0){
        msg4.innerHTML = "*email should contain alphabet before @";
        return  false;
    }

    if(email.indexOf('@')==-1){
        msg4.innerHTML = "*email should contain @";
        return false;
    }

    if(email.indexOf('@gmail.com')==-1){
        msg4.innerHTML = "*@gmail.com is missing";
        return false;
    }

    msg4.innerHTML = "";

    for(let i = 0;i < mob.length ;i++){
        if(mob.charAt(i)>='0' && mob.charAt(i)<='9'){
            continue;
        }else{
            msg5.innerHTML = "*number should only contain digits";
            return false;
        }
    }

    if(mob.length <= 8 || mob.length>=12){
        msg5.innerHTML = "number of digit should be 8 to 12 digits";
        return false;
    }
    
    msg5.innerHTML = "";

    
}