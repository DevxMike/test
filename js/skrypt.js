$(document).ready(function(){
   
   $('.napisz').on('click', function() {
      $('#msg').css('display', 'block');
   });

   $('.close').on('click', function(){
      $('#msg').css('display', 'none');
   });
   
   
   function ok($obj, $div){
      $div.text('');
      $obj.css({'border':'1px solid green','border-radius':'5px'});
   }
   
   function bad($obj, $div, msg){
      $obj.css({'border':'1px solid red','border-radius':'5px'});
      $div.text(msg);
   }

   $('#email').on('blur', function(){
      var $this = $(this);
      var mailExp = /^[0-9a-zA-Z-_.]{1,}@[0-9a-zAZ-_.]{1,}\.[a-zAZ]{2,}$/;

      mailExp.test($this.val()) === false ? bad($this, $('#errmsg1'), 'Wpisz poprawny adres email'):ok($this, $('#errmsg1'));
   });

   $('#wiadomosc').on('blur', function(e){
      var $this = $(this);
      
      $this.val() == '' ? bad($this, $('#errmsg2'), 'Wpisz poprawną treść wiadomości'):ok($this, $('#errmsg2'));
   });

   $('#form').on('submit', function(e){
      e.preventDefault();
      var mailExp = /^[0-9a-zA-Z-_.]{1,}@[0-9a-zAZ-_.]{1,}\.[a-zAZ]{2,}$/;
      var mail = $('#email').val();
      var txt = $('#wiadomosc').val();

         if(mailExp.test(mail) && txt!=''){
            var details = $(this).serialize();
            $.post('../send.php', details)
               .done(function(data){
                  $('#errmsg2').html('<span style="color:green;">'+data+'</span>');
               })
               .fail(function(){
                  $('#errmsg2').html('<span style="color:red;">Nie udało się wysłać wiadomości!</span>');
               });
         }
         
         else{
            
            mailExp.test(mail) === false ? bad($('#email'), $('#errmsg1'), 'Wpisz poprawny adres email'):ok($('#email'), $('#errmsg1'));
            txt == '' ? bad($('#wiadomosc'), $('#errmsg2'), 'Wpisz poprawną treść wiadomości'):ok($('#wiadomosc'), $('#errmsg2'));
         
         }
   });

});
