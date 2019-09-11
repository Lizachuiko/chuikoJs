let arr = [1, 2, 3, 4, 5, 6, 7];
  
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


function inBetween(a, b) {
   return function(el) {
      if(el >= a && el<=b ) {
         return true;
      }
      return false;
   }
}



// была в полном тупике как передать элемент который фильтруется в нужную функцию, непонятно как он проникает туда < return function(el) { >  я читаю доку по filter() но там нет информации что в возвращающуюся функцию поставится el ( поясните пожалуйста)

//  arr.filter(inBetween(a, b) {
//    return function(el) {
//       if(el >= a && el<=b ) {
//          return true;
//       }
//       return false;
//    }
// })

// если подставить в тело функции то будет так 

arr.filter(inBetween(3, 6)(el)) ///вот это не вызывает вопросов 
// но без el непонятно 



function inArray(args) {
   return function(el) {
      for (let arg of args) { // не работает arg почему то не могу перебрать не понимаю
         if (el === arg) {
            return true;
         }
         return false;
      }
   }
}