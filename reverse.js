//Reverse Word
function reverse(kata){
	const subKata = kata.split('')
	const panjangKata = kata.length

	const subKebalikanKata = subKata.map(
		function (huruf, indeks){
			return subKata[panjangKata-(1+indeks)]
		}
	)
	const hasil = subKebalikanKata.join('')
	document.write(hasil);
}

reverse("i am A great human")