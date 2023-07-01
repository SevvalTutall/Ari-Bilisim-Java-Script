/* 
Objects(Nesneler) 
OOP

let uye1 = {
    key1: 'value1',
    key2: 'value2'
}

let uye2 = {
    'key1': 'value1',
    'key2': 'value2'
}

Not: 
    - key'lerin sıralamasının bir önemi yoktur.
    - Tüm veri türlerini içerebilir
    - alt herhangi bir key'e ulaşmak için o key isminin . ile yazılması yeter
*/

let uye = {
    isim: 'Hayko',
    soyad: 'Cepkin',
    yas: 45,
    meslek: 'Sanatçı',
    sarkilar: [
        'Yol Gözümü Dağlıyor',
        'Bertaraf Et',
        'Kabul',
        'Sandık',
        'Geç Kaldım'
    ],
    aile:[
        {
            kardes: 'Hayki',
            yas: 65
        },
        {
            anne: 'Sevo',
            yas: 80
        },
        {
            baba: 'Yıldo',
            yas:60
        }
    ]
}

console.log(uye)
console.log(uye.isim) //Ekrana Hayko Yazar
console.log(uye['isim']) //Ekrana Hayko Yazar
console.log(uye.soyad) //Cepkin Yazar
console.log(uye.isim, uye.soyad) // Ekrana Hayko Cepkin yazar
console.log(uye.aile[2].baba)

/*
Yıldo'dan olma Sevo'dan Doğma Hayko Cepkin'in Kardeşinin Adı Hayki'dir ve Hayko Kardeşi Hayki'den 10 Yaş Büyüktür.
*/

// document.write(`${uye.aile[2].baba}'dan olma ${uye.aile[1].anne}'dan doğma ${uye.isim} ${uye.soyad}'in kardeşinin adı ${uye.aile[0].kardes}'dir ve ${uye.isim}, kardeşi ${uye.aile[0].kardes}'den ${uye.yas - uye.aile[0].yas} yaş büyüktür.`)



if(uye.yas > uye.aile[0].yas){
    document.write(`${uye.aile[2].baba}'dan olma ${uye.aile[1].anne}'dan doğma ${uye.isim} ${uye.soyad}'in kardeşinin adı ${uye.aile[0].kardes}'dir ve ${uye.isim}, kardeşi ${uye.aile[0].kardes}'den ${uye.yas - uye.aile[0].yas} yaş büyüktür.`)
} else{
    document.write(`${uye.aile[2].baba}'dan olma ${uye.aile[1].anne}'dan doğma ${uye.isim} ${uye.soyad}'in kardeşinin adı ${uye.aile[0].kardes}'dir ve kardeşi ${uye.aile[0].kardes}, ${uye.isim}'dan ${uye.aile[0].yas - uye.yas} yaş büyüktür.`)
}

//Key'lere Ulaşmak
console.log(Object.keys(uye)) //Diziye dönüşerek nesneye ait ana key bilgilerini yakalar.
console.log(Object.keys(uye)[0]) //Ekrana İsim Yazar

for(let i=0; i<Object.keys(uye).length; i++){
    document.write(`${Object.keys(uye)[i]}<br/>`)
}

//Value'lara Ulaşmak
console.log(Object.values(uye)) //Sadece value'ları yazar
