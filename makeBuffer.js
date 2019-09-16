function makeBuffer() { 
	let totalString = '';
	return function buffer(str='') {
		console.log(totalString, 'total');
		return totalString += str;
	}
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!
