@echo off
chcp 65001 >nul
echo P2正在启动服务器...
cd /d %~dp0
pm2 start wgs_node.js
echo.
echo 完成脚本
REM 等待5秒（/nobreak阻止用户按键跳过，>nul隐藏提示信息）
timeout /t 5 /nobreak >nul
REM 关闭当前命令窗口
exit