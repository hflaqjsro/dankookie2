import MainController from '../controllers/MainController.js';
import View from './View.js'

const tag = '[QuestionView]';

const QuestionView = Object.create(View);

QuestionView.setup = function (el) {
    this.init(el);
    this.ABtn = document.querySelector("#A");
    this.BBtn = document.querySelector("#B");
    this.showQuestion();
}

QuestionView.showQuestion = function (el) {
    this.show();
    this.ABtn.addEventListener('click', e => this.AonClick(e));
    this.BBtn.addEventListener('click', e => this.BonClick(e));
    //MainController.next();
}

QuestionView.AonClick = function() {
    console.log(tag, 'AonClick');
    this.type = document.querySelector('#type').getAttribute('value');
    this.preValue = document.querySelector("#"+this.type).getAttribute('value');
    MainController.preValuePlus();
    MainController.next();
}

QuestionView.BonClick = function() {
    console.log(tag, 'BonClick');
    MainController.next();
}

/*
$("#A").click(function(){
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});

$("#B").click(function(){
    next();
});
*/

export default QuestionView;