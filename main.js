// //estos son objetos en JS!!!
// var usuario1 = {
//     email: 'usuario@gmail.com',
//     pass: '12345',
//     age: 24,
//     active: true,
// }
// var usuario2 = {
//     email: 'chanchitofeliz@outlook.es',
//     pass: '123456',
//     age: 21,
//     active: false,
// }
// var usuario3 = {
//     email: 'chanchitocochino@hotmail.com',
//     pass: '1234',
//     age: 38,
//     active: true,
// }
// var usuario4 = {
//     email: 'chanchitotriste@live.cl',
//     pass: '1234.',
//     age: 17,
//     active: true,
// }
// //se asigna un array
// var usuarios = [usuario1, usuario2, usuario3{
//     email: 'chanchitotriste@live.cl',
//     pass: '1234.',
//     age: 17,
//     active: true, 
// }]
// var emails = []
// for(var i = 0; i < usuarios.length; i++){
//     emails[i] = usuarios[i].email
// }
// usuario[0].email
// var usuario4age = usuario4.age
// var usuario3age = usuario3.age
// var edad = usuario4age + usuario3age
// edad = edad + 0

// console.log(usuarios[4].email)

var palabra = prompt("Ingresa palabra")
var reversed = palabra.split('').reverse().join('')
if(palabra == reversed){
    console.log('Palindromo')
}else{
    if(palabra != reversed){
        console.log('Capicua')
    }
}