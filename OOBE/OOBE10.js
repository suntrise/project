window.temp_i = 0;
setInterval(getText,1)
function getText() {
        greet = greets.value;
        greet1 = greets1.value
        text1 = texts1.value
        text2 = texts2.value
        textbot = textsbot.value
        poem = poems.value
        end = ends.value       
        period1 = periods1.value
        period2 = periods2.value
        period3 = periods3.value
    if (yahei.checked) {
        oobeword1.style.fontFamily="微软雅黑";
        oobeword2.style.fontFamily="微软雅黑";
    }
    if (songti.checked) {
        oobeword1.style.fontFamily="宋体";
        oobeword2.style.fontFamily="宋体";
    }
}
        function changertp() {
            xgoing.style.display="block";
            oobeword1.style.display = "block";
        if(grskip.checked){
            changertp5()
            }     
        else{
            oobeword1.innerHTML = greet;            
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp2();", 2000);
                return 0;
            }
            sto = setTimeout("changertp();", 12);
        }
        }
        function changertp2() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                window.temp_i = 0;
                sto = setTimeout('changertp3();', 128);
                return 0;
            }
            sto = setTimeout("changertp2();", 12);
        }
        function changertp3() {
            oobeword1.innerHTML = greet1;
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp4();", 3000);
                return 0;
            }
            sto = setTimeout("changertp3();", 12);
        }
        function changertp4() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                window.temp_i = 0;
                sto = setTimeout('changertp5();', 128);
                return 0;
            }
            setTimeout("changertp4();", 12);
        }
        function changertp5() {
            circle.style.display="block";
            oobeword1.innerHTML = text1;
            oobeword2.innerHTML = textbot;
            oobeword2.style.display = "block";
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            oobeword2.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp6();", period1*1000);
                return 0;
            }
            sto = setTimeout("changertp5();", 12);
        }
        function changertp6() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword1.innerHTML = ""
                oobeword1.style.display = "none";
                window.temp_i = 0;
                sto = setTimeout('changertp7();', 128);
                return 0;
            }
            sto = setTimeout("changertp6();", 12);
        }
        function changertp7() {
            oobeword1.innerHTML = text2;
            oobeword1.style.display = "block";
            oobeword2.style.display = "block";
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp8();", period2*1000);
                return 0;
            }
            sto = setTimeout("changertp7();", 12);
        }
        function changertp8() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword1.innerHTML = ""
                oobeword1.style.display = "none";
                window.temp_i = 0;
                sto = setTimeout('oobeword1.innerHTML = poem;oobeword1.style.display = "block";oobeword2.style.display = "block";changertp9();', 128);
                return 0;
            }
            sto = setTimeout("changertp8();", 12);
        }
        function changertp9() {
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp10();", period3*1000);
                return 0;
            }
            sto = setTimeout("changertp9();", 12);
        }
        function changertp10() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                window.temp_i = 0;
                sto = setTimeout('changertp11();', 128);
                return 0;
            }
            sto = setTimeout("changertp10();", 12);
        }
        function changertp11() {
        if(grskip.checked){
                changertp5()
            }
        else{
            circle.style.display = "none";
            oobeword1.style.top = "44.5%";
            oobeword1.innerHTML = end;
            oobeword2.style.display = "none";
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto = setTimeout("changertp12();", 5000);
                return 0;
            }
            sto = setTimeout("changertp11();", 12);
        }
        }
        function changertp12() {
            //alert("Unexpected Error\nWindows not installed.");
            sto = ""
            window.temp_i = 0;
            oobeword1.style.opacity = (window.temp_i/100);
            changertp()
        }
     function noText(){
        oobeword1.style.display = "none"
        oobeword2.style.display = "none"
        xgoing.style.display = "block";
        circle.style.display = "block"
        }
function hotkey(){
var a=window.event.keyCode;
    if(a==27){
        xgoing.style.display="none";
        window.temp_i = 0;
        clearTimeout(sto)
        circle.style.display = "none";
        oobeword1.style.display = "none";
        oobeword2.style.display = "none";
}
}
window.onload = function(){
document.onkeydown = hotkey;
};
