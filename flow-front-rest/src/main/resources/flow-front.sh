#!/bin/bash
#这里可替换为你自己的执行程序，其他代码无需更改
APP_NAME=flow-front-rest.jar
ENVIRONMENT=dev
PROPERTIES=classpath:/application.properties,classpath:/application-dev.properties
DEBUG_MODE=0

#使用说明，用来提示输入参数
usage() {
    echo "Usage: sh 执行脚本.sh [start|stop|restart|status] [dev|test|prod](default:dev) debug"
    exit 1
}

#检查程序是否在运行
is_exist(){
  pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
  #如果不存在返回1，存在返回0
  if [ -z "${pid}" ]; then
   return 1
  else
    return 0
  fi
}

#启动方法
 start(){
   is_exist
   if [ $? -eq "0" ]; then
     echo "${APP_NAME} is already running. pid=${pid} ."
   else
    echo "now Profiles:${ENVIRONMENT}"
    if [ ${DEBUG_MODE} -eq "1" ]; then
      nohup java -jar -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5007 $APP_NAME --spring.profiles.active=$ENVIRONMENT  --spring.config.location=$PROPERTIES > /dev/null 2>&1 &
    else
      nohup java -jar $APP_NAME --spring.profiles.active=$ENVIRONMENT  --spring.config.location=$PROPERTIES > /dev/null 2>&1 &
    fi
   fi
 }

#停止方法
stop(){
  is_exist
  if [ $? -eq "0" ]; then
    kill -9 $pid
  else
    echo "${APP_NAME} is not running"
  fi
}

#输出运行状态
status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is running. Pid is ${pid}"
  else
    echo "${APP_NAME} is NOT running."
  fi
}

#重启
restart(){
  stop
  start
}

case "$3" in
  "debug")
    DEBUG_MODE=1
    ;;
  *)
    ;;
esac

#根据第二个参数设置编译环境默认为dev
case "$2" in
  "dev")
    ENVIRONMENT=dev
    PROPERTIES=classpath:/application.properties,classpath:/application-dev.properties
    ;;
  "test")
    ENVIRONMENT=test
    PROPERTIES=classpath:/application.properties,/etc/config/flowfront/application-test.properties
    ;;
  "prod")
    ENVIRONMENT=prod
    PROPERTIES=classpath:/application.properties,/etc/config/flowfront/application-prod.properties
    ;;
  *)
    if [[ -n $2 ]]; then
      echo "Profiles set error ! please check again!"
      exit 1
    fi
    ;;
esac

#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac
