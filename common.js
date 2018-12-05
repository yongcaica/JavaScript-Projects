/**
 *
 * @param dt
 * @returns {string}
 */

function getDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var date = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();

    month = month<10?"0"+month:month;
    date = date<10?"0"+date:date; 
    hour = hour<10?"0"+hour:hour;
    minute = minute<10?"0"+minute:minute;
    second = second<10?"0"+second:second;

    return year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second;
}