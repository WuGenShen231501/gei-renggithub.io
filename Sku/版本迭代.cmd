@echo off
chcp 65001 >nul
echo 正在启动更新脚本...
echo.
cd /d %~dp0
node ./ban_ben_gx.js
echo 完成脚本
REM 等待5秒（/nobreak阻止用户按键跳过，>nul隐藏提示信息）
timeout /t 5 /nobreak >nul
REM 关闭当前命令窗口
exit