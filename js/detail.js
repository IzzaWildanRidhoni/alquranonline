function getUrlVars(param=null)
{
	if(param !== null)
	{
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars[param];
	} 
	else 
	{
		return null;
	}
}
let no = getUrlVars('no');
console.log(no);

$.getJSON('https://api.npoint.io/99c279bb173a6e28359c/surat/'+no,function (data) {
	let menu = data;
    $.each(menu,function(i,data) {
        $('#daftar-ayat').append(' <div class="col-12 mt-3 isiayat"><div class="row"><div class="col-2  text-left"><span>'+data.nomor+'</span></div><div class="col-10 text-right"><h3>'+data.ar+'</h3><span>'+data.id+'</span></div></div></div>')
    });
});

$.getJSON('https://al-quran-8d642.firebaseio.com/data.json',function (data) {
	$(function() {
		$('audio').audioPlayer();
	  });
	let menu = data;
	console.log(menu);
    $.each(menu,function(i,data) {
        var nomor=data.nomor;
        if (nomor == no) {
			$('#desc').html('<h1>'+data.nama+'</h1><span>( '+data.arti+' |  '+data.type+')</span><br>');
			$('#audioquran').html(' <audio preload="auto" controls><source src="'+data.audio+'"></audio>');
        }
    });
});