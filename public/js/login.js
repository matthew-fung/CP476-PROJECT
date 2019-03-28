window.onload = function () {
    
    function login (e){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        if(email == "" && password == ""){
            e.preventDefault();
        } else {
            console.log("input valid");
        }
    }
}