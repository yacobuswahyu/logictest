//PALINDROME
function Palindrome(str){
	let strArray = str.toLowerCase().split('');
	let newArr = strArray.join('');
	let reverseArr = [...newArr].reverse().join('');

	if(newArr === reverseArr){
		document.write(str + " = adalah palindrome<br>");
	}else{
		document.write(str + " = bukan palindrome<br>");
	}
};

Palindrome("radar");
Palindrome("malam");
Palindrome("kasur ini rusak");
Palindrome("malas");
Palindrome("makan nasi goreng");
Palindrome("balonku ada lima");
