ders6.js
/*
----- Operatörler -----

1- Comparation Operators(Karşılaştırma Operatörleri)
    -   == -> Eşittir(Eşitse). Ör: 5 == 5 //Ekrana console ile yazılsa true verir
    -   === -> Denklik(Denkse) durumunu kontrol eder. hem değer olarak hem de data türü olarak kontrol eder.
    -   != -> Eşit Değildir(eşit değilse) -> bir değerin eşit olmama durmunu kontrol eder.
    -   >   -> Büyüktür(Büyükse)
    -   <   -> Küçüktür(Küçükse)
    -   >=  -> Büyük veya eşitse
    -   <=  -> Küçük veya eşitse
    -   !== -> Denk değilse
*/

let s1 = 10,
    s2 = '10'

console.log(s1 == s2) //Ekrana True yazar
console.log(s1 === s2) //Ekrana False yazar

let s3 = 'Şevval',
    s4 = 'şevval'

console.log(s3 != s4) //Ekrana True yazacak

/* 
2- Logical Operators (Mantıksal Operatörler)

    -   && (AND) -> ve anlamında kullanılır.
    -   || (OR) -> veya anlamında kullanılır.
    -   ! -> Negation (negatif) anlamında kullanılır. Hangi operatörünn önüne gelirse anlamını tersine çevirir.
*/

console.log(4>3 && 10>5) // Ekrana true yazar
console.log(true && true) // Ekrana true yazar
console.log(4<3 || 10>5) //Ekrana true yazar
console.log(4<3 || 10<5) // Ekrana false yazar



/*

Increment Operators(Arttırma Operatörleri)
Pre-Increment (önceden arttırmalı) ve Post-Increment (Sonradan arttırmalı) olarak ikiye ayrılır. Genellikle post-increment kullanımı tercih ediliyor.

Decrement Operators (Azaltma Operatörleri)
Pre-decrement (önceden azaltmalı) ve post-decrement (sonradan azaltmalı) olarak ikiye ayrılırlar.
(--sayi) -> Önceden azaltmalı
(sayi--) -> Sonradan azaltmalı

*/

let sayi = 0
//++sayi -> sayi+1
console.log(++sayi) //Pre-Increment. değeri önce arttırır ekrana sonra yazar
console.log(sayi) // Ekrana 1 Yazar.

let rakam = 0

console.log(rakam++) //Post-Increment. Değeri sonra arttırır.Kısaca arttır ve bekle demek.
console.log(rakam) //Ekrana 1 yazar.