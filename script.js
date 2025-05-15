document.addEventListener ("DOMContentLoaded" , function(){
const buybutton = document.querySelector(".buy-button button");
const followbutton = document.querySelector(".follow-button ");

if (buybutton){
    buybutton.addEventListener("click", function(){
        window.open("https://www.pespsi.com", "_blank");
    })
}

if (followbutton){
    followbutton.addEventListener("click", function(){
        alert ("Thanks for following pepsi ")


    })
}


})