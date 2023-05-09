<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTNL(true);

    $mail->setForm('info@reshaimath.ru', 'Решай');
    $mail->addAddress('info@reshaimath.ru');
    $mail->Subject = "Новая заявка!";

    $body = '<p>Имя'.$_POST['name'].'</p>';
    $body.= '<p>Телефон'.$_POST['phone'].'</p>';
    $body.= '<p>Родитель/ученик'.$_POST['user-type'].'</p>';

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Ok';
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
// if(isset($_POST['submit'])){
//     $name = $_POST['name'];
//     $phone = $_POST['phone'];
//     $user_type = $_POST['user-type'];

//     $to = "info@reshaimath.ru";
//     $subject = "New form submission";
//     $message = "Name: ".$name."\nPhone: ".$phone."\nUser Type: ".$user_type;

//     $headers = "From: info@reshaimath.ru" . "\r\n" .
//         "Reply-To: info@reshaimath.ru" . "\r\n" .
//         "X-Mailer: PHP/" . phpversion();

//     if(mail($to, $subject, $message, $headers)){
//         echo "Thank you for submitting the form.";
//     } else{
//         echo "Error: Failed to send the form.";
//     }
// }
?>
