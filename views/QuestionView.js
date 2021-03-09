import View from './View.js'

const tag = '[QuestionView]';

const QuestionView = Object.create(View);

QuestionView.setup = function (el) {
    this.init(el);
    this.showQuestion();
}

QuestionView.showQuestion = function (el) {
    this.show();
}

export default QuestionView;