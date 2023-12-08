// let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1 - sayilar listesindeki her bir elemanın karesini yazdırınız.
// 2 - sayilar listesindeki hangi sayılar 5' in katıdır?
// 3 - sayilar listesindeki çift sayıların toplamını bulunuz.

// let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

// 4 - urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// 5 - urunler listesinde samsung geçen kaç ürün vardır ?

//     let ogrenciler = [
//         { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
//         { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
//         { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
//     ];

// 6 - ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
// 7 - tüm öğrencilerin not ortalaması kaçtır ?

let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

for (let i of sayilar) {
    console.log(Math.pow(i, 2));
}; //1, 25, 49, 225, 9, 625, 144, 576

let multiplesOf5 = [];
for (let i of sayilar) {
    if (i % 5 == 0) multiplesOf5.push(i)
}; // 5'in katı olan sayılar: 5, 15, 25

let evenNumsSum = 0;
for (let i of sayilar) {
    if (i % 2 == 0)
        evenNumsSum += i;
};// Çift sayıların toplamı: 36


let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

for (let i of urunler) {
    console.log(i.toLocaleUpperCase());
}; //IPHONE 12, SAMSUNG S22, IPHONE 13, SAMSUNG S23, SAMSUNG S20;

let counter = 0;
for (let i in urunler) {
    if (urunler[i].includes("samsung")) counter++;
}
console.log(counter); //samsung içeren ürünler: 3


let ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
];

let aveGrades = [];
let sumGrades = 0;
for (let i in ogrenciler) {
    for (let j of ogrenciler[i].notlar) {
        sumGrades += j;
    }
    let aveGrade = Math.floor(sumGrades / ogrenciler[i].notlar.length)
    console.log(aveGrade);
    aveGrade > 60 ? console.log("Başarılı") : console.log("Başarısız");
    aveGrades.push(aveGrade);
    sumGrades = 0;
}; // 63, Başarılı, 76, Başarılı, 30, Başarısız

let aveAllGrades;

for (let i of aveGrades) {
    sumGrades += i;
};
aveAllGrades = Math.floor(sumGrades / aveGrades.length);
console.log(aveAllGrades) // tüm öğrencilerin not ort: 56
