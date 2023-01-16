::flow-parent
::flow-tools
::flow-log
::flow-api
::flow-extension
::flow-core
::flow-dubbo
::flow-api-rest
::flow-admin-rest
::flow-front-rest
@echo off

rem 利用bat脚本一键打包maven Ver1.0 编码 ANSI

rem 本地需要配置 MAVEN_HOME

mode con cols=120 lines=40
color 0a
title clean package
set settings_maven_loacl=-U --settings D:\hope-settings.xml -Dmaven.repo.local=D:\maven\hope_repository -DskipTests=true
set bast_path=E:\flowworkspace\flow
echo.
echo ---------------------------Data processing! Do not close!!--------------------------------------------
:: 开始清理并部署项目
:: flow-parent clean deploy
echo.
echo ---------------------------Start cleaning up and deploy flow project!!----------------------
echo.
cd /d  %bast_path%\flow-parent
rem call mvn clean package
call mvn clean deploy %settings_maven_loacl%
echo.
cd /d  %bast_path%\flow-tools
rem call mvn clean deploy flow-tools
call mvn clean deploy %settings_maven_loacl%
echo.
cd /d  %bast_path%\flow-log
rem call mvn clean deploy flow-log
call mvn clean deploy %settings_maven_loacl%
echo.
cd /d  %bast_path%\flow-api
rem call mvn clean deploy flow-extension
call mvn clean deploy %settings_maven_loacl%
echo.
echo.
cd /d  %bast_path%\flow-extension
rem call mvn clean deploy flow-extension
call mvn clean deploy %settings_maven_loacl%
echo.
echo.
cd /d  %bast_path%\flow-core
rem call mvn clean deploy flow-core
call mvn clean deploy %settings_maven_loacl%
echo.
echo.
:: cd /d  %bast_path%\flow-dubbo
:: rem call mvn clean deploy flow-dubbo
:: call mvn clean deploy %settings_maven_loacl%
:: echo.
echo.
cd /d  %bast_path%\flow-api-rest
rem call mvn clean deploy flow-api-rest
call mvn clean deploy %settings_maven_loacl%
echo.
echo.
cd /d  %bast_path%\flow-admin-rest
rem call mvn clean deploy flow-admin-rest
call mvn clean deploy %settings_maven_loacl%
echo.
echo.
cd /d  %bast_path%\flow-front-rest
rem call mvn clean deploy flow-front-rest
call mvn clean deploy %settings_maven_loacl%
echo.
echo ---------------------------flow project cleanup deploy completed!!---------------------------

TIMEOUT /T 10