let number = prompt("Lütfen dakika ve saniye olarak görmek istediğiniz sayıyı saniye cinsinden yazınız:");

function calculateTime(num){
    let min;
    let sec;
    let result;
    if (num % 60 == 0) {
        min = num / 60;
        console.log(result = "Sonuç: " + min + " dakika 0 saniye")
60    }else{
        min = Math.floor(num / 60); 
        sec = num % 60;
        console.log(result = "Sonuç: " + min + " dakika " + sec + " saniye")
    };
};

console.log("Girilen değer: " + number);
calculateTime(number);