// url = "https://www.wissenakademie.com";
// dersAdi = "Fullstack Web Developer Eğitimi";
// -url kaç karakterlidir ?
//     -ders adı kaç kelimeden oluşmaktadır ?
//         -url https ile başlıyor mu ?
//             -ders adı içinde Eğitimi kelimesi geçiyor mu ?
//                 -url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
// https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi

let url = "https://www.wissenakademie.com";
let dersAdi = "Fullstack Web Developer Eğitimi";

console.log(url.length); //30;
console.log(dersAdi.split(" ").length); //4;
console.log(url.startsWith("https")); //true;
console.log(dersAdi.includes("Eğitimi")); //true;
let urlExt = dersAdi;
urlExt = urlExt.replace("Developer", "gelistirme").replaceAll(" ", "-").toLowerCase().replace("ğ", "g");
console.log(url.concat("/", urlExt));//https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi 

