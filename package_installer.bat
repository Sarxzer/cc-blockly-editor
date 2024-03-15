@echo off
setlocal

rem Specify the package names
set "package_names=blockly @blockly/shadow-block-converter"

rem Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js before running this script.
    pause
    exit /b 1
)

rem Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm is not installed. Please install npm before running this script.
    pause
    exit /b 1
)

rem Loop over the array and install each package
for %%i in (%package_names%) do (
    echo Installing %%i...
    npm install %%i

    rem Check if the installation was successful
    if %errorlevel% equ 0 (
        echo Package %%i has been successfully installed.
    ) else (
        echo Failed to install package %%i.
    )
)

pause
endlocal
