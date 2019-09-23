function makeBuffer() {
	let totalString = '';
	buffer.clear = function() {
		totalString = '';
		// я пыталась написать так:
		return totalString;
	}
	function buffer(str='') {
		return totalString += str;
	}
	// return buffer;
	// и без вот этого return 
	// не очень понимаю почему так нельзя
}

var buffer = makeBuffer();



buffer("Тест");
buffer(" тебя не съест ");
console.log( buffer() ); // Тест тебя не съест

console.log(buffer.clear(), 'pop');

console.log( buffer() ); // ""
