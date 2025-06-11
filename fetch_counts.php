<?php
require_once '../../secure/config.php';

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the 'visited' cookie is already set
if (!isset($_COOKIE['visited'])) {
    // Set a cookie that expires in 30 days
    setcookie('visited', 'true', time() + (86400 * 30), "/"); // 86400 = 1 day

    // Increment visit count in DB
    $conn->query("UPDATE visits SET count = count + 1 WHERE id = 1");
}

// Fetch updated counts
$visit_result = $conn->query("SELECT count FROM visits WHERE id = 1");
$user_result = $conn->query("SELECT COUNT(*) as total FROM users");

$visits = $visit_result->fetch_assoc()['count'];
$users = $user_result->fetch_assoc()['total'];

echo json_encode(["visits" => $visits, "users" => $users]);

$conn->close();
?>
