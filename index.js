let num=0;
var interval = null;    
const demo=document.getElementById('demo')
function startbtn(){

    
   interval= setInterval(()=>{
        demo.innerHTML=num++;
        
    },1000)

    
}

function stopwatch(){
    clearInterval(interval)

}
