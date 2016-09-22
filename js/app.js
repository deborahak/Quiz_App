$(document).ready(function() {
    var nextQuestion = 0;
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

    ]; // an array of objects; numbers, etc.

    $("#nowQuestion").html(questions[0].question + "<br/>");
    // agnostic
    for (var i = 0; i < questions[0].answers.length; i++) {
        $('#nowQuestion').append('<input type="radio">' + questions[0].answers[i] + ' <br/>');
    } // li??
    // hint: arrays --> for loop
    $(".nxt").on("click", function(event) {
        event.preventDefault();
        nextQuestion++;

        // IF WE HAVE REACHED THE LAST question
        //   CONGRATULATE QUIZ TAKER
        // ELSE
        //   SHOW THE NEXT question
        //   ===, < , > , !

        if (nextQuestion === questions.length) {
            alert("Congratulations! You finished!");
        } else {


            $("#nowQuestion").html(questions[nextQuestion].question + "<br/>");
            // agnostic
            for (var i = 0; i < questions[nextQuestion].answers.length; i++) {
                $('#nowQuestion').append('<input type="radio">' + questions[nextQuestion].answers[i] + ' <br/>');
            } // li??
        }
    });





});
