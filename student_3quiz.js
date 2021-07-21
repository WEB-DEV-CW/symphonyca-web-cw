var quez = document.getElementById('musicquiz');
var infobox = document.getElementById('infobox');
quez.style.display = "none";
infobox.style.display = "block";



function startQuiz(){
    quez.style.display = "block";
    infobox.style.display = "none";
    var oneMinutes = 60 * 1;
    var display = document.getElementById('timer');
    startTimer(oneMinutes, display);
}




var isTimerOn = false;
var time = "00:00:00";
var timerClock = null;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    isTimerOn = true;

    
    timerClock =  setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            time = "00:00:"+(60-seconds);
            display.textContent = "00:"+minutes + ":" + seconds;
    
            if (--timer < 0) {
                // timer = duration;
                check();
                
                
            }
        }, 1000);
    

    
}

function getRadioValue( radioArray ) {
    var i;
    for ( i = 0; i < radioArray.length; i++ ) {
       if ( radioArray[ i ].checked ) { 
          return radioArray[ i ].value;
       }
    }
    return "";
 }
 


function check() {
    clearInterval(timerClock);
    var c = 0;
    a = 0;
    var q1 = getRadioValue(document.quiz.question1);
    var q2 = getRadioValue( document.quiz.question2);
    var q3 = getRadioValue(document.quiz.question3);
    var q4 = getRadioValue(document.quiz.question4);
    var q5 = getRadioValue(document.quiz.question5);
    var q6 = getRadioValue(document.quiz.question6);
    var q7 = getRadioValue(document.quiz.question7);
    var q8 = getRadioValue(document.quiz.question8);
    var q9 = getRadioValue(document.quiz.question9);
    var q10 = getRadioValue(document.quiz.question10);

    if (q1 == "JUNE 21") { (c += 2) }
 else { (c -= 1) }
    if (q1 == "JUNE 21") { (a += 1) }

    if (q2 == "A.R RAHMAN") { (c += 2) }
    else { (c -= 1) }
    if (q2 == "A.R RAHMAN") { (a += 1) }

    if (q3 == "7") { (c += 2) }
    else { (c -= 1) }
    if (q3 == "7") { (a += 1) }

    if (q4 == "RAVANAHATHA") { (c += 2) }
    else { (c -= 1) }
    if (q4 == "RAVANAHATHA") { (a += 1) }

    if (q5 == "CLARENCE WIJENWARDENA") { (c += 2) }
    else{ (c -= 1) }
    if (q5 == "CLARENCE WIJENWARDENA") { (a += 1) }

    if (q6 == "UNITED STATES") { (c += 2) }
    else { (c -= 1) }
    if (q6 == "UNITED STATES") { (a += 1) }

    if (q7 == "BEAUTY AND THE BEAST") { (c += 2) }
    else{ (c -= 1) }
    if (q7 == "BEAUTY AND THE BEAST") { (a += 1) }

    if (q8 == "GRAMMY AWARD") { (c += 2) }
    else { (c -= 1) }
    if (q8 == "GRAMMY AWARD") { (a += 1) }

    if (q9 == "TAYLOR SWIFT") { (c += 2) }
    else { (c -= 1) }
    if (q9 == "TAYLOR SWIFT") { (a += 1) }

    if (q10 == "STICK OF A VIOLIN") { (c += 2) }
    else { (c -= 1) }
    if (q10 == "STICK OF A VIOLIN") { (a += 1) }


    var txt = "THE NUMBER OF QUESTIONS YOU HAVE ANSWERED CORRECTLY"
    document.write("<p>:" + txt.big() + "</p>")
    document.write(a);

    var txt = "YOUR MARKS";
    document.write("<p>:" + txt.big() + "</p>")
    document.write(c);

var timetxt="you have done within"
    document.write("<p>:" + timetxt.fontsize(5) + "</p>")
    var timenewtxt="hour:mins:sec ="
    document.write("<p>:"+timenewtxt.fontsize(5))+"</p>"
    document.write(time );


    if (c <=11 ) {
        var text = "OHH, VERY BAD"
        document.write("<p>:" + text.fontsize(7) + "</p>")
        document.body.style.backgroundColor = "#dc49498c";

    }


    if (c >= 8 && c>11) {
        var text = "WOW,KEEP IT UP"
        document.write("<p>:" + text.fontsize(7) + "</p>")
        document.body.style.backgroundColor = "#92c792";

    }
    
    
    if (q1 == "JUNE 21") {
        var text1 = "Q1 IS CORRECT."
        document.write("<p>:" + text1.fontsize(4) + "</p>")

    }
    if (q1 != "JUNE 21") {
        var text1 = "Q1 IS INCORRECT. AND THE CORRECT ANSWER IS JUNE21."
        document.write("<p>:" + text1.fontsize(4) + "</p>")
    }

    if (q2 == "A.R RAHMAN") {
        var text2 = "Q2 IS CORRECT."
        document.write("<p>:" + text2.fontsize(4) + "</p>")
    }

    if (q2 != "A.R RAHMAN") {
        var text2 = "Q2 IS INCORRECT. AND THE CORRECT ANSWER IS A.R RAHMAN."
        document.write("<p>:" + text2.fontsize(4) + "</p>")
    }

    if (q3 == "7") {
        var text3 = "Q3 IS CORRECT."
        document.write("<p>:" + text3.fontsize(4) + "</p>")
    }else{var text3 = "Q3 IS INCORRECT AND THE CORRECT ANSWER IS 7."
    document.write("<p>:" + text3.fontsize(4) + "</p>")}

    


    if (q4 == "RAVANAHATHA") {
        var text4 = "Q4 IS CORRECT."
        document.write("<p>:" + text4.fontsize(4) + "</p>")
    }

    if (q4 != "RAVANAHATHA") {
        var text4 = "Q4 IS INCORRECT. AND THE CORRECT ANSWER IS RAVANAHATHA."
        document.write("<p>:" + text4.fontsize(4) + "</p>")
    }

    if (q5 == "CLARENCE WIJENWARDENA") {
        var text5 = "Q5 IS CORRECT."
        document.write("<p>:" + text5.fontsize(4) + "</p>")
    }

    if (q5 = ! "CLARENCE WIJENWARDENA") {
        var text5 = "Q5 IS INCORRECT. AND THE CORRECT ANSWER IS CLARENCE WIJENWARDENA."
        document.write("<p>:" + text5.fontsize(4) + "</p>")
    }

    if (q6 == "UNITED STATES") {
        var text6 = "Q6 IS CORRECT."
        document.write("<p>:" + text6.fontsize(4) + "</p>")
    }

    if (q6 != "UNITED STATES") {
        var text6 = "Q6 IS INCORRECT. AND THE CORRECT ANSWER IS UNITED STATES. "
        document.write("<p>:" + text6.fontsize(4) + "</p>")
    }

    if (q7 == "BEAUTY AND THE BEAST") {
        var text7 = "Q7 IS CORRECT."
        document.write("<p>:" + text7.fontsize(4) + "</p>")
    }

    if (q7 != "BEAUTY AND THE BEAST") {
        var text7 = "Q7 IS INCORRECT AND THE CORRECT ANSWER IS BEAUTY AND THE BEAST."
        document.write("<p>:" + text7.fontsize(4) + "</p>")
    }

    if (q8 == "GRAMMY AWARD") {
        var text8 = "Q8 IS CORRECT."
        document.write("<p>:" + text8.fontsize(4) + "</p>")
    }

    if (q8 != "GRAMMY AWARD") {
        var text8 = "Q8 IS INCORRECT. AND THE CORRECT ANSWER IS GRAMMY AWARD."
        document.write("<p>:" + text8.fontsize(4) + "</p>")
    }

    if (q9 == "TAYLOR SWIFT") {
        var text9 = "Q9 IS CORRECT."
        document.write("<p>:" + text9.fontsize(4) + "</p>")
    }

    if (q9 != "TAYLOR SWIFT") {
        var text9 = "Q9 IS INCORRECT. AND THE CORRECT ANSWER IS TAYLOR SWIFT."
        document.write("<p>:" + text9.fontsize(4) + "</p>")
    }

    if (q10 == "STICK OF A VIOLIN") {
        var text10 = "Q10 IS CORRECT."
        document.write("<p>:" + text10.fontsize(4) + "</p>")
    }

    if (q10 != "STICK OF A VIOLIN") {
        var text10 = "Q10 IS INCORRECT. AND THE ANSWER IS STICK OF A VIOLIN."
        document.write("<p>:" + text10.fontsize(4) + "</p>")
    }
















}
