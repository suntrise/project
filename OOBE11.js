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
if (yahei.checked) {
    oobeword01.style.fontFamily="微软雅黑";
    oobeword02.style.fontFamily="微软雅黑";
    oobeword1.style.fontFamily="微软雅黑";
    oobeword2.style.fontFamily="微软雅黑";
}
if (songti.checked) {
    oobeword01.style.fontFamily="宋体";
    oobeword02.style.fontFamily="宋体";
    oobeword1.style.fontFamily="宋体";
    oobeword2.style.fontFamily="宋体";
}
}
        function changertp() {
        oobeword01.innerHTML = greet;
        oobeword01.style.display = "block";
            xgoing.style.display="block";
            window.temp_i = window.temp_i + 1;
            oobeword01.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp2();", 2000);
                return 0;
            }
            sto=setTimeout("changertp();", 12);
        }
        function changertp2() {
            window.temp_i = window.temp_i - 1;
            oobeword01.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword01.innerHTML = ""
                oobeword01.style.display = "none";
                window.temp_i = 0;
                sto=setTimeout('oobeword02.innerHTML = greet1;oobeword02.style.display = "block";changertp3();', 128);
                return 0;
            }
            sto=setTimeout("changertp2();", 12);
        }
        function changertp3() {
            window.temp_i = window.temp_i + 1;
            oobeword02.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp4();", 3000);
                return 0;
            }
            sto=setTimeout("changertp3();", 12);
        }
        function changertp4() {
            window.temp_i = window.temp_i - 1;
            oobeword02.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword02.innerHTML = ""
                oobeword02.style.display = "none";
                window.temp_i = 0;
                sto=setTimeout('circle.style.display="block";oobeword1.innerHTML = text1;oobeword2.innerHTML = textbot;oobeword1.style.display = "block";oobeword2.style.display = "block";changertp5();', 128);
                return 0;
            }
            setTimeout("changertp4();", 12);
        }
        function changertp5() {
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            oobeword2.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp6();", 30000);
                return 0;
            }
            sto=setTimeout("changertp5();", 12);
        }
        function changertp6() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword1.innerHTML = ""
                oobeword1.style.display = "none";
                window.temp_i = 0;
                sto=setTimeout('oobeword1.innerHTML = text2;oobeword1.style.display = "block";oobeword2.style.display = "block";changertp7();', 128);
                return 0;
            }
            sto=setTimeout("changertp6();", 12);
        }
        function changertp7() {
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp8();", 30000);
                return 0;
            }
            sto=setTimeout("changertp7();", 12);
        }
        function changertp8() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword1.innerHTML = ""
                oobeword1.style.display = "none";
                window.temp_i = 0;
                sto=setTimeout('oobeword1.innerHTML = poem;oobeword1.style.display = "block";oobeword2.style.display = "block";changertp9();', 128);
                return 0;
            }
            sto=setTimeout("changertp8();", 12);
        }
        function changertp9() {
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp10();", 30000);
                return 0;
            }
            sto=setTimeout("changertp9();", 12);
        }
        function changertp10() {
            window.temp_i = window.temp_i - 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 0) {
                oobeword1.innerHTML = ""
                oobeword1.style.display = "none";
                window.temp_i = 0;
                sto=setTimeout('circle.style.display = "none";oobeword1.style.top = "44.5%";oobeword1.innerHTML = end;oobeword1.style.display = "block";oobeword2.innerHTML = "";oobeword2.style.display = "none";changertp11();', 128);
                return 0;
            }
            sto=setTimeout("changertp10();", 12);
        }
        function changertp11() {
            window.temp_i = window.temp_i + 1;
            oobeword1.style.opacity = (window.temp_i/100);
            console.log(window.temp_i);
            if (window.temp_i == 100) {
                window.temp_i = 100;
                sto=setTimeout("changertp12();", 5000);
                return 0;
            }
            sto=setTimeout("changertp11();", 12);
        }
        function changertp12() {
            //alert("Unexpected Error\nWindows not installed.");
            sto=""
            window.temp_i = 0;
            oobeword1.style.opacity = (window.temp_i/100);
            changertp()
        }

function hotkey(){
var a=window.event.keyCode;
if(a==27){
xgoing.style.display="none";
window.temp_i = 0;
clearTimeout(sto)
circle.style.display = "none";
oobeword01.style.display = "none";
oobeword02.style.display = "none";
oobeword1.style.display = "none";
oobeword2.style.display = "none";
}
}
window.onload = function(){
document.onkeydown = hotkey;
};