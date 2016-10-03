
var para = document.createElement('P');
var para2 = document.createElement('P')
var x1 = document.createTextNode('X');
para.appendChild(x1)

var x2 = document.createTextNode('X');
para2.appendChild(x2)

var TL = document.createElement('div').appendChild(getElementById('TL'))

document.getElementById('TL').addEventListener('click', function(){
document.getElementById('TL').appendChild(para);
})

document.getElementById('TR').addEventListener('click', function(){
document.getElementById('TR').appendChild(para2);
})

/*
document.getElementById('TL').addEventListener('click', function(){
document.getElementById('TL').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('TL').addEventListener('dblclick', function(){
document.getElementById('TL').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('TM').addEventListener('click', function(){
document.getElementById('TM').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('TM').addEventListener('dblclick', function(){
document.getElementById('TM').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('TR').addEventListener('click', function(){
document.getElementById('TR').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('TR').addEventListener('dblclick', function(){
document.getElementById('TR').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('ML').addEventListener('click', function(){
document.getElementById('ML').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('ML').addEventListener('dblclick', function(){
document.getElementById('ML').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('MM').addEventListener('click', function(){
document.getElementById('MM').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('MM').addEventListener('dblclick', function(){
document.getElementById('MM').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('MR').addEventListener('click', function(){
document.getElementById('MR').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('MR').addEventListener('dblclick', function(){
document.getElementById('MR').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('BL').addEventListener('click', function(){
document.getElementById('BL').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('BL').addEventListener('dblclick', function(){
document.getElementById('BL').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('BM').addEventListener('click', function(){
document.getElementById('BM').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('BM').addEventListener('dblclick', function(){
document.getElementById('BM').innerHTML = '<p>' + o1 + '</p>'
})

document.getElementById('BR').addEventListener('click', function(){
document.getElementById('BR').innerHTML = '<p>' + x1 + '</p>'
})

document.getElementById('BR').addEventListener('dblclick', function(){
document.getElementById('BR').innerHTML = '<p>' + o1 + '</p>'
})

// if(TL == x1 && TR == x1) {
//   console.log('Winner')
// }
*/

// var TL = document.getElementById('TL')
// var TM = document.getElementById('TM')
// var TR = document.getElementById('TR')
// var ML = document.getElementById('ML')
// var MM = document.getElementById('MM')
// var MR = document.getElementById('MR')
// var BL = document.getElementById('BL')
// var BM = document.getElementById('BM')
// var BR = document.getElementById('BR')

var board1 = [TL, TM, TR, ML, MM, MR, BL, BM, BR];

document.getElementById('body').addEventListener('click', function checkscore() {
for (i = 0; i < board1.length; i++) {
  if(TL == x1 && TR == x2) {
    console.log('Winner')
  } else {
    console.log('No Winner Yet')
  }
}
})

console.log(TL);
/*
Game logic.  If these arrays = each other, we have a winner!
Winning combos:
Vertical
TL, TM, TR
ML, MM, MR
BL, BM, BR

Horizontal
TL, ML, BL
TM, MM, BM
TR, MR, BR

Diagonal
BL, MM, TR


*/
