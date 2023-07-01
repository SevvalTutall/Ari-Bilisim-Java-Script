/*
Arrays (Diziler)
- Birden fazla değer taşıyabilen değişkenlerdir.
- Değerlerin her biri otomatik olarak bir indexNo'ya sahiptir. VEEE indexNo'lar 0'dan başlar
- Bir dizi boş olarak da tanımlanabilir.
- Genelikle const ile tanımlarız. (Zorun değil)
- const diziAdi = [] veya const diziAdi = array()
- dizi değişken isimlerinin yazım kuralı normal değişken ile aynı
*/

const arr1 = [] //Boş dizi. Bu dizi methodlar ile doldurulabilir
console.log(arr1)

const arr2 = ['Hakan','Yılmaz','Sevil','Sevim']
console.log(arr2)

console.log(`${arr2.length} adet üyeniz var`)

let yazDili = 'JavaScript'
const arr3 = yazDili.split() //Değeri parçalamadan direkt dizi olarak tanımladı
const arr4 = yazDili.split('')
console.log(arr3)
console.log(arr4)

let gorsel = 'img/face.jpg,img/insta.jpg'
const arr5 = gorsel.split(',') //Değeri (,) virgüle göre parçalar
console.log(arr5)

const meyveler = [
    'Muz',
    'Portakal',
    'Mango',
    'Limon'
]

console.log(meyveler[2]) //Ekrana Mango yazar

//Ekrana Tüm meyveleri tek satır halinde yazar.
console.log(`${meyveler[0]},${meyveler[1]},${meyveler[2]},${meyveler[3]}`)

let ilkMeyve = meyveler[0]
console.log(ilkMeyve)

//Dizilerde parametreleri değiştirmek

const kategori = ['Daire','Otomobil','Elektronik','Giyim']
console.log(kategori)

kategori[0] = 'Teknoloji'
console.log(kategori)


/* Array Method'ları */

// fill() -> boş bir diziyi sabit bir değerle doldurur

const dizi1 = Array(1).fill('Hakan')
console.log(dizi1)

// concat() -> Dizileri birbirine bağlayabiliriz
const kGiyim = [
    'Etek',
    'Bluz',
    'Body'
]

const eGiyim = [
    'Pantolon',
    'Tshirt',
    'Gömlek'
]

const giyim = kGiyim.concat(eGiyim)
console.log(giyim) // Çıkan sonuç dizi data türündedir.
const giyim2 = eGiyim.concat(kGiyim)
console.log(giyim2) // Çıkan sonuç dizi data türündedir.
// giyim2 -> ['Pantolon', 'Tshirt', 'Gömlek', 'Etek', 'Bluz', 'Body']

const cGiyim = ['Zıbın','Şapka','Çorap']

const giyimList = giyim2.concat(cGiyim)
console.log(giyimList) // ['Pantolon', 'Tshirt', 'Gömlek', 'Etek', 'Bluz', 'Body', 'Zıbın', 'Şapka', 'Çorap']


//indexOf() -> Bir elemanın bir dizi içinde olup olmadığını kontrol eder. (indexNosu ile)

const uyeler = ['Hayko','Mahmut','Bülent']
console.log(uyeler.indexOf('Bülent'))


let kontrol = prompt('Kullanıcı Adınız')
let sonuc = uyeler.indexOf(kontrol)

if(sonuc >=0){
    console.log('Üye Kayıtlı')
} else {
    console.log('Üye Kayıtlı Değil')
}

const yDili = ['Html','Css','Bootstarp','Js','Php','C#','Php','Python','Unity']

console.log(yDili.indexOf('Php')) // ilgili İlk değerin indexNo'sunu yakalar
console.log(yDili.lastIndexOf('Php')) //ilgili son değerin indexNo'sunu yakalar

document.write(`${yDili} <br/>`)

let change = prompt('Değiştir')
yDili[yDili.lastIndexOf(change)] = prompt('Yeni değer')
document.write(yDili)


//includes() -> indexOf() ile aynı mantıkta çalışır ancak sonuç olarak indeNo yerine true ya da false soncunu verir

console.log(uyeler.includes('Mahmut'))

let uyeKontrol = prompt('Kullanıcı Adı Girin 2')
    // varmi = uyeler.includes(uyeKontrol)

if(uyeler.includes(uyeKontrol)){
    console.log('Üye Kayıtlı')
} else {
    console.log('Üye Kayıtsız')
}
