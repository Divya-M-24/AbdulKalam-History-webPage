document.getElementById('button').addEventListener('click',()=>{

var username=document.getElementById('name').value
var password=document.getElementById('pwd').value

console.log(username);
console.log(password);

if(username==='divya' || password==='usha')
{
window.location='Apj.html'
}
else{
alert('invalid')
}
})
