d1=document.querySelector('#d1')
cear=document.querySelector('#c')
function display(x){
    d1.value += x;


}
function calculate(){
    d1.value = eval(d1.value);
}

cear.addEventListener("click",()=>{
    d1.value="";
}
)
let length=d1.value.length;
function backspace(){
   let f=d1.value.slice(length,length-1);
   
  d1.value=f;
}