@echo off
chcp 65001 >nul
echo 正在启动更新脚本...
echo.
cd /d %~dp0
node ./JS_MOD_GX.js
echo.
echo 完成脚本,等待用户按下任意键后退出
pause >nul