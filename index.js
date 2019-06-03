var name = 'Pasha'
var arr = name.split('')
var length = arr.length
var reverseName = [] 

for (var i = (length - 1); i >= 0; i--) {
  var lettersStr = arr[i]; 
  var lettersArr = lettersStr.split('')
  reverseName.push(lettersArr);
}

console.log(reverseName.join(''))
