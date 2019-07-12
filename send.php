<?php
    $od = $_POST['email']; 
    $tresc = $_POST['wiadomosc'];
    $_POST = array();
    $msg = "Wiadomość od: ".$od."\n".$tresc;
    
    mail('example@domain.com.pl','Subject',$msg);
    header('location:index.html#kontakt');
?>
