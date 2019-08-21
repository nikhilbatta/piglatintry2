
var primeNumber = []
var nonPrimeNumbers = []
var arr = [...Array(100).keys()]
console.log(arr)
// var multiples =
function primeChecker(){
  arr.forEach(function(indexOfArr){
    for (var i = 0; i <= 100; i++){
    if (i%arr[i]===0 && i/i ===1){
      console.log("divisible by two greater than the number 2");
      nonPrimeNumbers.push(i)
    }
    else{
      primeNumber.push(i)
    }
  }
    console.log(primeNumber)
     return primeNumber;
  });
};
//   for (var i = 0; i <= 100; i++){
//   if (i%(2,3,4,5,6,7,8,9)=== 0 && i/i ===1){
//     console.log("divisible by two greater than the number 2");
//     nonPrimeNumbers.push(i)
//   }
//   else{
//     primeNumber.push(i)
//   }
// }
//   console.log(primeNumber)
//    return primeNumber;
// };
// var result = primeNumber.map(function(x){
// return parseInt(x,primeNumber.length);
// });
// console.log(result)
$(document).ready(function(){
  $("h1").click(function(event){
    event.preventDefault();
  alert("click worked")
    var functionCaller = primeChecker();
    $("h1").text("<li>" + primeNumber + "</li>");

  });


});
