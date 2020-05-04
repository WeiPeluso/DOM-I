let secondTens=document.querySelector('#secondTens');
let secondOnes=document.getElementById('secondOnes');
let msHundres=document.getElementById('msHundreds');
let msTens=document.getElementById('msTens');

secondTens.textContent="0"
secondOnes.textContent="0";
msHundres.textContent="0";
msTens.textContent="0";

let msTensNumber=0;
let secondOnesNumber=0;
let secondTensNumber=0;

var timer = setInterval(function(){

    if(msTensNumber===9){
        msTensNumber=0;
        secondOnesNumber=secondOnesNumber+1;
    }
    else{
       msTensNumber=msTensNumber+1;
    }

    if(secondOnesNumber===9){
        secondOnesNumber=0;
        secondTensNumber=secondTensNumber+1;
    }

    secondTens.textContent=secondTensNumber;
    secondOnes.textContent=secondOnesNumber;
    msHundres.textContent=msTensNumber;


    if(secondTensNumber===1){
        secondTens.style.color="red";
        secondOnes.style.color="red";
        msHundres.style.color="red";
        msTens.style.color="red";
        clearInterval(timer);
    }
    },100);