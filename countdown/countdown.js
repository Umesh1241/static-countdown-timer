const endDate="2 March 2024 1:03 AM";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");
const stop=document.querySelector(".stop");

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    console.log(end);
    console.log(now);
    const diff=(end-now)/1000;

    if(diff<0){
        alert("you entered wrong data");
         return;
    }
    stop.addEventListener("click",()=>{
        endDate="0 0 0 0 0";
        alert("timer stopped");
    });
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff%60);
}
clock();

setInterval(()=>{
    clock();
  },
  1000
)