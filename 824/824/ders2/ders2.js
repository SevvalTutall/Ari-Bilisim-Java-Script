/* 

Data Types (Veri Türleri) 

A- Primitive Data Types (İlkel Data Türleri)
    1- Integer -> Negatif ve pozitif sayılardan oluşan data türüdür. Çıktısı Number olarak geçer. tanımlanırken tırnak vs herhangi bir karaktarle kullanılmaz
    2- Float -> Pozitif ya da negatif sayılardan oluşan daya türüdür. Çıktısı Number olarak geçer. Tanımlanırken tırnak vs herhangi bir karaktarle kullanılmaz. Ondalıklı basamak için nokta (.) kullanıyoruz.
    3- String -> Metinsel ifadelerden oluşan data türüdür. Tanımlanırken '...' veya "..." arasında tanımlanır.
    4- Boolean -> true ve false. Mantıksal veri türüdür.
    5- Undefined -> Tamınlanmamış değer
    6- NUll -> Değişkene boş değer atamaktır.


B- Non-Primitive Data Types (Gelişmiş data türleri)

    1- Objects (Objeler/Nesne Data Türü)
    2- Functions (Fonksiyonlar)
    3- Array (Diziler) [] veya array()

*/

//typeof() -> Bir değerin data türünü bize söyler.

console.log(typeof('Sevval Nur')) //Ekrana string yazar
console.log(typeof(10)) // Ekrana number yazar ama integer veri türü
console.log(typeof(5.3)) // Ekrana number yazar ama float veri türü
console.log(typeof(5 != 5)) // Ekrana boolean yazacak. 

/*
console.log(typeof(5 == 5)) <=> console.log(typeof(true))
İkiside aynı sonucu verir

console.log(typeof(5 != 5)) <=> console.log(typeof(false))
İkiside aynı sonucu verir
*/

let arr = [1,'Sevval',3]
console.log(typeof(arr)) // Array olmasına rağmen object yazacak
