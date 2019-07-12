<?php
    $od = $_POST['email']; 
    $tresc = $_POST['wiadomosc'];
    $_POST = array();
    
    $to      = 'nobody@example.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: '. $od . "\r\n" .
        'Reply-To: '. $od . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    header("location:index.php");
?>
