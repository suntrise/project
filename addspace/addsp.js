var str;
var all = test = "";
var a = b = 0;
var de = "）";
confirm(de.charCodeAt())

//var ct = setInterval(addsp,1)

function addsp() {
str = type.value
str = str.split('')
for (let i in str) {
var al = str[i]
var bl = str[Math.floor(i-1)]
a = al.charCodeAt()
if (bl != undefined) {
b = bl.charCodeAt()
}

if((a >= 8216 && a <= 8223)||(a >= 12288 && a <= 12351)||(a >= 65281 && a <= 65374)){
	a=2;
}
else if (a >= 11904 && a <= 193565){
	a=1;
}
else{
	a=0;
}
if((b >= 8216 && b <= 8223)||(b >= 12288 && b <= 12351)||(b >= 65281 && b <= 65374)){
	b=2;
}
else if (b >= 11904 && b <= 193565){
	b=1;
}

else{
	b=0;
}
if (a+b == 1) {
	al = " "+al;
}

all += al;
	result.innerHTML = all;

}
	all=""
}
