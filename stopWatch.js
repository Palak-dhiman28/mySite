let start=document.getElementById("circle2");
let lap=document.getElementById("circle1");
let reset=document.getElementById("circle3");
let para1=document.getElementById("p1");
let para2=document.getElementById("p2");
let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let mili=document.getElementById("milisec");
let result=document.getElementById("result");
let hlo=0;
let count=0;
let state1=1;
let state2=1;
let id;

start.addEventListener("click",function(){
    if(state1==1)
    {
    para2.innerText="STOP";
    state1=2;

    id=setInterval(() => {
        if(mili.innerHTML==100)
        {
            count=0;
            mili.innerHTML=0;
            if(parseInt(sec.innerHTML)<60)
            {
                sec.innerHTML=parseInt(sec.innerHTML)+1;
            }
            else if(parseInt(min.innerHTML)<60)
            {
                min.innerHTML=parseInt(min.innerHTML)+1;
            }
            else{
                hr.innerHTML=parseInt(hr.innerHTML)+1;
                min.innerHTML=0;
                sec.innerHTML=0;
            }
        }
        else{
            mili.innerHTML=count++; 
        }
    }, 10)
    }
    else if(state1==2)
    {
        para2.innerText="START";
        state1=1;
        clearInterval(id);
    }
    
});

lap.addEventListener("click",function(){
    if(state1==2)
    {
     let lapp=document.createElement("div");
     result.style.display="block";
     result.style.boxShadow="1px 1px 20px orangered;"
     lapp.setAttribute("id","lapp");
    //  state1=2;
     let all=hr.innerHTML+":"+min.innerHTML+":"+sec.innerHTML+":"+mili.innerHTML;
     lapp.innerHTML=all;
     result.appendChild(lapp);
    }
    else{
        alert("PLEASE START STOPWATCH");
    }
});

reset.addEventListener("click",function(){
    window.location.reload();
})