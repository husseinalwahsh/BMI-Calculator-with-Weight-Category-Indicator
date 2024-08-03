let age=document.getElementById("age");
let long=document.getElementById("long");
let clul=document.getElementById("clul");
let di=document.getElementById("di")
clul.onclick=function(){
    let w=clu();
    if(w<18){
     
       document.getElementById("di").innerHTML="نحافة "
       document.getElementById("di").style.color="blue"
    }else if(w>=18 && w<=24.9){
             document.getElementById("di").innerHTML="وزن مثالي "
             document.getElementById("di").style.color="#008000"
    }else if(w>=25 && w<=29.9){
        document.getElementById("di").innerHTML="وزن زائد "
        document.getElementById("di").style.color=  "rgb(102, 156, 102)"
}else if(w>=30 && w<=34.9){
    document.getElementById("di").innerHTML="سمنة من الدرجة الاولى "
    document.getElementById("di").style.color="rgb(152, 52, 52)"
}else if(w>=35 && w<=39.9){
    document.getElementById("di").innerHTML="سمنة من الدرجة الثانية "
    document.getElementById("di").style.color="rgb(208, 28, 28)"
}else{
document.getElementById("di").innerHTML="سمنة خطيرة"
document.getElementById("di").style.color="red"
}
}
function clu(){

    ret=document.getElementById("age").value/(document.getElementById("long").value*document.getElementById("long").value);
    
    return ret;
}