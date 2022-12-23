//general method
var arrayAnswer = 
[true, false, false, 
false, false, true,
true, false, false,
false, true, false,
true, false, false];

var matrixAnswer = 
[[true, false, false], 
[false, false, true], 
[true, false, false], 
[false, true, false], 
[true, false, false]];

var allAnswers = document.querySelectorAll('.answer');


for (var i=0; i<allAnswers.length; i++) {
    allAnswers[i].onclick = function () {
        if (arrayAnswer[i]) {
            document.getElementById('true1').style.display = 'inline';
            document.getElementById('false1').style.display = 'none';
        } else {
            document.getElementById('false1').style.display = 'inline';
            document.getElementById('true1').style.display = 'none';
        }
    }

}


//only for 5 questions
/*
var firstAnswer = document.querySelectorAll('.first');
var secondAnswer = document.querySelectorAll('.second');
var thirdAnswer = document.querySelectorAll('.third');
var fourthAnswer = document.querySelectorAll('.fourth');
var fifthAnswer = document.querySelectorAll('.fifth');

//1
for (let i=0; i<firstAnswer.length; i++) {
    firstAnswer[i].onclick = function () {
        if (i === 0) {
            document.getElementById('true1').style.display = 'inline';
            document.getElementById('false1').style.display = 'none';
        } else {
            document.getElementById('false1').style.display = 'inline';
            document.getElementById('true1').style.display = 'none';
        }
    }
}
//2
for (let i=0; i<secondAnswer.length; i++) {
    secondAnswer[i].onclick = function () {
        if (i === 2) {
            document.getElementById('true2').style.display = 'inline';
            document.getElementById('false2').style.display = 'none';
        } else {
            document.getElementById('false2').style.display = 'inline';
            document.getElementById('true2').style.display = 'none';
        }
    }
}
//3
for (let i=0; i<thirdAnswer.length; i++) {
    thirdAnswer[i].onclick = function () {
        if (i === 0) {
            document.getElementById('true3').style.display = 'inline';
            document.getElementById('false3').style.display = 'none';
        } else {
            document.getElementById('false3').style.display = 'inline';
            document.getElementById('true3').style.display = 'none';
        }
    }
}
//4
for (let i=0; i<fourthAnswer.length; i++) {
    fourthAnswer[i].onclick = function () {
        if (i === 1) {
            document.getElementById('true4').style.display = 'inline';
            document.getElementById('false4').style.display = 'none';
        } else {
            document.getElementById('false4').style.display = 'inline';
            document.getElementById('true4').style.display = 'none';
        }
    }
}
//5
for (let i=0; i<fifthAnswer.length; i++) {
    fifthAnswer[i].onclick = function () {
        if (i === 0) {
            document.getElementById('true5').style.display = 'inline';
            document.getElementById('false5').style.display = 'none';
        } else {
            document.getElementById('false5').style.display = 'inline';
            document.getElementById('true5').style.display = 'none';
        }
    }
}
*/

