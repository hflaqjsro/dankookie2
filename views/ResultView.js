import View from './View.js'
import Result02View from './Result02View.js'

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el){
    this.init(el);
    this.XBtn = document.querySelector('#X');
    this.hiddenResult02();
    return this;
}

ResultView.hiddenResult02 = function(el){
    this.XBtn.addEventListener('click', e => this.onClick(e));
}

ResultView.onClick = function (e) {
    console.log('XBtn_onClick');
    this.show();
    Result02View.hide();
}

export default ResultView;