// Ödev - 10) 1 - Aşağıdaki sipariş bilgilerini object içerisinde saklayınız.
// 2 - Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: % 18)
// 3 - Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

let orderInfos = [
    order1 = {
    id: 101,
    date: "31.12.2022",
    type: "kredi kartı",
    address: "Yahya kaptan mah.Kocaeli İzmit",
    products: {
        product1: {
            pId: 5,
            pTitle: "IPhone 13 Pro",
            pUrl: "http://abc.com/iphone-13-pro",
            pPrice: 22000 },
        product2: {
            pId: 6,
            pTitle: "IPhone 13 Pro Max",
            pUrl: "http://abc.com/iphone-13-pro-max",
            pPrice: 25000 }
    },
    costumer: { customerId: 12},
    seller: {
        sellerId: 34,
        sellerName: "Apple Türkiye"
    }},
    order2 = {
        id: 102,
        date: "30.12.2022",
        type: "kredi kartı",
        address: "Yahya kaptan mah.Kocaeli İzmit",
        products: {
            product1: {
                pId: 6,
                pTitle: "IPhone 13 Pro Max",
                pUrl: "http://abc.com/iphone-13-pro-max",
                pPrice: 25000
            }
        },
        costumer: { customerId: 12 },
        seller: {
            sellerId: 34,
            sellerName: "Apple Türkiye"
        }
    }
];

let totalCost1 = (order1.products.product1.pPrice * 0.18) + order1.products.product1.pPrice; // ilk siparişin ilk ürününün toplam fiyatı: 25960;
let totalCost2 = (order1.products.product2.pPrice* 0.18) + order1.products.product2.pPrice; //ilk siparişin ikinci ürününün toplam fiyatı: 29500;
let totalCost3 = (order2.products.product1.pPrice * 0.18 ) + order2.products.product1.pPrice; //ilk siparişin ilk ürününün toplam fiyatı: 29500;
let totalCost = totalCost1 + totalCost2 + totalCost3; // siparişlerin toplam fiyatı: 84960;


