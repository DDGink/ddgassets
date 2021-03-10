// 变量定义 Define variable
/** NOTICE: `birthYear`, `birthMonth` and `birthDay` must use Beijing Time (UTC+8). */
var birthYear  = 2020;  /** 出生年份 Birth Year  */
var birthMonth = 5;     /** 出生月份 Birth Month */
var birthDay   = 25;     /** 出生日期 Birth Day   */

/** 函数定义 Define function */
var ddgtime = function() {

    // 变量定义 Define variable
    var ndate  = new Date();
    var nyear  = ndate.getUTCFullYear();
    var nmonth = ndate.getUTCMonth()+1;
    var nday   = ndate.getUTCDate();
    var nhour  = ndate.getUTCHours();
    var byear  = 0;
    var bmonth = 0;
    var mday   = new Date(nyear, nmonth, 0).getDate();

    // 将 UTC 时间转换为北京时间 Convert UTC time to Beijing time
    nhour = nhour + 8;
    if(nhour >= 24) {
        nday  = nday + 1;
        nhour = nhour - 24;
    }
    if(nday > mday) {
        nday   = nday - mday;
        nmonth = nmonth + 1;
    }
    if(nmonth > 12) {
        nmonth = nmonth - 12;
        nyear  = nyear + 1;
    }

    // 计算岁 Calculation display year
    if((nyear > birthYear) && (nmonth == birthMonth)) {
        byear = nday >= birthDay ? nyear - birthYear : nyear - birthYear - 1;
    } else {
        byear = nyear - birthYear;
    }
    // 计算月份 Calculation display month
    bmonth = ndate < birthDay ? nmonth - birthMonth - 1 : nmonth - birthMonth;
    if(bmonth < 0) {
        bmonth = 12 + bmonth;
        byear  = byear - 1;
    }

    // 判断输出 determine display
    if(byear > 0) {
        $('#ddg-year').html(byear);
    } else {
        $('#ddg-year-pre').hide();
        $('#ddg-year').hide();
        $('#ddg-year-des').hide();
    }
    if(bmonth > 0) {
        $('#ddg-month').html(bmonth);
    } else {
        $('#ddg-month-pre').hide();
        $('#ddg-month').hide();
        $('#ddg-month-des').hide();
    }
}

// 程序入口
ddgtime();                  // 首次处理
setInterval(ddgtime, 100);  // 后续更新

// 样式修改
$('#bg').height($(document).height());
