/*
DOM (Document Object Management)
html elemanların js ile ulaşmak ve yönetmek
fonksiyonun adı document
*/

// let page = document.URL //İlgili sayfanın linkine ulaşır
// let wpLink = `https://api.whatsapp.com/send/?phone=05555555555&text=${page}`
// document.write(`<a href="${wpLink}">Whatsapp</a>`)


// console.log(document.title) //İlgili sayfanın title etiketleri arasında yazan bilgiye ulaşır.


// console.log(document.head) //Head etiketini ve içindeki elementleri yakalar.
// console.log(document.links)//İlgili sayfanın içindeli tüm linkleri yakalar.


//getElementById -> elementlere id bilgisi ile ulaşamak

// let htmlBaslik = document.getElementById('baslik')
// console.log(htmlBaslik)

// htmlBaslik.innerText = 'Bu JS Başlıktır' //etiketin metnini değiştirir.
// htmlBaslik.textContent = 'Bu text content ile yazıldı' //etiketin metnini değiştirir.

// //innerHTML yakalanan etiketin içine yeni etiket ile yeni nesneyi ekler
// let divBaslik = document.getElementById('baslik2')
// divBaslik.innerHTML = '<h2 style="color:red;">Bu inerHTML ile oluşturuldu</h2>'
// console.log(divBaslik)

// divBaslik.style.backgroundColor = 'blue'

let kutu = document.getElementById('box'),
    msj = prompt('Mesajınız')
kutu.innerText = msj
kutu.style.backgroundColor = 'yellow'

//getElementsByClassName('aaa') element'e class name'i ile ulaşır.
//ancak class'lar birden fazla elemente tanımlanabildiği için
//indexNo ile ilerlenmelidir.
let yeniBaslik = document.getElementsByClassName('yeni')
yeniBaslik[0].innerHTML = '<h3>get Elements by class name ile yazılan başlık</h3>'
yeniBaslik[3].innerText = 'Bu yeni yazıdır'

for (let i = 0; i < yeniBaslik.length; i++) {
    yeniBaslik[i].innerText = 'Döngüyle hepsi aynı yazıldı'
}

//getElementsByTagName('a') sayfadaki ilgili elemente tag adı ile ulaşır.
//ancak tag'ler birden fazla olabilir indexNo ile ilerlenmelidir.
let yeniLink = document.getElementsByTagName('a')
yeniLink[0].innerText = 'Arama Motoruna Git'


let btn = document.querySelector('body > div:nth-child(6)')
btn.innerText = 'Kaydet'