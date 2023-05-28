var str;
var all = test = "";
var a = b = j = k = 0;

/* 测试
var te = " "
confirm(te.charCodeAt())
var ct = setInterval(addsp,1)
*/

function addsp() {
str = type.value
for (let i in str) {
al = str[i]
a = al.charCodeAt()
if((a >= 8216 && a <= 8223)||(a >= 12288 && a <= 12351)||(a >= 65281 && a <= 65374)){
	j=2;
}//标点符号为 2
else if (a >= 11904 && a <= 193565){
	j=1;
}// CJK 字符为 1
else if(a == 32){
	j=3;
}//空格为 3
else{
	j=0;
}
if (i>=1) {
bl = str[Math.floor(i-1)]
b = bl.charCodeAt()
if((b >= 8216 && b <= 8223)||(b >= 12288 && b <= 12351)||(b >= 65281 && b <= 65374)){
	k=2;
}//标点符号为 2
else if (b >= 11904 && b <= 193565){
	k=1;
}// CJK 字符为 1
else if(b == 32){
	k=3;
}//空格为 3
else{
	k=0;
}
}
if (j+k == 1 && i >= 1) {
	al = " "+al;
}

	all += al;
	result.innerHTML = all;
}
	all=""
	j=k=0;
}
