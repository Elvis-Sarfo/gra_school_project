 function openNav(){
    document.querySelector("aside").style.left="0";
}



let icon =document.getElementById("icon");

icon.onclick = function(""){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="RemixIcon-2.5.0/icons/Weather/sun-line.svg";
    }
    else{
        icon.src="RemixIcon-2.5.0/icons/Weather/moon-line.svg";

    }
}
