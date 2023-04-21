function login(){
    if(document.login.Email.value==""){
        alert("Please provide your Email!");
        document.login.Email.focus();
        return false;
    }
    if(document.login.Password.value==""){
        alert("Please enter your Password!");
        document.login.Password.focus();
        return false;
    }
    return(true)
}