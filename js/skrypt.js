//formularz popup

function napisz(){
   var msg = document.getElementById('msg');
   msg.style.display = 'block';
}
function zamknij(){
    var msg = document.getElementById('msg');
    msg.style.display = 'none';
}
function walidacja(){
    var formularz = document.forms[0];
    var mailExp = /^[0-9a-zA-Z-_.]{1,}@[0-9a-zAZ-_.]{1,}\.[a-zAZ]{2,}$/;
    
    if(formularz.wiadomosc.value==''||!mailExp.test(formularz.email.value)){
        if(formularz.wiadomosc.value==''){
            formularz.wiadomosc.style='border:1px solid red; border-radius:5px;';
        }
        else{
            formularz.wiadomosc.style='border:1px solid green; border-radius:5px;';
        }

        if(!mailExp.test(formularz.email.value)){
            formularz.email.style='border:1px solid red; border-radius:5px;';
        }
        else{
            formularz.email.style='border:1px solid green; border-radius:5px;';
        }
    }
    else{
        formularz.submit();
    }
}
var sciezki = ['../img/slides/ins1.jpg','../img/slides/ins2.jpg','../img/slides/ins3.jpg',
'../img/slides/ins4.jpg','../img/slides/ins5.jpg','../img/slides/ins6.jpg'];

var id = ['obr1','obr2','obr3','obr4','obr5','obr6'];
var trans = 0;
function move(){
    trans+=16;
    document.getElementById('slider').style= 'transition:0.6s; transform:translateX('+trans+'%);';
}
setInterval(move,2000);