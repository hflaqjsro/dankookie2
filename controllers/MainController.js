import MainView from '../views/MainView.js';
import QuestionView from '../views/QuestionView.js';
import ResultView from '../views/ResultView.js'
import Result02View from '../views/Result02View.js';

const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()');
        MainView.setup(document.querySelector('.start'));

        Result02View.setup(document.querySelector('.result02'));
        ResultView.setup(document.querySelector('.result'));
    },

    preValuePlus() {
        QuestionView.preValue = parseInt(QuestionView.preValue)+1;
         //$("#"+type).val(parseInt(preValue)+1);
    },

    next() {
        var qLine = {
            1: {"title": "동아리에 신입으로 들어가서 아는 사람이 아무도 없는 상황", "type": "EI", "A": "어색한 건 못 참아 먼저 말 건다", "B": "존버가 답이야.. <br>말 걸어주길 기다린다.", "pro_num": "1/12"},
            2: {"title": "드디어 과제 끝! 이제 뭐하지?", "type": "EI", "A": "바로 술 마시러 간다", "B": "오늘은 하루 종일 못 봤던 드라마 <br>정주행이다.", "pro_num": "2/12"},
            3: {"title": "소개팅을 나가서 이상형을 만난 당신", "type": "EI", "A": "주제를 던지면서 대화를 이끌어 나간다", "B": "말을 많이 하기보다는 상대방의 <br>말을 들어준다", "pro_num": "3/12"},
            4: {"title": "소설을 끝까지 읽은 뒤 나는..", "type": "SN", "A": "아 다 읽었다", "B": "주인공이 어떻게 살아갔을지<br>상상해본다", "pro_num": "4/12"},
            5: {"title": "일을 할 때 나는", "type": "SN", "A": "매뉴얼이 있는 편을 선호한다", "B": "나만의 방식대로 매뉴얼을 만드는 걸 <br>선호한다", "pro_num": "5/12"},
            6: {"title": "술집 볼 때 1순위로 보는 요소는", "type": "SN", "A": "안주 퀄리티", "B": "분위기", "pro_num": "6/12"},
            7: {"title": "친구와의 점심 약속 메뉴 결정은 어떻게?", "type": "TF", "A": "오늘은 이거 무조건 먹어야 돼.<br>메뉴는 내가 정한다", "B": "뭐 먹어야 되지...?<br>친구에게 선택권을 넘긴다", "pro_num": "7/12"},
            8: {"title": "조원이 자료조사는 해왔으나 제대로 준비를 안한 것 같다", "type": "TF", "A": "여기 여기 다시 자료조사해서 <br>건네주세요.", "B": "그래도 하긴 했으니까... <br>내가 찾아서 보강하자", "pro_num": "8/12"},
            9: {"title": "친구의 이별 소식을 들은 당신", "type": "TF", "A": "왜 헤어졌어?", "B": "말할 때까지 기다려준다", "pro_num": "9/12"},
            10: {"title": "시작도 안한 과제 마감일 3일 전 친구로부터 놀자는 전화에", "type": "JP", "A": "기다려봐 과제부터 먼저 끝내고", "B": "내일의 나야 고생해라!<br> 오늘의 나는 일단 놀게", "pro_num": "10/12"},
            11: {"title": "수강신청 계획을 짜놓은 당신", "type": "JP", "A": "플랜 C까지 미리 계획해 놓았다", "B": "플랜 C란 없다. <br>하나의 시간표만 짜놨다", "pro_num": "11/12"},
            12: {"title": "나는 평소에 시험공부를..", "type": "JP", "A": "미리미리 복습까지 해놓는다", "B": "1주일 전부터 벼락치기!", "pro_num": "12/12"}
        }
        var num = 1;
        console.log(tag, 'next');
        if(num = 13){
            QuestionView.hide();
            ResultView.show();
            var mbti = "";
            
            console.log(tag, 'num=13');
            (document.getElementById('EI').getAttribute('value') < 2) ? mbti+="I" : mbti+="E";
            (document.getElementById('SN').getAttribute('value') < 2) ? mbti+="N" : mbti+="S";
            (document.getElementById('TF').getAttribute('value') < 2) ? mbti+="F" : mbti+="T";
            (document.getElementById('JP').getAttribute('value') < 2) ? mbti+="P" : mbti+="J";
            /*
            ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
            ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
            ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
            ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
            */
        } else {
            console.log(tag, 'else');
            document.querySelector('.progress-bar').setAttribute('style', 'width: calc(100/12*'+num+'%)');
            document.querySelector('#pro_num').innerHTML = qLine[num]["pro_num"];
            document.querySelector('#title').innerHTML = qLine[num]["title"];
            document.querySelector('#type').setAttribute('value', qLine[num]["type"]);
            document.querySelector('#A').innerHTML = qLine[num]["A"];
            document.querySelector('#B').innerHTML = qLine[num]["B"];
            num++;
            /*
            $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
            $("#pro_num").html(q[num]["pro_num"]);
            $("#title").html(q[num]["title"]);
            $("#type").val(q[num]["type"])
            $("#A").html(q[num]["A"]);
            $("#B").html(q[num]["B"]);
            */
        }
    }
    
}