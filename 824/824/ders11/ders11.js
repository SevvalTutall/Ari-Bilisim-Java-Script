/* 

Loops(Döngüler)
proglama dillerinde tekrarlanacak bir işlem varsa döngülerle ilgili kod 1 kere yazılır ve sınıra ulaşana kadar çalışması sağlanmış olur.

1- for Döngüsü
for(Başlangıç değeri;Bitiş değeri;tekrarlanma){
    Tekrar tekrar çalışacak kodlar buraya yazılır
}

*/

for (let i = 1; i <= 10; i++) {
    console.log(i) //1'den 10'a kadar console'a yazar
    document.write(`${i}<br/>`) //1'den 10'a kadar ekrana alt alta yazar
}


let ad = prompt('İsminizi Girin')

for (let i = 1; i <= 5; i++) {
    document.write(`${ad}<br>`)
}

for (let i = 1; i <= 5; i++) {
    document.write(`${i} - ${ad}<br>`)
}

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//Sonsuz Döngüye Girer DİKKAT
// for(let i =5; i>0;i++){
//     console.log('Merhaba')
// }



//6 tane yuvarlatılmış kutu
//background'u sarı olacak
//sayı gelecek

for (let i = 1; i <= 6; i++) {
    document.write(`
    <div style="background-color:yellow; float:left; padding:14px; margin-right:5px; border-radius:55px;">
        ${Math.floor(Math.random() * 50)}
    </div>
    `)
}

document.write('<br><br>')

//For döngüsünün diziler ile kullanımı
let adlar = ['Hakan', 'Yıldırım', 'Seçil', 'Canan']
//console.log(adlar[1])

for (let i = 0; i < adlar.length; i++) {
    console.log(adlar[i])
}

for (let i = 0; i < adlar.length; i++) {
    document.write(`<br>${i + 1} - ${adlar[i]}`)
}

document.write('<br><br>')

adlar.sort()
for (let i = 0; i < adlar.length; i++) {
    document.write(`<br>${i + 1} - ${adlar[i]}`)
}

document.write('<br><br>')

adlar.reverse()
for (let i = 0; i < adlar.length; i++) {
    document.write(`<br>${i + 1} - ${adlar[i]}`)
}

//While Döngüsü

let s = 0 //Başlangıç
while (s <= 5) { //Bitiş
    console.log(s)
    s++ //Çalışma yönü
}



/*
for of loop (Diziler için Döngü)
index no hariç tutulara çalışıyor

syntax

for(const yeniIsim of değişkenAdı){
    Çalışacak kodlar
}

*/

let lang = ['Html', 'Css', 'Js', 'Php']

for (const langList of lang) {
    console.log(langList)
}

document.write('<br><br><br><br>')

//Örnek

