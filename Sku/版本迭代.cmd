@echo off
chcp 65001 >nul
echo 正在启动更新脚本...
cd /d %~dp0
node ./ban_ben_gx.js
echo 完成脚本,等待用户按下任意键后退出
pause >nul