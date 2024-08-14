let submissionButton = document.querySelector(".submit_btn");
let email_input = document.querySelector(".email_submit");
let doesHaveAtSymbol;
let returnStatus = document.querySelector("#return_status");
let textContent = document.querySelector(".text_content");
let wrapper = document.querySelector(".wrapper");
let subscribeSuccessScreen = document.querySelector(".subscribe_success_screen");
let subscribeSuccessText = document.querySelector("#confirmationText");
let rightPicture = document.querySelector(".right_text_content");

const submit = () => {
    let emailContent = document.querySelector(".email_submit");
    var emailArray = emailContent.value.split("");

    for (let x = 0; x < emailArray.length; x++) {
        if(emailArray[x] == "@" && x > 5)
            doesHaveAtSymbol = true
    }
    if(doesHaveAtSymbol){
        emailContent.style.borderColor = "#111";
        emailContent.style.color = "#111";
        textContent.style.display = "none";
        
        wrapper.style.width = "310px"
        wrapper.style.height = "310px"
        subscribeSuccessText.textContent = `A confirmation email has been sent to ${emailContent.value}. Please open it and click the button inside to confirm your subscription`;
        subscribeSuccessScreen.style.display = "block"
        rightPicture.style.display = "none";
    }
    else {
    
        emailContent.style.borderColor = "red";
        emailContent.style.color = "red";
        email_input.style.backgroundColor = "rgb(243, 104, 104)";
        returnStatus.style.display = "block";
        returnStatus.style.color = "red";
    }
    emailContent.value = null;
}


submissionButton.addEventListener("click", submit);

