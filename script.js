const endDate="5 june 2023  12:36 PM"

document.getElementById("end-date").innerText = endDate;
const inputs=document.querySelectorAll("input");
 function clock(){
  const end= new Date(endDate);
  const now=new Date();
   const diff=(end-now)/1000;
  /*console.log(diff);*/
  if(diff<0)
  return;
 inputs[0].value=Math.floor(diff/(3600*24));
 inputs[1].value=Math.floor((diff/3600)%24);
 inputs[2].value=Math.floor((diff/60)%60);
 inputs[3].value=Math.floor((diff)%60);
}
 clock();

/* 
1day =24 h
1hr=60 min
60 min=3600 sec
*/
setInterval(
    ()=>{
        clock()
    },
    1000
)