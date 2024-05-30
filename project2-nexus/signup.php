<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check if any field is empty
    if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        die('Please fill in all fields.');
    }

    // Check if passwords match
    if ($password !== $confirm_password) {
        die('Passwords do not match.');
    }

    // Check if email is already registered
    $sql = "SELECT * FROM UserLogin WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        die('Email already registered.');
    }

    // Insert new user into the database
    $sql = "INSERT INTO UserLogin (username, email, password) VALUES ('$username', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "Signup successful!";
        header("Location: welcome.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
