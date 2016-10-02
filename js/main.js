
var x1 = "X"
var o1 = "O"


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

var TL = document.getElementById('TL').innerHTML;
var TR = document.getElementById('TR').innerHTML;

if(TL == TR) {
  console.log('Winner')
}
