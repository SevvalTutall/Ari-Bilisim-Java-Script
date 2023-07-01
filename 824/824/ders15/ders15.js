let data1 = {
    kisiler: [
        {
            name: 'Ahmet',
            surname: 'Yıldırım',
            age: 33
        },
        {
            name: 'Murat',
            surname: 'Şahin',
            age: 30
        },
        {
            name: 'Fatih',
            surname: 'Bulut',
            age: 29
        }
    ]
}

let uyeList = data1.kisiler

// console.log(`${uyeList[0].name} ${uyeList[0].surname}'ın yaşı ${uyeList[0].age}'tür`)

for (let i = 0; i < uyeList.length; i++) {
    console.log(`${uyeList[i].name} ${uyeList[i].surname}'ın yaşı ${uyeList[i].age}'tür`)
}

//stringfy() Methodu - > Json Datayı Stringe Çevirir
let kayit = JSON.stringify(data1)
// document.write(kayit)
console.log(kayit)
console.log(data1)


//parse() -> string datayı json formaına çevirir
let cevir = JSON.parse(kayit)
console.log(cevir)

//Dahili dosya yöntemi kullanıldığında ve local'de çalışıyorsanız LiveServer gibi sana sunucuya ihtiyacımız var
let kart = document.getElementById('ekip')
let data2 = fetch('ders15.json')
    .then(response => response.json())
    .then(veri => {
        for (let i = 0; i < veri.kullanicilar.length; i++) {
            kart.innerHTML += `
                <div class="col-md-4">
                <div class="card">
                <img src="${veri.kullanicilar[i].image}" alt="" class="card-img-top">
                <div class="card-body text-center">
                    <h2>${veri.kullanicilar[i].name} ${veri.kullanicilar[i].surname}</h2>
                    <small>${veri.kullanicilar[i].title}</small>
                </div>
                </div>
                </div>
`
        }
    })




