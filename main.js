
// let element=document.getElementById("clickme")
// console.log(element)
// function onHandle(event){
//     console.log(event)
// }

// document.getElementById("start").addEventListener('click',function hellox(){
//     document.addEventListener('mouseover',onHandle)
// })
// document.getElementById('stop').addEventListener('click',someFunction)
document.querySelector('.parent').addEventListener('click',function  (event){
    console.log('parent click happened')
},true)
document.querySelector('.child').addEventListener('click',function  (event){
    console.log('child click happened')
    // event.stopPropagation()
},true)
document.getElementById('sub-child').addEventListener('click',function  (event){
    console.log('sub child click happened')
    // event.stopPropagation()
},true)
// element.addEventListener('click',function hello(){
//     alert('hi')
// })
// function someFunction  () {
//     var name = prompt('please enter ur name ')
//     document.getElementById('sometext').innerHTML='hi '+name+' hello'
// }
// document.addEventListener('keypress',function(e){
//     // console.log(e.key)

// })