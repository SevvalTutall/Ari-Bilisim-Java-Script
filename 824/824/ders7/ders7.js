ders7.js
/* 

Window Methods(Pencere Methodları) 

alert() -> Bildirim Pop-Up'ı açan ön tanımlı fonksiyon
prompt() -> Kullanıcan bilgi almak için kullanılan pop-up fonksiyonu
confirm() -> Onay alma pop-up'ı diyebiliriz. Mesela silme işlemi yapmadan evvel ekrana uyarı gelmesi gibi

*/

//alert('Merhaba. JS Öğreniyorum') //onload modunda. Yani sayfa açıldığında çalışır.

//prompt('Kullanıcı Adınızı Girin') //onload modunda. Yani sayfa açıldığında çalışır.

// let kadi = prompt('Kullanıcı Adınızı Girin')
// document.write(`${kadi} Admin Paneline HoşGeldiniz`)


let kadi = prompt('Kullanıcı Adınızı Girin')
console.log(`${kadi} Admin Paneline Hoş Geldin`)


let logout = confirm('Çıkış için Onay Veriyor musunuz?')

console.log(
    logout ? 'Çıkış işlemi başarılı' : 'Çıkış Başarısız.' //Ternary biçimi koşullu ifade
)


/*

Kullanıcdan ilgili method ile doğum yılı alınıp eğer yaşı 18'den büyükse ehliyet alabilirsin yazsın değilse ehliyet alamazsın

*/


let dogum = prompt('Doğum yılınızı girin'),
    yas = 2023 - dogum

console.log(
    yas >=18 ? 'Ehliyet Alabilirsiniz' : 'Ehliyet Alamazsınız'
)