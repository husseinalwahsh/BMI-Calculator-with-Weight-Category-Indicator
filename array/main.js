let arr=[]

let add =document.getElementById("add")
let del =document.getElementById("del")
let ar=document.getElementById("ar")
let mood =0;
let pr=document.querySelectorAll('p')
add.onclick=function(){
    let val=document.getElementById("inp").value;
    arr.push(val)
    ar.innerHTML+=`<p>${val}</p>`
   console.log(arr)
    mood++;
}

del.onclick=function(){
    let val=document.getElementById("inp").value;
    arr.pop()
    pr[mood].document.style.
    console.log(arr)
   
}





