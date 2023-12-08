let number = prompt("Lütfen bir sayı giriniz:");

function getPrimeNums(num){
    let primeNumArr = [];
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j == 0 && i != j) {
               break;
            }else if( i % j == 0 && i==j ){
                primeNumArr.push(i);
            }
        };
    };
    console.log(primeNumArr);
};

getPrimeNums(number);


