import View from './View.js'

const tag = '[MainView]';

const MainView = Object.create(View);

MainView.setup = function (el) {
    this.init(el);
    this.startBtn = document.querySelector('.start_btn_02');
    this.hiddenStart();
    return this;
}

MainView.hiddenStart = function (el) {
    this.show();
    console.log(tag, 'hiddenStart');
    this.startBtn.addEventListener('click', e => this.onClick(e));
}

MainView.onClick = function (e) {
    console.log('startBtn_onClick');
    this.hide();
}
export default MainView;