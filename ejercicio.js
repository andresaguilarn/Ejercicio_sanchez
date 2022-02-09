let letters = document.getElementById('letters')
let lettersValue = letters.innerHTML
console.log(lettersValue)
let numbers = document.getElementById('numbers')
let numbersValue = numbers.innerHTML
const a1 = document.getElementById('a1')
const b2 = document.getElementById('b2')
const c3 = document.getElementById('c3')
const d4 = document.getElementById('d4')
const e5 = document.getElementById('e5')
const f6 = document.getElementById('f6')
const g7 = document.getElementById('g7')
const h8 = document.getElementById('h8')
const i9 = document.getElementById('i9')
const j0 = document.getElementById('j0')
const btnDelete = document.getElementById('btn-delete')

const btnA1 = () => {
    if(lettersValue == ''){
        letters.innerHTML += 'A'
        lettersValue = letters.innerHTML        
    }else if(lettersValue == 'ABCDEFGHIJ'){
        if(numbersValue == ''){
            numbers.innerHTML = '1'
            numbersValue = numbers.innerHTML
        }
    }else{
        alert('aún no puedes agregar contenido')
    }
}
const btnB2 = () => {
    if(lettersValue == 'A'){
        letters.innerHTML = 'AB'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '1'){
        numbers.innerHTML = '12'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero la A antes que la B o primero el 1 antes que el 2')
    }
    
}
const btnC3 = () => {
    if(lettersValue == 'AB'){
        letters.innerHTML = 'ABC'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '12'){
        numbers.innerHTML = '123'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la B antes que la C ó primero es el 2 antes que el 3')
    }
}
const btnD4 = () => {
    if(lettersValue == 'ABC'){
        letters.innerHTML = 'ABCD'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '123'){
        numbers.innerHTML = '1234'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la C antes que la D ó primero es el 3 antes que el 4')
    }
}
const btnE5 = () => {
    if(lettersValue == 'ABCD'){
        letters.innerHTML = 'ABCDE'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '1234'){
        numbers.innerHTML = '12345'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la D antes que la E ó primero es el 4 antes que el 5')
    }
}
const btnF6 = () => {
    if(lettersValue == 'ABCDE'){
        letters.innerHTML = 'ABCDEF'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '12345'){
        numbers.innerHTML = '123456'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la E antes que la F ó primero es el 5 antes que el 6')
    }
}
const btnG7 = () => {
    if(lettersValue == 'ABCDEF'){
        letters.innerHTML = 'ABCDEFG'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '123456'){
        numbers.innerHTML = '1234567'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la F antes que la G ó primero es el 6 antes que el 7')
    }
}
const btnH8 = () => {
    if(lettersValue == 'ABCDEFG'){
        letters.innerHTML = 'ABCDEFGH'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '1234567'){
        numbers.innerHTML = '12345678'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la G antes que la H ó primero es el 7 antes que el 8')
    }
}
const btnI9 = () => {
    if(lettersValue == 'ABCDEFGH'){
        letters.innerHTML = 'ABCDEFGHI'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '12345678'){
        numbers.innerHTML = '123456789'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la H antes que la I ó primero es el 8 antes que el 9')
    }
}
const btnJ0 = () => {
    if(lettersValue == 'ABCDEFGHI'){
        letters.innerHTML = 'ABCDEFGHIJ'
        lettersValue = letters.innerHTML 
    }else if(numbersValue == '123456789'){
        numbers.innerHTML = '1234567890'
        numbersValue = numbers.innerHTML
    }else{
        alert('Orden incorrecto ,ingresar las letras en orden adecuado, primero es la I antes que la J ó primero es el 9 antes que el 0')
    }
}
const deleteAll = () => {
    letters.innerHTML = ''
    lettersValue = letters.innerHTML
    numbers.innerHTML = ''
    numbersValue = numbers.innerHTML
}
    

a1.onclick = function(){
    btnA1()
}
b2.onclick = function(){
    btnB2()
}
c3.onclick = function(){
    btnC3()
}
d4.onclick = function(){
    btnD4()
}
e5.onclick = function(){
    btnE5()
}
f6.onclick = function(){
    btnF6()
}
g7.onclick = function(){
    btnG7()
}
h8.onclick = function(){
    btnH8()
}
i9.onclick = function(){
    btnI9()
}
j0.onclick = function(){
    btnJ0()
}
btnDelete.onclick = function(){
    deleteAll()
}