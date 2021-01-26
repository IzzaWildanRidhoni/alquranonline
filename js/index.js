// menghubungkan api alquran
$.getJSON('https://al-quran-8d642.firebaseio.com/data.json',function (data) {
    let menu = data;
    console.log(menu);
        
        $.each(menu,function(i,data) {
            $('#daftar-surat').append('<div class="col-12 col-md-5  isi mx-2 my-2" ><a href="detail.html?no='+data.nomor+'"><div class="row"><div class="col-8"><h3>'+data.nomor+'. '+data.asma+' </h3><span>'+data.nama+'</span></div><div class="col-4 align-self-center text-right"><span>'+data.arti+'</span></div></div></a> </div>')
        });
        
        // // ketika mengetik ambil datanya
        // $('#cari').keydown(function() {
        //       $('.isi').replaceWith(''); 
        // });
        // $('#cari').keyup(function(){
        //     var cari=$(this).val();
        //     // var hasil = cari.search("nisa"); // Hasil 5
        //     // console.log(hasil6);
        //     HTMLDetailsElement.tolowe
        //     $.each(menu,function(i,data) {
        //         var nama=data.nama.toLowerCase();
        //         if((cari.search(nama)) >= 0){
        //                 $('#daftar-surat').append('<div class="col-12 col-md-5  isi mx-2 my-2"  data-aos="zoom-in-up"><a href="detail.html?no='+data.nomor+'"><div class="row"><div class="col-8"><h3>'+data.nomor+'. '+data.asma+' </h3><span>'+data.nama+'</span></div><div class="col-4 align-self-center text-right"><span>'+data.arti+'</span></div></div></a> </div>')
        //         }
        //     });

        // });
});


