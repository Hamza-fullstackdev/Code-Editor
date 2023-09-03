function run(){
    const html=document.getElementById("html").value,
    css=document.getElementById("css").value,
    javascript=document.getElementById("js").value;
    let output=document.getElementById("output");
    
    output.contentDocument.body.innerHTML=html+"<style>"+css+"</style>";
    output.contentWindow.eval(javascript)
}




const hamburger=document.querySelector(".hamberger-menue");
const closebtn=document.getElementById("closebtn")
const navbar=document.querySelector(".navbar")
hamburger.addEventListener("click",()=>{
    navbar.style.left="0"
})
closebtn.addEventListener("click",()=>{
    navbar.style.left="-250px"
})