let blog = [
    'Web Tasarım Hizmeti',
    'https://inokids.com/toprak/uploads/SITE236/ck/images/66ab2232-aba3-495f-bba3-39f0aabfee89.jpg',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis aliquid unde porro sunt exercitationem. Animi, quas. Consectetur, minima enim cupiditate possimus fugit vel ducimus ad nemo totam quia non necessitatibus et magnam velit? Ut aliquam, aut pariatur rem rerum fugiat vel error dolores doloremque minima, beatae laborum laboriosam voluptate est sequi tempore repudiandae dolor unde, nemo cupiditate quisquam minus! Aliquam quia iure corporis, delectus similique, voluptatibus, atque iusto est aspernatur libero ullam molestias repellendus voluptatum dicta dignissimos? Voluptas vitae, ipsa praesentium libero voluptatem aspernatur eligendi quaerat doloremque fugiat nisi, nemo est excepturi asperiores molestias ratione porro quod ut sint accusantium adipisci vel quo fugit. Soluta magnam ex eum quod quidem animi delectus molestiae, rerum ullam, labore veritatis nobis reiciendis adipisci facilis molestias! Odit autem reprehenderit sunt ducimus soluta tempora culpa earum amet natus illum alias facilis placeat aliquid, expedita in inventore obcaecati? Asperiores et enim odio labore sint voluptatum! ',
    'Grafik Tasarım Hizmeti',
    'https://www.kozmoslisesi.com/wp-content/uploads/2020/09/grafik-tasarim-nedir.jpg',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis aliquid unde porro sunt exercitationem. Animi, quas. Consectetur, minima enim cupiditate possimus fugit vel ducimus ad nemo totam quia non necessitatibus et magnam velit? Ut aliquam, aut pariatur rem rerum fugiat vel error dolores doloremque minima, beatae laborum laboriosam voluptate est sequi tempore repudiandae dolor unde, nemo cupiditate quisquam minus! Aliquam quia iure corporis, delectus similique, voluptatibus, atque iusto est aspernatur libero ullam molestias repellendus voluptatum dicta dignissimos? Voluptas vitae, ipsa praesentium libero voluptatem aspernatur eligendi quaerat doloremque fugiat nisi, nemo est excepturi asperiores molestias ratione porro quod ut sint accusantium adipisci vel quo fugit. Soluta magnam ex eum quod quidem animi delectus molestiae, rerum ullam, labore veritatis nobis reiciendis adipisci facilis molestias! Odit autem reprehenderit sunt ducimus soluta tempora culpa earum amet natus illum alias facilis placeat aliquid, expedita in inventore obcaecati? Asperiores et enim odio labore sint voluptatum! ',
    'Dijital Pazarlama Hizmeti',
    'https://www.pazarlamasyon.com/wp-content/uploads/2018/01/digital-marketing.jpg',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis aliquid unde porro sunt exercitationem. Animi, quas. Consectetur, minima enim cupiditate possimus fugit vel ducimus ad nemo totam quia non necessitatibus et magnam velit? Ut aliquam, aut pariatur rem rerum fugiat vel error dolores doloremque minima, beatae laborum laboriosam voluptate est sequi tempore repudiandae dolor unde, nemo cupiditate quisquam minus! Aliquam quia iure corporis, delectus similique, voluptatibus, atque iusto est aspernatur libero ullam molestias repellendus voluptatum dicta dignissimos? Voluptas vitae, ipsa praesentium libero voluptatem aspernatur eligendi quaerat doloremque fugiat nisi, nemo est excepturi asperiores molestias ratione porro quod ut sint accusantium adipisci vel quo fugit. Soluta magnam ex eum quod quidem animi delectus molestiae, rerum ullam, labore veritatis nobis reiciendis adipisci facilis molestias! Odit autem reprehenderit sunt ducimus soluta tempora culpa earum amet natus illum alias facilis placeat aliquid, expedita in inventore obcaecati? Asperiores et enim odio labore sint voluptatum!'
]

// document.write(`
//     <div style="width:33%; border:1px solid #000;">
//     <h1>${blog[0]}</h1>
//     <img src="${blog[1]}" style="width:100%;">
//     <p>${blog[2]}</p>
//     </div>
// `)


for( let i = 0; i<blog.length; i+=3){
    document.write(`
    <div style="width:33%; border:1px solid black; float:left">
    <h1>${blog[i]}</h1>
    <img src="${blog[i+1]}" style="width:100%;">
    <p>${blog[i+2]}</p>
</div>`)
}


//Break (Döngüyü Durdurma)

//Koşulun tamamını çalıştırmasına gerek kalmadan durdurmaya yarar
//Ör: bir üye listesi içinden istenilen kişi bulunduğunda geri kalanını yazdırmadan durdurabiliriz.

let info = prompt('Hangi Yazılım Dilini Arıyorsunuz')
let yazDili = ['Html','Css','Bootstrap','Js','Php','C#','Unity','React','Vue']

for(let yazDiliList of yazDili){
    if(yazDiliList === info){
        alert(`${info} isimli data bulunmuştur`)
        break
    } 
    console.log(yazDiliList)
    /* else {
        alert('Aradığınız Data yok')
        break
    } */    
}

for(let yazDiliList of yazDili){
    if(yazDiliList === info){
        document.write(`${yazDiliList}<br>`)
        continue
    }
}