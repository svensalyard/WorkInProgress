const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    if (correct) {
        document.write('<p>Correct</p>');
    } else {
        document.write('<p>Wrong</p>');
    }

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 1?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is 2?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is 3?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is 4?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
]


var timerContainer = document.querySelector('#timer')
var timer = 0
var timeInterval

startButton.addEventListener('click', function(e) {
    clearInterval(timeInterval)
    console.log('clicked')
    timer = 30
    timeInterval = setInterval(function(){
        timer--
        timerContainer.textContent = timer
        if (timer === 0) {
            clearInterval(timeInterval)
            alert('TIMES UP')
        }
    }, 1000)
})

