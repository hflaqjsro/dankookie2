import View from "./View.js";
import QuestionView from "./QuestionView.js";

const tag = "[MainView]";

const MainView = Object.create(View);

MainView.setup = function (el) {
  this.init(el);
  this.start_img = document.querySelector('.start_img');
  this.randomNumber = this.genRandom();
  this.paintImage(this.randomNumber);
  this.startBtn = document.querySelector(".start_btn_02");
  this.hiddenStart();
  return this;
};

MainView.hiddenStart = function (el) {
  this.show();
  console.log(tag, "hiddenStart");
  this.startBtn.addEventListener("click", (e) => this.onClick(e));
};

MainView.onClick = function (e) {
  console.log("startBtn_onClick");
  this.hide();
  QuestionView.setup(document.querySelector(".question"));
};


MainView.genRandom = function() {
  this.number = Math.floor(Math.random() * 10);
  return this.number;
}

MainView.paintImage = function(imgNumber){
  this.image = new Image();
  this.image.src = 'img/'+(imgNumber)+'.png';
  this.image.classList.add("start_png");
  this.start_img.appendChild(this.image);
}
export default MainView;
