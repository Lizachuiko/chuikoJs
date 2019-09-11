// замыкания 
function sum(a) {
   // let b;
   return function (b) {
      return a+b;
   }
}
alert(sum(4)(5));