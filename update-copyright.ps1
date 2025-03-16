$files = Get-ChildItem -Path . -Filter "*.java" -Recurse
$oldCopyrightPattern = "Copyright 2019 Maksim Zheravin"
$newCopyrightText = "Copyright 2019-2024 Exchange Core Project"

Write-Host "Updating copyright notices in Java files..."
Write-Host "Found $($files.Count) Java files"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    if ($content -match $oldCopyrightPattern) {
        $updatedContent = $content -replace $oldCopyrightPattern, $newCopyrightText
        Set-Content -Path $file.FullName -Value $updatedContent
        Write-Host "Updated: $($file.FullName)"
    }
}

# Also check 2020 copyright
$oldCopyrightPattern2 = "Copyright 2020 Maksim Zheravin"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    if ($content -match $oldCopyrightPattern2) {
        $updatedContent = $content -replace $oldCopyrightPattern2, $newCopyrightText
        Set-Content -Path $file.FullName -Value $updatedContent
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Copyright update complete!" 