@echo off
chcp 65001 >nul
echo P2正在启动服务器...
cd /d %~dp0
pm2 start wgs.js
echo 完成脚本,等待用户按下任意键后退出
pause >nul