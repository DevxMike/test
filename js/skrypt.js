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