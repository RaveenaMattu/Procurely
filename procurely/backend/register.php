<?php
// Allow requests from your React dev server
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit;
}

require_once "db_connect.php";

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid JSON input."]);
  exit;
}

// Sanitize & validate
$fields = [
  'fullName', 'address', 'ageRange', 'techComfort', 'deviceSetup',
  'priceConscious', 'brandConscious', 'buyingFactors', 'productCategories',
  'purchaseFrequency', 'deliverySpeed', 'refurbishedOpen'
];

foreach ($fields as $field) {
  if (!isset($data[$field]) || $data[$field] === '') {
    http_response_code(400);
    echo json_encode(["error" => "Missing field: $field"]);
    exit;
  }
}

// Prepare data
$fullName = htmlspecialchars(strip_tags($data["fullName"]));
$address = htmlspecialchars(strip_tags($data["address"]));
$ageRange = htmlspecialchars(strip_tags($data["ageRange"]));
$techComfort = htmlspecialchars(strip_tags($data["techComfort"]));
$deviceSetup = htmlspecialchars(strip_tags($data["deviceSetup"]));
$priceConscious = htmlspecialchars(strip_tags($data["priceConscious"]));
$brandConscious = htmlspecialchars(strip_tags($data["brandConscious"]));
$buyingFactors = json_encode($data["buyingFactors"]);
$productCategories = json_encode($data["productCategories"]);
$purchaseFrequency = htmlspecialchars(strip_tags($data["purchaseFrequency"]));
$deliverySpeed = htmlspecialchars(strip_tags($data["deliverySpeed"]));
$refurbishedOpen = htmlspecialchars(strip_tags($data["refurbishedOpen"]));

// Insert into database securely
try {
  $stmt = $pdo->prepare("INSERT INTO user_profiles 
    (fullName, address, ageRange, techComfort, deviceSetup, priceConscious, brandConscious, buyingFactors, productCategories, purchaseFrequency, deliverySpeed, refurbishedOpen)
    VALUES (:fullName, :address, :ageRange, :techComfort, :deviceSetup, :priceConscious, :brandConscious, :buyingFactors, :productCategories, :purchaseFrequency, :deliverySpeed, :refurbishedOpen)");

  $stmt->execute([
    ":fullName" => $fullName,
    ":address" => $address,
    ":ageRange" => $ageRange,
    ":techComfort" => $techComfort,
    ":deviceSetup" => $deviceSetup,
    ":priceConscious" => $priceConscious,
    ":brandConscious" => $brandConscious,
    ":buyingFactors" => $buyingFactors,
    ":productCategories" => $productCategories,
    ":purchaseFrequency" => $purchaseFrequency,
    ":deliverySpeed" => $deliverySpeed,
    ":refurbishedOpen" => $refurbishedOpen,
  ]);

  echo json_encode(["success" => true, "message" => "Registration saved successfully!"]);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
