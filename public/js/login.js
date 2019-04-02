window.onload = function () {
    var logbutton = document.getElementByname('logbutton');
    logbutton.addEventListener('click', login);
    
    function login (e){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        if(email == "" && password == ""){
            e.preventDefault();
        } else {
            console.log("input valid");
            return true;
        }
    }
}