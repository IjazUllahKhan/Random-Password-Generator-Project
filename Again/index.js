const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector(".input")
const copyIconEl = document.querySelector(".fa-copy")
const alertcontainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPassword()
})
copyIconEl.addEventListener("click",()=>{
    copyPassword()
    if(inputEl.value){
        alertcontainerEl.classList.remove("active")
        setTimeout(() => {
            alertcontainerEl.classList.add("active")
        }, 2000);
    }

})

function createPassword(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*&^%$$@!"
    let password = ""
    const lenght = 14;
    for(let i=1;i<=lenght;i++){
        randonNum = Math.floor(Math.random() *characters.length)
        password += characters.charAt(randonNum)
    }
    inputEl.value = password
    alertcontainerEl.innerText = password+" Copied!"
}

function copyPassword(){
    inputEl.select()
    navigator.clipboard.writeText(inputEl.value)
}