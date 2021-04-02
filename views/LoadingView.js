import View from "./View.js";

const tag = "[LoadingView]";

const LoadingView = Object.create(View);

LoadingView.setup = function (el) {
  this.init(el);
  this.loading = document.querySelector(".loading");
  this.loader = document.querySelector(".loader");
  this.fadeout();
  return this;
};
LoadingView.fadeout = function(target) {
  setInterval(function(){
    document.querySelector(".loading").style.display="none";}
  , 5000);
};

export default LoadingView;
