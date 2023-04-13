/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

export function formatToDateTime(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatToDate(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_FORMAT,
): string {
  return dayjs(date).format(format);
}

export const dateUtil = dayjs;

// 格式化秒的数据，将秒转换成，XX天XX小时XX分XX秒
export function formatSecToStr(seconds){
  let daySec = 24 *  60 * 60;
  let hourSec=  60 * 60;
  let minuteSec = 60;
  let dd = Math.floor(seconds / daySec);
  let hh = Math.floor((seconds % daySec) / hourSec);
  let mm = Math.floor((seconds % hourSec) / minuteSec);
  let ss = Math.floor(seconds%minuteSec);
  if(dd > 0){
    return dd + "天" + hh + "小" + mm + "分"+ss+"秒";
  }else if(hh > 0){
    return hh + "小" + mm + "分"+ss+"秒";
  } else if (mm > 0){
    return mm + "分"+ss+"秒";
  }else{
    return ss+"秒";
  }
}

// 获取间隔天数
export function getDatesByBetweenDate(day1, day2) {
  const getDate = (dayStr)=>{
    var strArr = dayStr.split('-');
    return new Date(strArr[0], strArr[1] - 1, strArr[2]);
  }
  // 给月和天，不足两位的前面补0
  const fz = (num) => {
    if (num < 10) {
      num = "0" + num;
    }
    return num
  }

  // 获取入参字符串形式日期的Date型日期
  let st = getDate(day1);
  let et = getDate(day2);

  var retArr = [];

  // 获取开始日期的年，月，日
  var yyyy = st.getFullYear(),
    mm = st.getMonth(),
    dd = st.getDate();

  // 循环
  while (st.getTime() != et.getTime()) {
    let ymdDateTmp = [st.getFullYear(), fz(st.getMonth() + 1), fz(st.getDate())].join("-");
    retArr.push(ymdDateTmp);

    // 使用dd++进行天数的自增
    st = new Date(yyyy, mm, dd++);
  }

  // 将结束日期的天放进数组
  let ymdDate = [et.getFullYear(), fz(et.getMonth() + 1), fz(et.getDate())].join("-");
  retArr.push(ymdDate);

  // alert(retArr); // 或可换为
  return retArr;
}

export function dateChange(num = 1,date = false) {
  if (!date) {
    date = new Date();//没有传入值时,默认是当前日期
    date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
  date += " 00:00:00";//设置为当天凌晨12点
  date = Date.parse(new Date(date))/1000;//转换为时间戳
  date += (86400) * num;//修改后的时间戳
  var newDate = new Date(parseInt(date) * 1000);//转换为时间
  return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
}
