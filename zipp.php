<?php
// zipper.php

set_time_limit(0);
ini_set('memory_limit', '-1');

$zipFileName = 'backup_' . date('Y-m-d_H-i-s') . '.zip';
$zipFilePath = __DIR__ . '/' . $zipFileName;

$zip = new ZipArchive();

if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
    exit("Failed to create ZIP file.\n");
}

// Function to recursively add files
function addFolderToZip($folder, $zip, $baseFolder) {
    $files = scandir($folder);
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        
        $fullPath = $folder . '/' . $file;
        $relativePath = substr($fullPath, strlen($baseFolder) + 1);
        
        if (is_dir($fullPath)) {
            echo "Adding folder: $relativePath\n";
            $zip->addEmptyDir($relativePath);
            addFolderToZip($fullPath, $zip, $baseFolder);
        } else {
            echo "Adding file: $relativePath\n";
            $zip->addFile($fullPath, $relativePath);
        }
        
        // Flush output buffer to show progress immediately
        @ob_flush();
        @flush();
    }
}

echo "<pre>";
echo "Starting ZIP process...\n\n";

addFolderToZip(__DIR__, $zip, __DIR__);

$zip->close();

echo "\nZIP file created successfully at:\n$zipFilePath";
echo "</pre>";

?>