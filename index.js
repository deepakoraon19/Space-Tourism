document.querySelector(".dropdown").addEventListener("click",()=>{
    document.querySelector(".dropdown-content").style.visibility="visible";
    document.querySelector(".dropdown").style.visibility="hidden";
})
document.addEventListener("click", (evt)=>{
    if(evt.target.className!="dropdown"){
        document.querySelector(".dropdown-content").style.visibility="hidden";
    document.querySelector(".dropdown").style.visibility="visible";
    }
})



