const quizData = [
    {
        question: "Does your gum bleed?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Is there swelling in the gums ?",
        a: "Yes",
        b: "No",
        
        correct: "b",
    },
    {
        question: "What is the most symptom you feel?",
        a: "Bad breath",
        b: "Painful chewing",
        c: "Bright red, dusky red or purplish gums",
        d: "Pus between your teeth and gums",
        correct: "b",
    },
    {
        question: "When do you feel the pain the most?",
        a: "when you brush",
        b: "when you eat",
        c: "in the evening",
        d: "no specific time",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Best Doctor for your case is</h2>
           <h2> Doctor Mohammad amir </h2>
           <h3>  specialized in Cosmetic Dentistry, Endodontics</h3>
           <h3> Universty Of Jordan</h3>

       <button 
        onclick="window.location.href='file:///C:/Users/Dell/Desktop/hospital%20website/main.html?';"> Book Now <button/>
           `
       }
    }
})