@echo off
chcp 65001 >nul
echo 当前文件夹地址：%cd%
echo.
echo 是否要安装依赖包运行 npm install？(Y/N)
set /p choice="请输入选择："
if /i "%choice%"=="Y" (
    echo 正在运行 npm install...
    npm install
    echo.
    echo npm install 完成！
) else (
    echo 已取消 npm install 操作
)
echo.
echo 按任意键退出...
pause > nul