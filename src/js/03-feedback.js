import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailFeild = form.querySelector("input");
const messageFeild = form.querySelector("textarea");
let feildsObject;

const userData = JSON.parse(localStorage.getItem("feedback-form-state"));


emailFeild.addEventListener("input", throttle(event => {
     feildsObject = {
         email: event.target.value.trim(),
         message: messageFeild.value.trim()
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feildsObject))
}, 500));



messageFeild.addEventListener("input", throttle(event => {
    feildsObject = { 
        //...feildsObject,
        email: emailFeild.value.trim(),
        message: event.target.value.trim()
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feildsObject))
}, 500));

if (userData) {
    emailFeild.value = userData.email;
    messageFeild.value = userData.message;
}
    



form.addEventListener("submit", event => {
    event.preventDefault();
    if (emailFeild.value !== "" && messageFeild.value !== "") {
        
        console.log(feildsObject);
        localStorage.removeItem("feedback-form-state");
    }
    else {
        alert("No Feild Should be Empty")
        return
    }
    event.target.reset();
    })
