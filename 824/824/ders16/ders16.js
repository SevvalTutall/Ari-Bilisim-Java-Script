// let listele = document.getElementById('listele')

// let data = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(veri => {
//         // console.log(veri) -> tüm datayı yazdırdık
//         for (icerik of veri) {
//             listele.innerHTML += `<li><a href="${icerik.url}">${icerik.title}</a><p>${icerik.body}</p><a href="${icerik.url}">Devamını Oku</a><br><br></li>`
//         }

//Bu Çalışmaz
// for(let i=0; i<=9;i++){
//     listele.innerHTML = `<li><a href="${icerik.url}">${icerik.title}</a><p>${icerik.body}</p><a href="${icerik.url}">Devamını Oku</a><br><br></li>`
// }

// for of ile gelecek datayı sınırlama
// for (icerik of veri){
//     if(icerik.id <=10){
//         listele.innerHTML += `<li><a href="${icerik.url}">${icerik.title}</a><p>${icerik.body}</p><a href="${icerik.url}">Devamını Oku</a><br><br></li>`
//     }
// }
// })


let gorseller = document.getElementById('gorseller')

let foto = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(veri => {

        for (image of veri) {
            if (image.id <= 12) {
                gorseller.innerHTML += `
        
        <div class="col-md-3 mt-3">
        <div class="card">
            <img src="${image.url}" title="${image.title}" class="card-img-top">
            <div class="card-body">
                <h1 style="font-size:16px;" class="text-danger">${image.title}</h1>
            </div>
        </div>
        </div>
        
        `
            }
        }

    })



