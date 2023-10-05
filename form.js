let form1 = document.querySelector(".form1");
let name1 = document.querySelector(".name1");

let password1 = document.querySelector(".password1");
let email1 = document.querySelector(".email1");
let form2 = document.querySelector(".form2");
let name2 = document.querySelector(".name2");
let password2 = document.querySelector(".password2");

let value2,pasvalue2;

// let value = {
//     name1:"",
//     password1:"",
//     email1:""
// }

// localStorage.setItem("allFormData",JSON.stringify(value))
let names,password,email;
const localData= JSON.parse(localStorage.getItem("allFormData"))
const localpass= JSON.parse(localStorage.getItem("allFormpass"))
const localemail= JSON.parse(localStorage.getItem("allFormemail"))


form1?.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(names.length===0 || password.length===0 || email.length===0){
        alert("xanalari doldurun")
    }else{
        location.href="login.html"
        localStorage.setItem("allFormData",JSON.stringify(names))
        localStorage.setItem("allFormpass",JSON.stringify(password))
        localStorage.setItem("allFormemail",JSON.stringify(email))
        
    }
})

form2?.addEventListener("submit",(e)=>{
    e.preventDefault(value2,pasvalue2)

    if(value2.length===0 || pasvalue2.length===0 ){
        alert("xanalari doldurun")
    }else if(localData===value2 && localpass===pasvalue2){
        location.href="qey.html"
       
    }else if(names.length!==value2 || password.length!==pasvalue2){
        console.log("name ve sifre yanlisdir");
    }
    else{
       alert("xeta")
    }
})


name1?.addEventListener("input",(e)=>{
    names=e.target.value.trim()
})
password1?.addEventListener("input",(e)=>{
    password=e.target.value.trim()
})
email1?.addEventListener("input",(e)=>{
    email=e.target.value.trim()
})

name2?.addEventListener("input",(e)=>{
    value2=e.target.value.trim()
})

password2?.addEventListener("input",(e)=>{
    pasvalue2=e.target.value.trim()
})