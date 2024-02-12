<?php

if (empty($_POST["email"])) {
    die("Valid email is required");
}

if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}

if (strlen($_POST["password"]) < 8) {
   die("Password must be at least 8 characters");
}

print_r($_POST);