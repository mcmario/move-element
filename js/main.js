function getE(id){
return document.getElementById(id);
}

var v=0;
var h=0;
var k;



getE('man').style.marginLeft= ""+h+"px";

getE('man').style.marginTop= ""+v+"px";




getE('left').onclick=function(){
    h-=10;
    getE('man').style.marginLeft=""+h+"px";
    getE('man').style.transform="rotate(270deg)"
}
getE('rigth').onclick=function(){
    h+=10;
    getE('man').style.marginLeft=""+h+"px";
    getE('man').style.transform="rotate(90deg)"
}
getE('up').onclick=function(){
    v-=10;
    getE('man').style.marginTop=""+v+"px";
    getE('man').style.transform="rotate(0deg)"
}
getE('down').onclick=function(){
    v+=10;
    getE('man').style.marginTop=""+v+"px";
    getE('man').style.transform="rotate(180deg)"
}
