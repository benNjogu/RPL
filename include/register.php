<?php
require_once '../../../secure/config.php';

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$county = $_POST['county'];
$subcounty = $_POST['subcounty'];
$ward = $_POST['ward'];
$gender = $_POST['gender'];

$sql = "INSERT INTO users (full_name, county, subcounty, ward, gender)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $full_name, $county, $subcounty, $ward, $gender);

if ($stmt->execute()) {
    // Redirect to NITA website on success
    header("Location: https://bernadnjogu.netlify.app/#home");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
