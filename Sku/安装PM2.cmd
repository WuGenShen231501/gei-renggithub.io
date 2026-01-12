@echo off
REM 简单可靠的PM2安装脚本
echo ========================================
echo PM2 Installation Script
echo ========================================
echo.

REM 检查Node.js
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

REM 显示Node.js版本
for /f "delims=" %%i in ('node --version') do echo Node.js: %%i
echo.

REM 安装PM2
echo Installing PM2...
echo Please wait, this may take a moment...
echo.
npm install -g pm2 --loglevel warn

REM 强制暂停显示结果
echo.
echo ========================================
echo INSTALLATION COMPLETE!
echo ========================================
echo PM2 has been installed.
echo You can now use these commands:
echo   pm2 start app.js
echo   pm2 list
echo   pm2 logs
echo.
echo Press any key to close this window...
pause >nul

REM 确保脚本不会立即退出
timeout /t 1 >nul
