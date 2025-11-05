@echo off
REM Script to delete nul files created accidentally in Unity project

echo === Nul File Deletion Tool ===
echo.
echo This script will help you delete unwanted 'nul' files.
echo.

REM Search for nul files in the current directory and subdirectories
echo Searching for 'nul' files in the current directory and subdirectories...
echo.

dir /s /b nul 2>nul > temp_nul_list.txt

REM Check if any files were found
if %ERRORLEVEL% EQU 0 (
    echo Found the following 'nul' files:
    type temp_nul_list.txt
    echo.

    set /p choice="Do you want to delete all found 'nul' files? (y/n): "

    if /i "%choice%"=="y" (
        for /f "delims=" %%i in (temp_nul_list.txt) do (
            del /f /q "%%i" 2>nul
            if exist "%%i" (
                echo Failed to delete: %%i
            ) else (
                echo Deleted: %%i
            )
        )
        echo.
        echo All 'nul' files have been processed.
    ) else (
        echo No files were deleted.
    )
) else (
    echo No 'nul' files found in the current directory tree.
)

REM Clean up temp file
if exist temp_nul_list.txt del /f /q temp_nul_list.txt

echo.
echo Done!
pause
