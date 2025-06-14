<?php
// header('Content-Type: application/json');
require_once '../../../secure/config.php';

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

// Helper function to fetch all from a table
function fetch_table($conn, $table) {
    $result = $conn->query("SELECT id, value, label FROM $table");
    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    return $rows;
}

$response = [
    "trades" => fetch_table($conn, 'trades'),
    "counties" => fetch_table($conn, 'counties'),
    "subcounties" => fetch_table($conn, 'subcounties'),
    "wards" => fetch_table($conn, 'wards')
];

echo json_encode($response);
$conn->close();
?>