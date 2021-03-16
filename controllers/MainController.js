import MainView from '../views/MainView.js';
import QuestionView from '../views/QuestionView.js';
import ResultView from '../views/ResultView.js'
import Result02View from '../views/Result02View.js';

import {qLine, result, result02} from '../models/QuestionModels.js';

const tag = '[MainController]'

export default {
    
    init() {
        console.log(tag, 'init()');
        MainView.setup(document.querySelector('.start'));

        Result02View.setup(document.querySelector('.result02'));
        ResultView.setup(document.querySelector('.result'));
    },

	preValuePlus(type) {
		const value = parseInt(
			document.querySelector(`#${type}`).getAttribute("value")
		);
		document.querySelector(`#${type}`).setAttribute("value", value + 1);
	},

    next() {
        console.log(tag, 'next');
        if(QuestionView.num == 13) {
            this.result();
        } else {
            this.nextQuestion();
        }
    },

    nextQuestion() {
        console.log(tag, 'else');
        console.log(tag, QuestionView.num);
        document.querySelector('.progress-bar').setAttribute('style', 'width: calc(100/12*'+QuestionView.num+'%)');
        document.querySelector('#pro_num').innerHTML = qLine[QuestionView.num]["pro_num"];
        document.querySelector('#title').innerHTML = qLine[QuestionView.num]["title"];
        document.querySelector('#type').setAttribute('value', qLine[QuestionView.num]["type"]);
        document.querySelector('#A').innerHTML = qLine[QuestionView.num]["A"];
        document.querySelector('#B').innerHTML = qLine[QuestionView.num]["B"];
        QuestionView.num++;
    },

    result() {
        QuestionView.hide();
        ResultView.show();
        var mbti = "";
        console.log(tag, 'num=13');
        (document.getElementById('EI').getAttribute('value') < 2) ? mbti+="I" : mbti+="E";
        (document.getElementById('SN').getAttribute('value') < 2) ? mbti+="N" : mbti+="S";
        (document.getElementById('TF').getAttribute('value') < 2) ? mbti+="F" : mbti+="T";
        (document.getElementById('JP').getAttribute('value') < 2) ? mbti+="P" : mbti+="J";


        //순한맛
        document.querySelector('#img_01').setAttribute('src', result[mbti]["img_01"]);
        document.querySelector('#animal').innerHTML = result[mbti]["animal"];
        
        document.querySelector('#bar_img_01').setAttribute('src', result[mbti]["bar_img_01"]);
        document.querySelector('#bar_img_02').setAttribute('src', result[mbti]["bar_img_02"]);
        document.querySelector('#bar_img_03').setAttribute('src', result[mbti]["bar_img_03"]);
        document.querySelector('#bar_img_04').setAttribute('src', result[mbti]["bar_img_04"]);
        
        for(var i = 0; i<result[mbti]["explain_02"].length; i++){
            const head = document.createElement('h4');
            head.innerText = result[mbti]["explain_02"][i];
            head.setAttribute("id", `#explain_0${i+2}`)
            document.querySelector(".result_explain").appendChild(head);
        }

        document.querySelector('#img_aa').setAttribute('src', result[mbti]["img_aa"]);
        document.querySelector('#explain_ab').innerHTML = result[mbti]["explain_ab"];
        document.querySelector('#img_ba').setAttribute('src', result[mbti]["img_ba"]);
        document.querySelector('#explain_bb').innerHTML = result[mbti]["explain_bb"];
        
        

        //매운맛
        document.querySelector('#img02_01').setAttribute('src', result02[mbti]["img02_01"]);
        document.querySelector('#animal02').innerHTML = result02[mbti]["animal02"];

        document.querySelector('#bar_img02_01').setAttribute('src', result02[mbti]["bar_img02_01"]);
        document.querySelector('#bar_img02_02').setAttribute('src', result02[mbti]["bar_img02_02"]);
        document.querySelector('#bar_img02_03').setAttribute('src', result02[mbti]["bar_img02_03"]);
        document.querySelector('#bar_img02_04').setAttribute('src', result02[mbti]["bar_img02_04"]);
        
        
        for(var i = 0; i<result02[mbti]["explain02_02"].length; i++){
            const head = document.createElement('h4');
            head.innerText = result02[mbti]["explain02_02"][i];
            head.setAttribute("id", `#explain02_0${i+2}`)
            document.querySelector(".result_explain02").appendChild(head);
        }
        document.querySelector('#img02_aa').setAttribute('src', result02[mbti]["img02_aa"]);
        document.querySelector('#explain02_ab').innerHTML = result02[mbti]["explain02_ab"];
        document.querySelector('#img02_ba').setAttribute('src', result02[mbti]["img02_ba"]);
        document.querySelector('#explain02_bb').innerHTML = result02[mbti]["explain02_bb"];

    }

}