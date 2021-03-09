import MainView from '../views/MainView.js';
import QuestionView from '../views/QuestionView.js';

const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()');
        MainView.setup(document.querySelector('.start'));

    }
}