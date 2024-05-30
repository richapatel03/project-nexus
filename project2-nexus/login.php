<?php
session_start();
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
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email and password are empty
    if (empty($email) || empty($password)) {
        die('Please fill in all fields.');
    }

    // Query to check user credentials
    $sql = "SELECT * FROM UserLogin WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($password == $row['password']) {
            $_SESSION['password'] = $row['password'];
            $_SESSION['email'] = $row['email'];
            header("Location: welcome.html");
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "Invalid email.";
    }
}

$conn->close();
?>
