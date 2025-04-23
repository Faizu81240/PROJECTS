document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault();

    const emailId = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    if(emailId == "mohamedfaizal.22mc@kct.ac.in" && passWord == "Faizu@63741"){
        window.location.href = "chat.html";
    }
    else{
        alert("Enter the correct credentials");
    }
})