let scoreEl1=document.getElementById("score_elem1")
let scoreEl2=document.getElementById("score_elem2")
let count=0
let count1=0
function A_add1()
{
    
    count=count+1;
     scoreEl1.textContent= count;
}
function A_add2()
{
    count=count+2;
     scoreEl1.textContent= count;
     
}
function A_add3()
{
    count=count+3;
     scoreEl1.textContent= count;
     
}
function B_add1()
{
    
    count1=count1+1;
     scoreEl2.textContent= count1;
}
function B_add2()
{
    count1=count1+2;
     scoreEl2.textContent= count1;
     
}
function B_add3()
{
    count1=count1+3;
     scoreEl2.textContent= count1;
     
}
function reset_score1()
{
    scoreEl1.textContent= 0;
    count=0;
}
function reset_score2()
{
    scoreEl2.textContent= 0;
    count1=0;
}
function newgame()
{
    scoreEl1.textContent= 0;
    count=0;
    scoreEl2.textContent= 0;
    count1=0;
}
console.log(count)
