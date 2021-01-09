import {ar_trivia} from './ar_quiz.js';
import QuizClass from './classQuiz.js';

let successGraph = 0,
    failGraph    = 0,
    quizIndex    = 0,
    firstClickFlag;

export const createQuiz = () => {
    let quiz = ar_trivia[quizIndex];
    let {question, answer, options} = quiz;
    options = _.shuffle(options);
    
    new QuizClass('.card-body', question, answer, options);
    quizIndex++;
    firstClickFlag = true;
}

export const viewEventsHandler = () => {
    $('#next').on('click', () => {
        createQuiz();
        $('.cover-fail').hide();
        $('.cover-success').hide();
        $('#next').hide();
    });
}

export const quizEventsHandler = (_answer) => {
    $('.option').on('click', function(){
        if(firstClickFlag == false) return;
        firstClickFlag = false;

        if(quizIndex < 10) $('#next').show();
        else setTimeout(quizResults , 1200);

        if($(this).text() == _answer) {
            quizOnAnswer(successGraph, 'v', '.cover-success', '.success-graph');
            $(this).css({'background-color': 'rgba(98, 165, 10, 0.7)', 'color': 'white'});
        } else {
            quizOnAnswer(failGraph, 'x', '.cover-fail', '.fail-graph');
            $(this).css({'background-color': 'rgba(205, 12, 15, 0.7)', 'color': 'white'});
            $('.option').each(function(){
                if($(this).text() == _answer) $(this).css({'background-color': 'rgba(98, 165, 10, 0.7)', 'color': 'white'});
            });
        };       
    });
}

const quizOnAnswer = (_index, _isCorrect, _bgImg, _graph) => {
    _index +=10;
    $(_bgImg).show(300);
    $(_graph).css('width',`${_index}%`);
    (_isCorrect == 'v') ? successGraph +=10 : failGraph +=10;
}

const quizResults = () => {
    if(successGraph < 60) quizResult('loss', 'loss-text', 'You Lost :(');
    else if (successGraph == 100) quizResult('gold', 'gold-text', 'You Won!!!');
    else if (successGraph == 90 || successGraph == 80) quizResult('silver', 'silver-text', 'Very Well!!');
    else if (successGraph < 80) quizResult('bronze', 'bronze-text', 'Not Bad!');
}

const quizResult = (_coin, _color, _heading) => {
    $('.card').hide();
    $('.result').fadeIn(1000);
    $('.result').addClass(_color);
    $(`.${_coin}`).css('display', 'flex');
    $('.result-heading').html(_heading);
    $('.result-score').html(`Your score is: ${successGraph}`);
    $('.result-text').html(`You answered ${successGraph / 10} out of 10 questions correctly`);
    $('.result-text-2').html(`You won a ${_coin} medal`);
    $('.quiz-body-cover-img').fadeIn(1000);
    $('.quiz-body-cover').show();
}