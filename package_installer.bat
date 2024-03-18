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

rem Create mising files (secret.js)
echo Creating missing files...
if not exist src\secret.js (
    echo The file src\secret.js does not exist. Creating it...
    echo {"api_user_key": "YOUR_PASTEBIN_API_USER_KEY","api_dev_key" : "YOUR_PASTEBIN_API_DEV_KEY"} > src\secret.js
    echo File src\secret.js has been created.
) else (
    echo File src\secret.js already exists.
)

pause
endlocal
