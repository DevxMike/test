function napisz(){
    var msg = document.getElementById('msg');
    msg.style.display = 'block';
 }
 
 var button = document.getElementById('napisz');
 button.addEventListener('click',napisz,false);
 
 var button1 = document.getElementById('napisz1');
 button1.addEventListener('click',napisz,false);
 
 function zamknij(){
     var msg = document.getElementById('msg');
     msg.style.display = 'none';
 }
 
 var button2 = document.getElementById('msg').firstChild;
 button2.addEventListener('click',zamknij,false);
 
 function waliduj(){
     var mailExp = /^[0-9a-zA-Z-_.]{1,}@[0-9a-zAZ-_.]{1,}\.[a-zAZ]{2,}$/;
     var email = document.getElementById('email');
     var txt = document.getElementById('wiadomosc');
     if(mailExp.test(email.value)&&txt.value!='')
         document.forms[0].submit();
 }
 var klik = document.getElementById('button');
 klik.addEventListener('click',waliduj,false);
 
 function isEmailNull(){
     var mailExp = /^[0-9a-zA-Z-_.]{1,}@[0-9a-zAZ-_.]{1,}\.[a-zAZ]{2,}$/;
     var email = document.getElementById('email');
     if(!mailExp.test(email.value)){
        email.style='border:1px solid red; border-radius:5px;';
     }
     else{
        email.style='border:1px solid green; border-radius:5px;';
     }
 }

 function isTxtNull(){
    var txt = document.getElementById('wiadomosc');
    if(txt.value==''){
       txt.style='border:1px solid red; border-radius:5px;';
    }
    else{
       txt.style='border:1px solid green; border-radius:5px;';
    }
}
 
 var email = document.getElementById('email');
 var txt = document.getElementById('wiadomosc');
 
 email.addEventListener('blur',isEmailNull,false);
 txt.addEventListener('blur',isTxtNull,false);