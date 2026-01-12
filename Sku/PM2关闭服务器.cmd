@echo off
chcp 65001 >nul
echo P2正在关闭服务器...
cd /d %~dp0
pm2 stop wgs_node.js
echo 完成脚本,等待用户按下任意键后退出
pause >nul