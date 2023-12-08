let numbers = document.querySelector(".numbers");
let clearBtn = document.querySelector(".clear");
numbers = 0;


function changeNumber(n){
    numbers += n;
    document.querySelector(".numbers").innerHTML= numbers.toString();  
}

function clearNumber(){
    numbers = 0;
    document.querySelector(".numbers").innerHTML = "0";
}
