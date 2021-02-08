// UTC   1970.1.1 到 285616年
// Date日期对象
/*
1.四种方式创建
var now = new Date();
console.log(now);
var xmas = new Date('December 25,1995 13:30:00');
console.log(xmas); 
var xmas = new Date(1995,11,25); //月份要减1,0~11表示的是1到12月
console.log(xmas);
var xmas = new Date(1995,11,25,14,30,0);
console.log(xmas);
*/
var now = new Date();
// 常用方法
console.log(now.getDate()); //获取月份的第几天 (1~31)

console.log(now.getMonth()); //获取月份 (0~11)
console.log(now.getFullYear()); //获取年份
console.log(now.getDay()); //获取一星期中的第几天(0 ~ 6)
console.log(now.getHours()); //获取小时(0~23);
console.log(now.getMinutes()); //获取分钟(0~59);
// console.log(typeof now.getMinutes()); //获取分钟(0~59);
console.log(now.getSeconds()); //获取秒(0~59);
// 日期格式化方法
console.log(now.toDateString()); //星期几  月 日  年		Sun Mar 08 2020
console.log(now.toTimeString()); //时 分 秒 时区		17:14:00 GMT+0800 (中国标准时间)
// 常用
console.log(now.toLocaleDateString()); 	// 2020/3/8
console.log(now.toLocaleTimeString()); 	//下午5:14:00
console.log(now.toLocaleString());		//2020/3/8 下午5:14:00
console.log(now.toUTCString());		//Sun, 08 Mar 2020 09:14:00 GMT