document.getElementById("sign-btn").addEventListener("click", function(){
    
    const nameInput = document.getElementById("input-name");
    const name = nameInput.value ;
    console.log(name);

    
    const inputPass = document.getElementById("input-pass");
    const pass = inputPass.value ;
    console.log(pass);

    
    if(name == "admin" && pass == "admin123"){
        alert("Login Success");

        window.location.assign("home.html");  
    }
    
    else{
        alert("Login Failed");
        return;
    }
    

    


})