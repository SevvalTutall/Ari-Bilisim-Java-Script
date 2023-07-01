ders3.js
/* 

Değişkenler (Variables) 

Verilerin kapsayıcısı şeklinde tanımlayabiliriz. var, let ve const anahtar kelimeleri ile oluşturulur. (Not: var artık kullanılmıyor)

let -> Farklı zamanlarda değeri değişecek değişkenler oluşturulacağı zaman kullanılır.
const -> Eğer değeri hiç bir zaman değişmeyecekse kullanımı tercih edilir. Yani buna sabit değişken. Ör. PI sayısı, Ülke Bilgisi

Değişkenler tanımlanırken dikkat edilmesi gereken kurallar
- Sayı ile başlayamazlar. ama sonuna sayı alabilir. 
- Js değişnekn isimleri $ ve _ haricinde diğer özel karakterleri içeremez
- Js değişken isimleri birden fazla kelime içeriyorsa yazım biçimi olarak camelCase şeklinde tercih ediliyor. let ad_soyad yerine daha çok let adSoyad şeklinde yazıldığı görülür.
- let ya da const anahtar kelimeleri değişken isminden önce yazılmalıdır.
- Türkçe karakter isimlendirmelerde kullanılabilir ama tercih etmeyin
*/

let adi = 'Şevval'
let soyadi = 'Tutal'
let yas = 41

document.write(adi,soyadi,yas)

let meslek = 'Yazılımcı',
    firma = 'Acıbadem & Arı Bilgi',
    deneyim = 20

document.write(meslek,firma,deneyim)

// prompt() -> görünümü alert pop-up gibi ancak kullanıcıdan veri almak için kullanılır.

let kadi = prompt('Adınız Soyadınız')

console.log(kadi)

const ulke = prompt('Ülke bilgisi')
let sehir = prompt('Şehir Bilgisi'),
    ilce = prompt('İlçe Bilgisi')

console.log(ulke,sehir,ilce)

function buton(){
    let sifre = prompt('Sms Şifre')
    console.log(sifre)
    return
}

/*
Soru:
- İlgili method ile kullanıcıdan 2 isim bilgisi ve 2 yaş bilgisi alın
- Console ekranına
Benim adım aaa yaşım xxx. Senin adın bbb yaşın yyy.
yazsın
*/

let ad1 = prompt('Adınız'),
    yas1 = prompt('Yaşınız'),
    ad2 = prompt('İsminiz'),
    yas2 = prompt('Yaş')

console.log('Benim adım',ad1,'yaşım:',yas1, 'Senin adın:',ad2,'yaşın:',yas2)