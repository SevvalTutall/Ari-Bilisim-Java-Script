/* 
Custom Functions(Özel Fonksiyonlar) 

- Belirli bir görevi yerine getirmek ve aynı kod yapısını başka bir yerde tekrar kullanmak için tercih edilen bir programlama ifadesidir.
- Fonksiyonlar function anahtar kelimesi ve bizim belirleyeceğimiz bir isim ile paranteji olacak şekilde tanımlanır
    ör: function deneme(){
        Çalışacak Kod kümesi
    }
- Parantez içine parametler gönderilebilir.
- Çalışması için çağırılması gerekiyor. Çağırılması için sadece fonksiyon ismini yazmamız yeterli
- fonksiyonlar geriye bir değer döndürür. return kullanımalı
- TAVSİYE: fonksiyonları rahat çalıştırabilmek için head etiketleri arasında çağırın
*/

function info() {
    console.log('Başvurunuz Alındı')
}

info() //Eğer fonksiyon ismi yazılmazsa cumstom function'ımız çalışmaz

function mesaj() {
    let msj = 'Teknik Destek İstiyorum'
    console.log(msj)
}

mesaj()


function login() {
    let user = prompt('Kullanıcı Adınızı Girin')
    if (user == 'Hakan') {
        alert(`Sevgili ${user}. Admin paneline hoşgeldin`)
    } else if (user == 'Hayko') {
        alert(`Sevgili ${user}. Admin paneline hoşgeldin`)
    } else {
        alert('Hatalı Bilgi')
    }
}

function kimlikSoy() {
    let soyad = 'Pamukcu'
    return soyad
}


let soy = kimlikSoy()
console.log(soy)
//Üstteki sonu şu şekilde de yazabilirdik
//console.log(kimlikSoy())


function toplama(sayi1, sayi2) {
    return sayi1 + sayi2
}

let sum = toplama(10, 82)
document.write(sum)

/* ------------------------------- */

let s1 = prompt('Birinci Sayıyı Giriniz'),
    islem = prompt('Yapmak istediğiniz işlem'),
    s2 = prompt('İkinci Sayıyı Giriniz')

function hm(r1, r2) {
    if (islem == '+') {
        return r1 + r2
    } else if (islem == '-') {
        return r1 - r2
    } else if (islem == '*') {
        return r1 * r2
    } else if (islem = '/') {
        return r1 / r2
    } else {
        return 'Hatalı İşlem'
    }
}

let hesapMak = hm(Number(s1), Number(s2))
console.log(hesapMak)

