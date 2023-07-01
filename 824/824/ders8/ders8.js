/* 
Date Methods (Tarih methodları)
Date methodlarını kullanabilmek için mutlaka Date() class'ı oluşturulmalı

let zaman = new Date()

1 - getFullYear() -> güncel yıl bilgisini alır
2 - getMonth() -> Güncel ay bilgisini alır (0 -11)
3 - getDate() -> ayın gün bilgisini sayı olarak verir. (Bugün ayın 2'si) (1 - 31)
4 - getHours() -> Saat bilgisini verir. 24 saat sıkıntısı yoktur (0 - 23)
5 - getMinutes() -> Dakika bilgisini verir. (0 - 59)
6 - getSeconds() -> Saniye bilgisini verir. (0 - 59)
7 - getMiliseconds() -> Milisaniye bilgisini verir. (0 - 999)
8 - getTime() -> zaman bilgisini alır. 1 ocak 1970'ten şu ana kadar kaç milisaniye geçti.
9 - getDay() -> Haftanın gün bilgisini alır. (0 - 6)
*/

let zaman = new Date();

let yil = zaman.getFullYear() // zaman class'ı içindeki sene bilgisini al yil değişkenine ata
console.log(yil) //Ekrana 2023 yazar. console.log(zaman.getFullYear()) ile aynı

console.log(zaman.getMonth()) //Ekrana 3 yazar
console.log(zaman.getDate()) //Ekrana 2 yazar

console.log(`${zaman.getDate()}/${zaman.getMonth()+1}/${zaman.getFullYear()}`)
//Ay bilgisi 0 index ile başladığı için +1 ile toplamamız gerekiyor.

console.log(`${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()}`)
console.log(zaman.getMilliseconds())
console.log(zaman.getTime())

console.log(zaman.getDay()) //Ekrana 0 Yazar.

//Ör: Rahat okunabilir tarih formatı
// 2 Nisan 2023, Pazar 13:55:00

const tarih = new Date()
let sene = tarih.getFullYear(), //2023
    ay = tarih.getMonth(), // 3 **
    gun = tarih.getDate(), // 2
    hgun = tarih.getDay(), // 0  **
    saat = tarih.getHours(), // 13
    dakika = tarih.getMinutes(), // 5
    saniye = tarih.getSeconds() // 54


let aylar = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let gunler = [
    'Pazar',    
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]

// 2 Nisan 2023, Pazar 13:55:00
document.write(`${gun} ${aylar[ay]} ${sene}, ${gunler[hgun]} ${saat}:${dakika}:${saniye}`)


/*
let dogum = prompt('Doğum yılınızı girin'),
    yas = 2023 - dogum

console.log(
    yas >=18 ? 'Ehliyet Alabilirsiniz' : 'Ehliyet Alamazsınız'
)
*/


let donem = new Date(),
    suan = donem.getFullYear() // 2023

let dg = prompt('Doğum Yılınızı Girin'), //Kullacının doğum yılı
    yas = suan - dg // 2023 - kullanıcının doğum gününü çıkaracak

console.log(
    // yas >= 18 ? 'Ehliyet Alabilirsiniz' : 'Ehliyet Alamazsınız'
    yas >= 18 ? 'Ehliyet Alabilirsiniz' : `Ehliyet alamazsınız. ${18-yas} yıl daha bekleyin`
)