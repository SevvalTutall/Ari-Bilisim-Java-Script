ders4.js
/* 
Math Methods (Matematik Methodları)
*/
//PI -> Pi sayısını verir

const pi = Math.PI
console.log(pi)

//round() -> En yakın tam sayıya yuvarlar
console.log(Math.round(9.62)) //Ekrana 10 yazar

//ceil() -> En yakın üst tam sayıya (yukarıya) yuvarlar
console.log(Math.ceil(9.32)) // Ekrana 10 yazar

//floor() -> En yakın alt tam sayıya (aşağıya) yuvarlar
console.log(Math.floor(9.99)) // Ekrana 9 yazar

//max() -- min() parametreler arasındaki en büyük ve en küçük değeri bulur
console.log(Math.max(7,5,93,1,-5)) //Ekrana 93 Yazar
console.log(Math.min(7,5,93,1,-5)) //Ekrana -5 Yazar


//random() -> Rastgele sayı ve/veya karakter üretir. ancak karakter için tanımlama yapmak lazım. Ben robot değilim için çok kullanırız.
// random() methodu'nun ürettiği sayı 0 ile 0.99 arasındadır.

console.log(Math.random()) //Ekrana rastgele bir sayı getirecektir.

let sayi1 = Math.ceil(Math.random()*49)
let sayi2 = Math.ceil(Math.random()*49)
let sayi3 = Math.ceil(Math.random()*49)
let sayi4 = Math.ceil(Math.random()*49)
let sayi5 = Math.ceil(Math.random()*49)
let sayi6 = Math.ceil(Math.random()*49)

console.log(sayi1,sayi2,sayi3,sayi4,sayi5,sayi6)

document.write(`${sayi1} ${sayi2} ${sayi3} ${sayi4} ${sayi5} ${sayi6}`)



