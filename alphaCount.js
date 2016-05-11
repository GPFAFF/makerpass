function alphaCount (alphabet, text) {
 
  newString = 0;

  for (var i = 0; i < text.length; i++) {
  	for (var j = 0; j < alphabet.length; j++) {
  		if (text.charAt(i).toLowerCase() === alphabet[j].toLowerCase()) {
  			newString += 1;
  		}
  	}
  }
  return newString;
}


console.log(alphaCount("aBc", "aabbccdd"));
console.log(alphaCount("X", "Racer X is my friend"));
console.log(alphaCount("123", "o hai"));
