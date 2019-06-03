var name = 'Pasha'
var arr = name.split('')
var reverseName = [] 

for (var i = (arr.length - 1); i >= 0; i--) {
    reverseName.push(arr[i]);
}
console.log(reverseName.join(''))
