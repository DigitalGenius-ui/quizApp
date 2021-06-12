let startBtn = document.querySelector(".start");
let infoPopup = document.querySelector(".information");
let exitBtn = infoPopup.querySelector(".exit-btn");
let continueBtn = infoPopup.querySelector(".continue-btn");
let queQustion = document.querySelector(".quize-questions");
let optionList = document.querySelector(".option-list");

startBtn.onclick = ()=>{
    infoPopup.classList.add("open");
}

exitBtn.onclick = ()=>{
    infoPopup.classList.remove("open");
}
continueBtn.onclick = ()=>{
    queQustion.classList.add("open");
    quizeOut(0)
    pageNum(1);
}

let count = 0;
let queNum = 1

// if next btn is clicked.... 
let nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () =>{
    if(count < allQuestion.length - 1){
        count++
        queNum++
    }
    quizeOut(count);
    pageNum(queNum);
}

function quizeOut(index){
let queTitle = document.querySelector(".title1");
let tgeQue = "<h1>" + allQuestion[index].num + ". " + allQuestion[index].question + "</h1>";

let optionTag = '<div class="answer1"><p>' + allQuestion[index].options[0] + '</p></div>' +
                '<div class="answer1"><p>'+ allQuestion[index].options[1] +'</p></div>' +
                '<div class="answer1">'+ allQuestion[index].options[2] +'<p></p></div>' +
                '<div class="answer1">'+ allQuestion[index].options[3] +'<p></p></div>';
optionList.innerHTML = optionTag;
queTitle.innerHTML = tgeQue;
const optionPart = optionList.querySelectorAll(".answer1");
for (let i = 0; i < optionPart.length; i++){
    optionPart[i].setAttribute("onclick", "isAnswerRight(this)");
}
}

let wrongIcon = '<div class="icon"><i class="far fa-times-circle"></i></div>';
let correctIcon = '<div class="icon"><i class="far fa-check-circle"></i></div>';

function isAnswerRight(answer){
    let userAnswer = answer.textContent;
    let answerCorrect = allQuestion[count].answer;
    let allOption = optionList.children.length;
    if(userAnswer == answerCorrect){
        answer.classList.add("right");
    }else{
        answer.classList.add("wrong");
        answer.insertAdjacentHTML("beforeend", wrongIcon);
    }
    for (let i = 0; i < allOption; i++){
        optionList.children[i].classList.add("disabled");
    }
    for (let i = 0; i < allOption; i++){
        if(optionList.children[i].textContent == answerCorrect){
            optionList.children[i].setAttribute("class", "answer1 right")
            optionList.children[i].insertAdjacentHTML("beforeend", correctIcon);
        }
    }
}



function pageNum(index){
let pageNumber = document.querySelector(".page-number");
let numinner = '<span><p>' + index +'</p> of <p>' + allQuestion.length +'</p> Questions</span> ';
pageNumber.innerHTML = numinner;
}



