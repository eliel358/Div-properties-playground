square = document.getElementById('square')
square.style.width = String(document.getElementById('range-width').value*0.25)+'em'
square.style.height = String(document.getElementById('range-height').value*0.25)+'em'
square.style.rotate = 0
theme = 'dark'

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
document.getElementById('change-theme').addEventListener('click',function(x){
    if(theme == 'dark'){
        theme = 'white'
        document.getElementById('change-theme').innerHTML = 'Tema preto'
        document.getElementById('change-theme').className = 'white-theme-button'
        document.getElementById('square').className = 'square-white'
        document.body.className = 'body-white'
        return
    }
    theme = 'dark'
    document.getElementById('change-theme').innerHTML = 'Tema branco'
    document.getElementById('change-theme').className = 'black-theme-button'
    document.getElementById('square').className = 'square-dark'
    document.body.className = 'body-dark'
})