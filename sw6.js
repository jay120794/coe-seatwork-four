var reverseString = function(word){
    var reverse = "";
	for (var i = 1; i <= word.length; i++){
		var char = word.length - i;
		reverse += word[char];
	}

	console.log(reverse);
}
reverseString("OIRAM");