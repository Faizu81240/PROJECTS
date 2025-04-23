const apiKey = "AIzaSyC4O56uFVqCAfuhQ5Woj18IdMPyqhPd0hI"

const apiCall = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

document.getElementById("inputField").addEventListener("submit", async function(event){
    event.preventDefault();

    const inputBox = document.getElementById("inputBox")
    const promptUser = inputBox.value.trim();
    const contentTitle = document.getElementById("contentTitle");
    const conversation = document.getElementById("conversation");


    const inputBody ={
        contents: [ {parts: [ { text: `${promptUser}`} ]}]
    }

    if(!promptUser){
        alert("Enter a prompt");
    }
    else{
        console.log(promptUser);
        inputBox.value="";
        
        if(contentTitle) {
            contentTitle.remove();
            conversation.style.padding = "20px 0px 100px";
        }

        const inputContainer = document.getElementById("inputContainer");
        inputContainer.classList.add('inputBottom');

        function appendUserMessage(promptUser) {
            const userMessageDiv = document.createElement("div");
            userMessageDiv.className = "userPromptText";
            userMessageDiv.textContent = promptUser;
            conversation.appendChild(userMessageDiv);
            conversation.scrollTop = conversation.scrollHeight;
        }

        appendUserMessage(promptUser);
        
        const generateResponse = async () =>{
            try{
            const result = await fetch(apiCall,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(inputBody)
            });

            const data = await result.json();
            if(!result.ok){
                console.error(data);
            }
            // console.log(data);
            let outPut = data.candidates[0].content.parts[0].text.trim();
            console.log(outPut)
            
            function appendgptResponse(outPut) {

                const gptResponseDiv  = document.createElement("div");
                gptResponseDiv.className = "gptResponseText";
                
                gptResponseDiv.innerHTML = marked.parse(outPut);

                conversation.appendChild(gptResponseDiv);
                conversation.scrollTop = conversation.scrollHeight;
            }

            appendgptResponse(outPut);
        }
        catch(error){
            console.log("Error:", error);
        }
        };
        await generateResponse();
    }
}    
)