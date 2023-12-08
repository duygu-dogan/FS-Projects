// 1 - "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
// 2 - Dizi kaç elemanlıdır ?
// 3 - Dizinin ilk ve son elemanı nedir ?
// 4 - Elma dizinin bir elemanımıdır ?
// 5 - Kiraz meyvesini listenin sonuna ekleyiniz.
// 6 - Dizinin son 2 elemanını siliniz.
// 7 - Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
Öğrenci 2: Saliha Temel 2012 (80,80,90)
Öğrenci 3: Defne Küp 2009 (60,60,70)
*/

let arr = ["Elma", "Armut", "Muz", "Çilek"]; // 1)
console.log(arr.length); // 2) 4
console.log(arr[0]); // 3) Elma
console.log(arr[arr.length-1]); // 4) Çilek
console.log(arr.includes("Elma")); //5) true
arr.push("Kiraz");
console.log(arr); // 6) ['Elma', 'Armut', 'Muz', 'Çilek', 'Kiraz']

let student1 = ["Kemal Devrimdar", 2010, [70, 60, 80]];
let student2 = ["Saliha Temel", 2012, [80, 80, 90]];
let student3 = ["Defne Küp", 2009, [60, 60, 70]];

let students = [student1, student2, student3];
let ages = [];
const date = new Date();
const year = date.getFullYear();

for (let i = 0; i < students.length; i++) {
 let age = year-students[i][1] ;
    ages.push(age);
}
console.log(ages); // [13, 11, 14] öğrenci yaşları

let aveGrades = [];
let sum =0;
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i][2].length; j++) 
    {
       sum += students[i][2][j];
    }
    aveGrades.push(Math.floor(sum / 3));
    sum = 0;
};
console.log(aveGrades); //[70, 83, 63] not ortalamaları