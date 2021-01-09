import {quizEventsHandler} from './managerQuiz.js';

class QuizClass {
    constructor(_parent, _question, _answer, _options){
        this.parent   = _parent;
        this.question = _question;
        this.answer   = _answer;
        this.options  = _options;

        this.rander();
        this.sendAnswer();
    }
    rander(){
        $(this.parent).html(`
            <h5 class="card-title text-center my-4">${this.question}</h5>
            <button type="button" class="option btn btn-lg btn-block mt-5">${this.options[0]}</button>
            <button type="button" class="option btn btn-lg btn-block mt-1">${this.options[1]}</button>
            <button type="button" class="option btn btn-lg btn-block mt-1">${this.options[2]}</button>
            <button type="button" class="option btn btn-lg btn-block my-1">${this.options[3]}</button>
        `);
    }
    sendAnswer(){ 
        quizEventsHandler(this.answer);
    }
}

export default QuizClass;