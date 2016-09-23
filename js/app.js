$(document).ready(function() {

    var currentQuestion = 0;
    var numberCorrect = 0;

    var questions = [
        // object literal
        {
            question: 'The Iliad was written by:',
            answers: ['Homer', 'Shakespeare', 'Ovid', 'Augustine'],
            correct: 0
        }, {
            question: 'The ruling body in the Roman Republic was:',
            answers: ['Parliament', 'the House', 'the Senate', 'the Wizengamot'],
            correct: 2
        }, {
            question: 'This philosopher was executed by hemlock for corrupting the youth of Athens',
            answers: ['Plato', 'Aristotle', 'Aristophanes', 'Socrates'],
            correct: 3
        }, {
            question: 'At its peak Rome ruled the entire Medditerranean, which they called the Mare Nostrum, meaning ',
            answers: ['Our Horse', 'The Big Drink', 'Our Sea', 'Our Water'],
            correct: 2
        }, {
            question: 'The Oracle at Delphi said Athens would defeat the Persians with a wooden wall, refering to ',
            answers: ['a wooden barricade around Athens', 'a fleet of ships', 'spears made of sacred wood', 'Ents from Middle Earth'],
            correct: 1
        }

    ]; 

    $("#nowQuestion").html(questions[0].question + "<br/>");
    // agnostic
    for (var i = 0; i < questions[0].answers.length; i++) {
        $('#nowQuestion').append('<input type="radio" name="choice" value="' + i + '">' + questions[0].answers[i] + ' <br/>');
    } 

    $(".nxt").on("click", function(event) {
        /*
        Goes to the next question
        */
        event.preventDefault();
        updateScore();
        currentQuestion++;

        if (currentQuestion === questions.length) {
            alert("Congratulations! You finished!");
            $("#farewell").html("Excellent! Your final score is " + numberCorrect)
        } else {
            $("#nowQuestion").html(questions[currentQuestion].question + "<br/>");
            // agnostic
            for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
                $('#nowQuestion').append('<input type="radio" name="choice" value="' + i + '">' + questions[currentQuestion].answers[i] + ' <br/>');
            } // li??
        }
    });

    function updateScore() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;
        } else {
            alert("So sorry...INCORRECT! Correct answer: " + questions[currentQuestion].answers[questions[currentQuestion].correct]);
        }
    }




});
