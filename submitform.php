<?php
session_start();
include 'config.php';

if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST['full-name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $subject = mysqli_real_escape_string($conn, $_POST['subject']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Form validation
    $error = array();
    if (empty($name)) {
        $error[] = 'Name is required';
    }
    if (empty($email)) {
        $error[] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error[] = 'Invalid email format';
    }
    if (empty($phone)) {
        $error[] = 'Phone number is required';
    }
    if (empty($subject)) {
        $error[] = 'Subject is required';
    }
    if (empty($message)) {
        $error[] = 'Message is required';
    }

    if (empty($error)) {
        // Insert message into the database
        $insert = "INSERT INTO contact_form (name, email, phone, subject, message) 
                    VALUES ('$name', '$email', '$phone', '$subject', '$message')";
        mysqli_query($conn, $insert);
        $_SESSION['success_msg'] = 'Message sent successfully';
        header('location: contact.php');
        exit();
    }
}
?>

