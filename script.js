// global variable

var timer = 60;
var score = 0;
var hitNum = 0;



// to make bubbles
function bubble() {
    
    var clutter = "";

for(var i = 1; i<= 189; i++){
    var rn = Math.floor(Math.random() * 10);
    
    clutter += `<div class="bubble">${rn}</div>`;
}    

document.querySelector("#bbtm").innerHTML = clutter;
}


// to make timeinterval
function timeinterval() {
   var interval =  setInterval(function(){
              
        document.querySelector("#timeval").textContent = timer;
        timer--;   

         if (timer < 0) {
    clearInterval(interval);
    display.textContent = "00"; }
       
    },1000) 
}

// to make randomHit
function randomHit() {
     hitNum = Math.floor(Math.random() * 10) 
    document.querySelector("#hitval").textContent = hitNum;
}


// to make score val
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



document.querySelector("#bbtm").addEventListener("click", function(dets) {
    var clickedNum = Number(dets.target.textContent);
    console.log(clickedNum);

    if (clickedNum === hitNum) {
        increaseScore();
        randomHit();
        
    }
});






// calling functions 
bubble();
timeinterval();
randomHit();
