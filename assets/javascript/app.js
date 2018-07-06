var myQuestions = [
    {
        question: "what is ash's first pokemon?",
        answers: {
            a: "meowth",
            b: "pikachu",
            c: "muk",
            d: "lapras",
        },
        correctAnswer: "b"
    },
    {
        question: "which one is a water type?",
        answers: {
            a: "zappdos",
            b: "poliwrath",
            c: "mewtwo",
            d: "zigzagoon",
        },
        correctAnswer: "b"
    },
    {
        question: "what is the mobile enyclopedia that records pokemon information?",
        answers: {
            a: "pokedex",
            b: "pokereader",
            c: "pocketpoke",
            d: "pokoinfo",
        },
        correctAnswer: "a"
    },
    {
        question: "what is electric types only weakness?",
        answers: {
            a: "fire",
            b: "rock",
            c: "bug",
            d: "ground",
        },
        correctAnswer: "d"
    },
    {
        question: "what is the evolution of squirtle?",
        answers: {
            a: "torterra",
            b: "turtoise",
            c: "warturtle",
            d: "squartle",
        },
        correctAnswer: "c"
    },
]
$(document).ready(function () {
    
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
        
        function showQuestions(questions, quizContainer) {
            var output = [];
            var answers;
            
            for(var i=0; i < questions.length; i++){
                
                answers = [];
                
                for(letter in questions[i].answers){
                    answers.push(
                        '<label'
                        + '<input type="radio" name="questions'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                    );
                }
                ouput.push(
                    '<div class="<question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }
            quizContainer.innerHTML = output.join('');
        }
        
        function showResults(questions, quizContainer, resultsContainer){
            
            var answerContainer = quizContainer.querySelectorAll('.answers');
            
            var userAnswer = '';
            var numCorrect = 0;

            for(var i=0; i<questions.length; i++){
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
                if(userAnswer===questions[i].correctAnswer){
                    
                    numCorrect++;
                    
                    answerContainers[i].style.color = 'lightgreen';
                }
                
                else{
                    
                    answerContainers[i].style.color = 'red';
                }
            }
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }
        
        showQuestions(questions, quizContainer);
        
        submitButton.onclick = function(){
            
            showResults(questions, quizContainer, resultsContainer);
        }
    }
    var quizContainer = document.getElementById('#quiz');
    var resultsContainer = document.getElementById('#results');
    var submitButton = document.getElementById('#submit');
    
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
});


// var questions = [ "Q1", "Q2"]
// var questionIndex = 0;
// setInterval(function(){
    //     console.log(questions[questionIndex]);
    //     questionIndex++;
    //     if ( questionIndex >= questions.length ) {
        //         clearInterval( intervalId );
        //     }
        // }, 3000);