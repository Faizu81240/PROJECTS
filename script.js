document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault();

    const emailId = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    if(emailId == "Guest@AI" && passWord == "Guest@AI"){
        window.location.href = "chat.html";
    }
    else{
        alert("Enter the correct credentials");
    }
})
