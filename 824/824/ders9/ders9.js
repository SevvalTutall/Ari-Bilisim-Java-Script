/*

Koşullu İfadeler (if - else - elseif / Switch - Case / Ternary) 

if(koşul){
    Koşul True ise buradaki kod bloğu çalışır
} else {
    Koşul False ise buradaki kod bloğu çalışır
}

----------------------

if(koşul)
{
    Koşul True ise buradaki kod bloğu çalışır
}
else {
    Koşul False ise buradaki kod bloğu çalışır
}

*/

let sayi = 0
if(sayi > 0){
    console.log('Pozitif bir sayı girdiniz')
} else {
    console.log('Negatif bir sayı girdiniz')
}

if(sayi == 0){
    console.log('Etkisiz eleman girdiniz')
}

//Önemli Not: Birden fazla kontrol koşulu olması halinde else if yapısı kullanılmalı
let sayi2 = 0
if(sayi2 > 0){
    console.log('Pozitif Sayı Girdiniz')
} else if(sayi2 == 0){
    console.log('Etkisiz Eleman')
} else {
    console.log('Negatif sayı girdiniz')
}


//kullanıcı adı ve şifre kontrol

let kadi = 'Şevval',
    sifre = 123

if(kadi === 'Şevval' && sifre === 123){
    alert('Kullanıcı Adı ve Şifreniz Doğru')
} else {
    alert ('Kullanıcı adı ve/veya şifreniz hatalı.')
}


let ad = prompt('Kullanıcı Adınızı Girin'),
    parola = prompt('Şifrenizi Girin')

if(ad === 'Şevval' && parola === '123')
{
    console.log(`Sayın ${ad}. Admin Panelinize Hoşgeldiniz`)
} 
else if(ad === 'Hayko' && parola === '456')
{
    console.log(`Sayın ${ad}. Admin Panelinize Hoşgeldiniz`)
} 
else 
{
    console.log('Bilgileriniz Hatalı')
}

//Şifre bilgisi promptan geldiği için otomatik olarak string'e dönüşür. Bu sebeple parola kontrolü için denklik ile değer kontrol edildi.

/* Switch Case */

let hava = 'asdas'

switch (hava) {
    case 'Bulut':
        console.log('Hava Bugün Bulutlu')
        break;
    case 'Yağmur':
        console.log('Hava Bugün Yağmurlu')
        break;
    case 'Güneş':
        console.log('Hava Bugün Güneşli')
        break;
    default:
        console.log('Hava Belirsiz')
        break;
}

let user = 'Şevval',
    pass = 123

switch (user && pass) {
    case 'Şevval' && 123:
        console.log('Şevval Hoşgeldin')
        break;
    default:
        console.log('Hatalı Giriş')
        break;
}


/*
Kişinin yaşı 18'den büyük yada eşitse ehliyet alabilir değilse ehliyet alamaz.
Ehliyet alamaz ise kaç yıl daha beklemesi gerektiği yazılmalı
kullanıcan doğum tarihi bilgisi alınarak kurgulanmalı
2023 manuel yazılmamalı
bactick kullanılsın
*/

/*

- TC kontrol -> 11 basamaklı olmalı
- data türü integer olmalı
- eğer tc kontrolünden de geçebilirse ehliyet alabilirsin yazsın

*/

let dyil = Number(prompt('Doğum Yılınız')),
    tc = prompt('Tc Kimlik Numaranız')

let zaman = new Date(),
    yil = zaman.getFullYear(),
    yas = yil - dyil

if(yas >= 18){
    if(tc.length == 11){
        console.log(`Sayın aday ${yas} yaşındasındasınız. Ehliyet başvusu yapabilirsiniz`)
    } else {
        console.log('Tc Kimlik hatalı lütfen tekrar deneyin')
    }
} else {    
    console.log(`Sayın aday ${yas} yaşındasındasınız. Ehliyet alabilmek için ${18 - yas} yıl daha beklemelisiniz`)
}