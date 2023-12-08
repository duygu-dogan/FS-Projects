let number = prompt("Lütfen 100'den büyük bir sayı giriniz: ")

while(number<=100){
    number = prompt("Girdiğiniz sayının 100'den büyük olması gerekmektedir. Lütfen tekrar sayı giriniz:");
    if(number > 100 || number == " ") break;
}