<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    // Add code to validate and process form data here
    // For example, you can store the form data in a database or send it in an email
    // After processing the form data, you can redirect the user to a thank you page
    header('Location: thankyou.html');
    exit;
}
?>