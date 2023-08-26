const QUESTION =[{
    Q:"1.WHAT REPRESENT DOCTYPE KEYWORD IN HTML?",
    A:[{
        text:"html version 5",correct:true
    },{
        text:"html version 4",correct:false
    },
    {
        text:"html version 3",correct:false
    }
]
},
{
    Q:"2.minor vesrion of bootstrap ?",
A:[{
    text:"bootstrap version 5",correct:false
},{
    text:"bootstrap version version 4",correct:false
},
{
    text:"bootstrap version version 3",correct:true
}
]

},
{
Q:"3.React js is js framework or js library ?",
A:[{
    text:"js library ",correct:true
},{
    text:"js framework",correct:false
}

]

},
{
Q:"4.which js frameworks has component based appraoch",
A:[{
    text:"angular",correct:false
},{
    text:"node ",correct:false
},
{
    text:"react js",correct:true
}
]

}
]
let quec=0;
let score=0;
let load =function(){
    const quest=document.getElementById("QUES");
    const opt=document.getElementById("ops");
    quest.textContent=QUESTION[quec].Q;
    opt.innerHTML=" ";
    for(let i=0;i<QUESTION[quec].A.length;i++){
        const choicd=document.createElement("div");
        const choic= document.createElement("input");
        const choicl=document.createElement("label");
        choic.type="radio";
        choic.name="ans";
        choic.value=i;
        choicl.textContent=QUESTION[quec].A[i].text;
        choicd.appendChild(choic);
        choicd.appendChild(choicl);
        opt.appendChild(choicd);

    }
}
load();
let loadscore=function(){
    const totalsc=document.getElementById("score");
    totalsc.textContent=`You scored ${score} out of ${QUESTION.length}`;

}
let next=function(){
    if(quec<QUESTION.length-1){
        quec++;
        load();
    }
    else{
        document.getElementById("ops").remove;
        document.getElementById("QUES").remove;
        document.getElementById("btn").remove;
        loadscore();
    }
}
let prev=function(){
    if(quec<QUESTION.length-1){
     quec--;
     load();

    }
    else{
        document.getElementById("ops").remove;
        document.getElementById("QUES").remove;
        document.getElementById("btn").remove;
        loadscore();
    }
}
let checkans=function(){
    console.log("hi");
    const selected = parseInt(document.querySelector('input[name="ans"]:checked').value);
    if(QUESTION[quec].A[selected].correct){
        score++;
        console.log("correct");
        next();
        }else{
            next();
        }
}
let checkprev=function(){
prev();
}
