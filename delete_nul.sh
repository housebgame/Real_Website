#!/bin/bash

# Script to delete nul files created accidentally in Unity project

echo "=== Nul File Deletion Tool ==="
echo ""
echo "This script will help you delete unwanted 'nul' files."
echo ""

# Option 1: Search for all nul files in the project
echo "Searching for 'nul' files in the current directory and subdirectories..."
echo ""

nul_files=$(find . -type f -name "nul" 2>/dev/null)

if [ -z "$nul_files" ]; then
    echo "No 'nul' files found in the current directory tree."
else
    echo "Found the following 'nul' files:"
    echo "$nul_files"
    echo ""

    read -p "Do you want to delete all found 'nul' files? (y/n): " choice

    if [ "$choice" = "y" ] || [ "$choice" = "Y" ]; then
        find . -type f -name "nul" -delete
        echo "All 'nul' files have been deleted."
    else
        echo "No files were deleted."
    fi
fi

echo ""
echo "Done!"
