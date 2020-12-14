let phone = navigator.userAgent.toLocaleLowerCase();
if(phone.includes("android")){
document.getElementById("nav1").style.display="none";
document.getElementById("nav2").style.display="none";
document.getElementById("main1").style.width="100%";
document.getElementById("main1").style.width =screen.width = "px";
document.getElementById("main1").style.position="unset";
document.getElementById("main1").style.height="2000px";
document.getElementById("h51").style.fontSize="18px";
document.getElementById("p121").style.fontSize="13";
}
else if(phone.includes("iphone")||phone.includes("ipad")||phone.includes("ipod")){
    document.getElementById("nav1").style.display="none";
    document.getElementById("nav2").style.display="none";
document.getElementById("main1").style.width="100%";
document.getElementById("main1").style.width =screen.width = "px";
document.getElementById("main1").style.position="unset";
document.getElementById("main1").style.height="1800px";
document.getElementById("h51").style.fontSize="18px";
document.getElementById("p121").style.fontSize="13";
}

