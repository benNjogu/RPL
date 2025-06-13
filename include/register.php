<?php
require_once '../../../secure/config.php';

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$full_name = $_POST['full_name'];
$county = $_POST['county'];
$subcounty = $_POST['subcounty'];
$ward = $_POST['ward'];

// Handle gender with default to 'male' and validation
$gender = $_POST['gender'] ?? 'male';
$gender = strtolower($gender);
if ($gender !== 'male' && $gender !== 'female') {
    $gender = 'male';
}

$phone = $_POST['phone'];
$trade = $_POST['trade'];

// Validate phone number starts with 254
if (substr($phone, 0, 3) !== '254') {
    die("Phone number must start with country code 254.");
}

$sql = "INSERT INTO users (full_name, county, subcounty, ward, gender, phone, trade)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $full_name, $county, $subcounty, $ward, $gender, $phone, $trade);

if ($stmt->execute()) {
    echo "
    <html>
      <head>
        <title>Redirecting...</title>
        <script>
          setTimeout(() => {
            window.location.href = 'https://bernadnjogu.netlify.app/#home';
          }, 3000); // 3 seconds delay
        </script>
      </head>
      <body>
        <h2>Please wait, you are being redirected...</h2>
      </body>
    </html>";
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
