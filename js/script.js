square = document.getElementById('square')
square.style.width = String(document.getElementById('range-width').value*0.25)+'em'
square.style.height = String(document.getElementById('range-height').value*0.25)+'em'
square.style.rotate = 0


document.getElementById('range-width').addEventListener('input',function(){
    square.style.width = String(document.getElementById('range-width').value*0.25)+'em'
})
document.getElementById('range-height').addEventListener('input',function(){
    square.style.height = String(document.getElementById('range-height').value*0.25)+'em'
})
document.getElementById('range-rotation').addEventListener('input',function(){
    square.style.rotate = String(document.getElementById('range-rotation').value*0.25)+'deg'
})
document.getElementById('range-border-radius-1').addEventListener('input',function(){
    square.style.borderTopLeftRadius = String(document.getElementById('range-border-radius-1').value*0.25)+'px'
})
document.getElementById('range-border-radius-2').addEventListener('input',function(){
    square.style.borderTopRightRadius = String(document.getElementById('range-border-radius-2').value*0.25)+'px'
})
document.getElementById('range-border-radius-3').addEventListener('input',function(){
    square.style.borderBottomLeftRadius = String(document.getElementById('range-border-radius-3').value*0.25)+'px'
})
document.getElementById('range-border-radius-4').addEventListener('input',function(){
    square.style.borderBottomRightRadius = String(document.getElementById('range-border-radius-4').value*0.25)+'px'
})
document.getElementById('input-backgroundcolor').addEventListener('change',function(x){
    square.style.backgroundColor = document.getElementById('input-backgroundcolor').value
}) 