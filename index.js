
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btn = ["red", "yellow", "green", "purple"]
let h3 = document.querySelector("h3");
let btns = document.querySelectorAll(".box-container .box");
let highestScore = [];




document.addEventListener("keypress", () => {
    if (started === false) {
        levelUp();
    }
    started = true;
})

function gameFlash(btn) {
    btn.classList.add("gameFlash")
    setTimeout(() => {
        btn.classList.remove("gameFlash")
    }, 280)
}

let levelUp = () => {
    level++;
    h3.innerText = `Level ${level}`
    let randomColorInx = Math.floor(Math.random() * 3);
    let randomColor = btn[randomColorInx];
    gameSeq.push(randomColor);
    console.log(gameSeq)
    let randomBtn = document.querySelector(`.${randomColor}`)
    gameFlash(randomBtn);
    userSeq = [];
}


let userFlash = (btn) => {
    btn.classList.add("userFlash")
    setTimeout(() => {
        btn.classList.remove("userFlash")
    }, 280)
}

for (let btn of btns) {
    btn.addEventListener("click", () => {
        userFlash(btn);
        userSeq.push(btn.innerText);
        checkAns(userSeq.length - 1)
    })
}

let checkAns = (inx) => {
    // console.log(inx)
    if (userSeq[inx] === gameSeq[inx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 500)
        }
    } else {
        let high = level;
        highestScore.push(high)
        let result = highestScore.reduce((max,el)=>{
            if(max > el){
               return max;
            }else{
               return el;
            }
           })
        h3.innerHTML = `<b>Game is Over :press any key to Start Game</b> your </br> Current Score is = ${level}.</br> <b>High Score</b> = ${result}`
        started = false;
        userSeq = [];
        gameSeq = [];
        level = 0;
        document.body.style.backgroundColor = "red"
        setTimeout(() => {
            document.body.style.backgroundColor = ""
        }, 200)
    }
}



// let highScore = (level)=>{
//    highestScore.push(level);
//    highestScore.reduce((max,el)=>{
//      if(max > el){
//         return max;
//      }else{
//         return el
//      }
//    })
// }
let highScore = highestScore.reduce
























