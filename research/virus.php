<?php
// virus.php
// Returns the FASTA file contents as plain text based on ?name=...

header("Content-Type: text/plain; charset=utf-8");

// Map the names from data-villain -> fasta filenames
$virusFiles = [
    "Ebola" => "fasta/ebola.fasta",
    "Flu"   => "fasta/flu.fasta",
    "Zika"  => "fasta/zika.fasta",
    "COVID" => "fasta/covid.fasta",
    "AIDS"  => "fasta/hiv.fasta",   // AIDS uses the HIV FASTA file
];

if (!isset($_GET['name'])) {
    http_response_code(400);
    echo "Missing virus name";
    exit;
}

$name = $_GET['name'];

if (!isset($virusFiles[$name])) {
    http_response_code(404);
    echo "Unknown virus";
    exit;
}

// Adjust the path if your fasta files live somewhere else
$path = __DIR__ . "/" . $virusFiles[$name];

if (!is_readable($path)) {
    http_response_code(500);
    echo "FASTA file not found";
    exit;
}

echo file_get_contents($path);

