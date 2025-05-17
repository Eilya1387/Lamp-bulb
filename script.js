var bulb=document.getElementById("bulb");
var shadow=document.getElementById("shadow");
var master=document.getElementById("master");
a=true;
master.addEventListener("click",()=>{

if (a) {
    bulb.style.backgroundColor="rgba(0, 0, 0, 0)"
bulb.style.boxShadow="none"
shadow.style.visibility=" hidden"
a=false;
}else{
    bulb.style.backgroundColor="gold"
    bulb.style.boxShadow="5px 5px 80px gold,5px -5px 80px gold,-5px 5px 80px gold,-5px -5px 80px gold"
    shadow.style.visibility=" visible"  
    a=true;
}
})