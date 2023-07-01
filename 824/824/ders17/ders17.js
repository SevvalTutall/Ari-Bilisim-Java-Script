let uyeList = document.getElementById('uyeList')

let uyeData = fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(uyeListesi => {
        for(let i=0; i<= uyeListesi.data.length; i++){
            uyeList.innerHTML += `
            
            <div class="col-md-4">
                <div class="row mt-3">
                    <div class="col-md-3">
                        <img src="${uyeListesi.data[i].avatar}" class="w-100">
                    </div>
                    <div class="col-md-9 my-auto">
                        <b>Ad Soyad</b>: ${uyeListesi.data[i].first_name} ${uyeListesi.data[i].last_name}<br>
                        <b>E-Posta</b>: ${uyeListesi.data[i].email}
                    </div>
                </div>
            </div >            
            
            `
        }
    })