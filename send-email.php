<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // ✅ Fixed path

$mail = new PHPMailer(true);

try {  // ✅ Fixed "try" block syntax
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.privateemail.com'; 
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@ayaseducationalworksheets.com'; 
    $mail->Password   = 'your-email-password'; // ⚠ Store this securely, not in the code!
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom($_POST["email"], $_POST["name"]);
    $mail->addAddress('info@ayaseducationalworksheets.com'); 

    // Content
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "Name: " . $_POST["name"] . "\n"
                   . "Email: " . $_POST["email"] . "\n\n"
                   . "Message:\n" . $_POST["message"];

    $mail->send();
    echo "Message sent successfully!";
} catch (Exception $e) {
    echo "Error sending message: {$mail->ErrorInfo}";
}
?>
