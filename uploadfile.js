const orgupload=document.getElementById("orgupload");
const uploadbtn=document.getElementById("uploadbtn");
const html=document.getElementById("html"),
css=document.getElementById("css"),
javascript=document.getElementById("js");

orgupload.addEventListener("click",()=>{
    uploadbtn.click();
})
uploadbtn.addEventListener("change",()=>{
    const selectedFile=uploadbtn.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            if(fileContent){
                const fileName=selectedFile.name;
                const extension=fileName.split('.').pop().toLowerCase();
                if(extension==="html"){
                    html.value=fileContent
                }
                else if(extension==="css"){
                    css.value=fileContent
                }
                else if(extension==="js"){
                    javascript.value=fileContent
                }
                else{
                    alert("Unsupported File")
                }
            }
        }
        reader.readAsText(selectedFile);
        
    }
   
})