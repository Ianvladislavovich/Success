<?php

if (empty($_POST["first-name"]) || empty($_POST["last-name"])) {
    die("First name and last name are required");
}

if (empty($_POST["email"]) || ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}

if (strlen($_POST["password"]) < 8 || ! preg_match("/[a-z]/i", $_POST["password"]) || ! preg_match("/[0-9]/", $_POST["password"])) {
   die("Password must be at least 8 characters and contain at least one letter and one number");
}

if ($_POST["password"] !== $_POST["cpassword"]) {
    die("Passwords must match");
}

// If all validations passed, you can proceed with processing the form data
print_r($_POST);
var_dump($password_hash);

?>