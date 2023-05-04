<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $user_type = $_POST['user-type'];

    $to = "iversuss@yandex.ru";
    $subject = "New form submission";
    $message = "Name: ".$name."\nPhone: ".$phone."\nUser Type: ".$user_type;

    $headers = "From: yourwebsite@example.com" . "\r\n" .
        "Reply-To: yourwebsite@example.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $message, $headers)){
        echo "Thank you for submitting the form.";
    } else{
        echo "Error: Failed to send the form.";
    }
}
?>
