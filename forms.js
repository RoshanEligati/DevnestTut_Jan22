// document.getElementById('username').addEventListener('keypress',function ro(event){
//     let sentence = ''
//     console.log(typeof(event.key))
//     let array = ['1','2','3','4','5','6','7','8','9','0']
//     if(array.includes(event.key)){
//         alert('enter characters not numbers')
//     }
//     else{
//         sentence+=event.key
//     }
//     return sentence
// })
// document.getElementById('submit').addEventListener('click',function (){
//     alert(ro())
// })
// document.addEventListener('click',function (event){
//     console.log(event)
// })
document.querySelector('form').addEventListener('submit',function (event){
    // event.preventDefault()
    const form=event.target
    console.log(event)
    console.log('username is ',form.username.value)
    console.log('password is ',form.password.value)
    console.log('email is ',form.email.value)
    // event.stopPropagation()
})
