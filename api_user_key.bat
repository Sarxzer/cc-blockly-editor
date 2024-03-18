@echo off
setlocal
set /p api_dev_key=Enter your Pastebin API dev key:
set /p username=Enter your Pastebin username:
set /p password=Enter your Pastebin password:

echo Here is your API user key:
curl -X POST -d "api_dev_key=%api_dev_key%&api_user_name=%username%&api_user_password=%password%" https://pastebin.com/api/api_login.php
echo.
pause
endlocal