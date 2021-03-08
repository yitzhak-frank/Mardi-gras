import {createQuiz, viewEventsHandler} from './managerQuiz.js'

$(() => init());

const init = () => {
    createQuiz();
    viewEventsHandler();
};