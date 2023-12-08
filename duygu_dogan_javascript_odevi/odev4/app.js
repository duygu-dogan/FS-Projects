let yearInput = prompt("Lütfen bir yıl giriniz:");

function getLeapYear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log(year + " bir artık yıldır.")
    } else {
        console.log(year + " bir artık yıl değildir.")
    }
}

getLeapYear(yearInput);
