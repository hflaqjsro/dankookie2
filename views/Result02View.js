import View from './View.js'
import ResultView from './ResultView.js'

const tag = '[Result02View]';

const Result02View = Object.create(View);

Result02View.setup = function(el){
    this.init(el);
    this.YBtn = document.querySelector('#Y');
    this.hiddenResult();
    return this;
}

Result02View.hiddenResult = function(el){
    this.YBtn.addEventListener('click', e => this.onClick(e));
}

Result02View.onClick = function (e) {
    console.log('YBtn_onClick');
    this.show();
    ResultView.hide();
}

export default Result02View;