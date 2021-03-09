import MainView from '../views/MainView.js';
import QuestionView from '../views/QuestionView.js';

const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()');
        MainView.setup(document.querySelector('.start'));
        if(document.querySelector('.start').style.display == 'none'){
            QuestionView.setup(document.querySelector('.question'))
        } else {
            
        }
    }
}