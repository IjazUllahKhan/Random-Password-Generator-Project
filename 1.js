const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector(".input")
const copyIconEl = document.querySelector(".fa-copy")
const alertcontainerEl = document.querySelector('.alert-container')
btnEl.addEventListener("click",()=>{
    createpassword()
})
copyIconEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
        alertcontainerEl.classList.remove("active")
        setTimeout(()=>{
            alertcontainerEl.classList.add("active")
        },2000)
    }

    
})
function createpassword(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890*&^%$#@!"
    let password = ""
    const length=13
    for(let i=1;i<=length;i++){
        randomNum = Math.floor(Math.random()*characters.length)
        password += characters.charAt(randomNum)
    }
    inputEl.value = password;
    alertcontainerEl.innerText = inputEl.value + " Copied!"
}
function copyPassword(){
    inputEl.select()
    navigator.clipboard.writeText(inputEl.value)
}