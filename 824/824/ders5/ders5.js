ders5.js
/* 
Değişkenlerin Birleştirilmesi  

Eski Yöntem: + ile birleştirme yapılır.
Yeni Yöntem: Backtick ile (``) 

*/

let isim = 'Şevval',
    soyad = 'Tutal'

// +'lı yöntem    
document.write(isim+' '+soyad) // değişken + string + değişken

document.write('<br>') //Alt satıra inmesi için yazıldı

//Backtick'li yöntem
document.write(`${isim} ${soyad}`)

/* 
String Method'ları 

1- length -> Uzunluk. Boşluk karakteri de dahil olmak üzere string ibarenin karakter sayısını verir. parametre parantezi yoktur.
2- substring(x,y) -> Kısaltma veya belirli bir aralığı yazdırmak için kullanılır.x; başlangıç karakterinin sayısı olup y; bitiş karakterinin sayısıdır.
3- replace(a,b) -> a string ifadesi bulunacak olan, b string ifadesi ise yeni ibaredir. yani a değeri b olarak değişir.
4- toUpperCase() ve toLowerCase() -> upper, string ifadedeki karakterlerin hepsini büyük yapar. lower ise tümünü küçük harf yapar.
5- [indexNo] -> Değişkenden sonra []'ler arasına yazılan indexno ile ilgili stirng ifadenin ilgili karakterine ulaşabilirsiniz. Önemli not: indexno'lar 0'dan başlar

*/


let adSoyad = 'Şevval Tutal'
console.log(adSoyad.length) //Ekrana boşluk dahil 12 yazar

let tc = prompt('Tc Kimlik No Girin')

if(tc.length == 11){
    console.log('Kimlik bilginiz kaydedildi')
} else {
    console.log('Eksik ya da fazla rakam girdiniz')
}

console.log(adSoyad.substring(2,4))

let blog = "<p>Harem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis mauris lobortis, posuere enim nec, rhoncus leo. Vivamus odio augue, volutpat nec semper id, luctus pulvinar arcu. Cras iaculis lobortis nisi ac aliquam. Curabitur fermentum lectus ut Harem vestibulum, sed sagittis quam sollicitudin. Donec tincidunt felis id dignissim imperdiet. Quisque aliquet leo Harem, a rutrum eros tincidunt ac. Nam lacinia vel sem id porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed purus ullamcorper, tincidunt quam a, sagittis ipsum. Quisque non mi risus. Nam non mauris ac lacus vehicula ornare at id nisi. Aenean iaculis finibus dolor, ac vulputate augue. Curabitur vel ipsum sed nibh finibus pharetra. Curabitur at dolor condimentum, laoreet sem consectetur, mollis nibh. Mauris ornare metus id posuere bibendum. Fusce eleifend non nibh eget consequat.</p><p>Nulla varius lacus non elit pharetra blandit. Duis fermentum rutrum nisi. Vestibulum condimentum ligula tellus, nec accumsan Harem mollis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus nisl metus, mollis ac turpis et, volutpat ultricies turpis. Vivamus in diam ac eros pretium tincidunt. Sed fringilla vel dui ut facilisis. Donec pharetra dapibus velit, et pellentesque libero tristique mollis. In non iaculis velit. In efficitur accumsan odio sed pellentesque. Suspendisse potenti. Maecenas porttitor bibendum lacus, sed sagittis nulla dignissim vitae. Duis id cursus augue. Morbi laoreet, sapien elementum consequat auctor, magna nunc convallis dolor, non convallis lectus nisi quis est. In hac habitasse platea dictumst.</p>"

document.write(blog)
document.write(blog.substring(0,301))


document.write(blog.replace('Harem','LOREM')) // İlk Harem ibaresini LOREM yapar
document.write(blog.replaceAll('Harem','LOREM')) //Tüm Harem'leri LOREM yapar


let slogan = 'İşimiZ aYrıcaLıktır'

console.log(slogan.toUpperCase()) //Ekran İŞIMIZ AYRICALIKTIR yazar.
console.log(slogan.toLowerCase()) //Ekran i̇şimiz ayrıcalıktır yazar.

console.log(adSoyad[5]) //Ekrana p Yazar.