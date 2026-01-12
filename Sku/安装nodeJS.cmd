@echo off

echo Checking if Node.js is installed...

:: Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js is already installed
    node -v
    echo npm version:
    npm -v
    pause
    exit /b 0
)

echo Node.js is not installed. Preparing to download...

:: Get system architecture
set "ARCH=x64"
if "%PROCESSOR_ARCHITECTURE%"=="x86" (
    if not defined PROCESSOR_ARCHITEW6432 set "ARCH=x86"
)

echo System architecture: %ARCH%

:: Download Node.js installer
set "INSTALLER=nodejs_installer.msi"
set "NODE_URL=https://nodejs.org/dist/v20.11.0/node-v20.11.0-%ARCH%.msi"

echo Downloading Node.js installer...
echo Download URL: %NODE_URL%

:: Use PowerShell to download (simpler approach)
powershell -Command "Invoke-WebRequest -Uri '%NODE_URL%' -OutFile '%INSTALLER%'"

if %errorlevel% neq 0 (
    echo Download failed. Please check your network connection.
    pause
    exit /b 1
)

echo Download completed. Installing Node.js...

:: Set installation directory to current script directory
set "INSTALL_DIR=%~dp0"

:: Install Node.js silently to current directory
msiexec /i "%INSTALLER%" /qn /norestart INSTALLDIR="%INSTALL_DIR%\nodejs"

if %errorlevel% neq 0 (
    echo Installation failed.
    pause
    exit /b 1
)

echo Installation completed. Verification...

echo Node.js installed successfully!

:: Add Node.js to system PATH
set "NODE_PATH=%INSTALL_DIR%\nodejs"
set "NODE_BIN=%NODE_PATH%\node.exe"
set "NPM_PATH=%NODE_PATH%\npm.cmd"

echo Adding Node.js to system PATH...

:: Add to system PATH using PowerShell
powershell -Command "$envPath = [Environment]::GetEnvironmentVariable('Path', 'Machine'); if (-not $envPath.Contains('%NODE_PATH%')) { [Environment]::SetEnvironmentVariable('Path', $envPath + ';' + '%NODE_PATH%', 'Machine') }"

:: Try to check immediately by using full path
if exist "%NODE_BIN%" (
    echo Node.js path: %NODE_PATH%
    "%NODE_BIN%" -v
    echo npm path: %NPM_PATH%
    "%NPM_PATH%" -v
    echo You can use Node.js now by restarting your command prompt or using the full path above.
) else (
    echo Node.js installation might require restart.
)

echo Cleaning up installer...
del "%INSTALLER%" >nul 2>&1

echo Operation completed!
pause
