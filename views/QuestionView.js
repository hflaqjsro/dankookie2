import View from './View.js'

const tag = '[QuestionView]';

const QuestionView = Object.create(View);

QuestionView.setup = function (el) {
    this.init(el);
    this.showQuestion();
}

QuestionView.showQuestion = function (el) {
    this.show();
    next();
}

$("#A").click(function(){
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
document.querySelector("#B").click()

$("#B").click(function(){
    next();
});
function next () {
    var num = 1;
    if(num = 13){                
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
    }else {
        $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
        $("#pro_num").html(q[num]["pro_num"]);
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"])
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
$("#Y").click(function(){
    $(".result").hide();
    $(".result02").show();
 });
 $("#X").click(function(){
    $(".result02").hide();
    $(".result").show();
 });
export default QuestionView;