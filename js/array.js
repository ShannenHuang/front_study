// 数组
// 数组的创建
// 1.字面量创建
var arr = ["店","小","二","贼","不","听","话"];
//console.log(typeof arr)
// 2.使用js提供的构造函数创建
var arr2 = new Array();
if(Array.isArray(arr2)){
	arr2[0] = '二二二';
	arr2[1] = '亲亲亲';
	arr2[2] = 'shannen';
	//console.log(arr2);
	var str_arr2 = arr2.toString();
	//console.log(str_arr2);
	//console.log(typeof str_arr2); 
}

// 数组的访问
//console.log("第3个元素为："+arr[3]);

// 数组的长度
//console.log("数组的长度为："+arr.length);


// 数组的常用方法
// 0.join分割字符串
var arr3 = ["店小二","喜欢","偷懒"];
var join_str = arr3.join('~');
console.log(join_str);

// 1.栈,队列
	// 栈(lifo last - in- first - out)方法.  push() pop() 队列方法
	//push()方法返回的是元素入栈以后，数组的长度
var new_length = arr3.push('shannen');
console.log("元素入栈后，数组的长度为："+new_length);
console.log(arr3);
	// push() 往数组的最后一项添加内容
	// push()方法返回的是弹出栈顶的元素
var out_element = arr3.pop();
console.log("出栈的元素为："+out_element);
console.log(arr3);

// 2.数组倒序，升序，降序
var arr4 = [10,7,34,56,26,78,23,2,4,6];
console.log("原数组为："+arr4);
// 倒序reverse 会改变原数组
arr4.reverse();
console.log("倒序后的数组为："+arr4);
// sort()函数中传入一个比较函数可以实现排序，若不传入参数，则只比较每个元素的第一位 
// sort()函数会改变原数组
arr4.sort();
console.log("未传参的sort排序后的数组为："+arr4);
function compare_up(a,b){
	return a-b;
}
arr4.sort(compare_up);
console.log("sort函数中传入了比较函数后的数组："+arr4);

// 3.操作方法  concat() slice()  splice()
// concat() 数组合并 不改变原数组，需要定义一个数组来接收
var concat_arr41 = arr4.concat('shannen');
console.log('concat()方法并不会改变原数组，原数组为：'+arr4);
console.log('使用concat方法合并后的数组：'+concat_arr41);
var concat_arr42 = arr4.concat([1,4,6,7]);
console.log('使用concat方法合并后的数组：'+concat_arr42);
var concat_arr43 = arr4.concat({name:"邓",age:23});
console.log('使用concat方法合并后的数组：'+concat_arr43);
// slice() 切片：将当前数组中的一个或者多个项创建一个新数组
// slice()不会改变原数组，返回值是切片后的数组，需要定义一个新数组来接收它
var slice_arr4 = arr4.slice(2,5);
console.log("slice切片操作后的数组："+arr4);
console.log("slice切片操作的返回值："+slice_arr4);
console.log("slice切片操作的返回值类型："+typeof slice_arr4);
// splice() 删除，替换，插入 会改变原数组
// 删除 会改变原数组，返回值为被删除的元素
console.log("splice删除操作前的数组："+arr4);
var splice_delete_arr4 = arr4.splice(3,3);
console.log("splice删除操作后的数组："+arr4);
console.log("splice删除操作的返回值："+splice_delete_arr4);
console.log("splice删除操作的返回值类型："+typeof splice_delete_arr4);
// 替换 会改变原数组，返回值为被替换掉的元素
var splice_replace_arr4 = arr4.splice(2,3,'me');
console.log("splice替换操作后的数组："+arr4);
console.log("splice替换操作的返回值："+splice_replace_arr4);
console.log("splice替换操作的返回值类型："+typeof splice_replace_arr4);
// 插入 会改变原数组
var splice_in_arr4 = arr4.splice(1,0,'in');
console.log("splice插入操作后的数组："+arr4);
console.log("splice插入操作的返回值："+splice_in_arr4);
console.log("splice插入操作的返回值类型："+typeof splice_in_arr4);

// 4.位置方法  indexOf() lastIndexOf()
// indexOf(元素，起始位置) 从左往右查询元素第一次出现的位置，返回值为找到的索引位置
// 查找时起始位置也在查找范围内
var arr5 = ['今天','明天','昨天','明天','昨天','明天'];
console.log("数组为："+arr5);
var index1 = arr5.indexOf('明天');
console.log("明天第一次出现的位置为："+index1);
var index2 = arr5.indexOf('明天',2);
console.log("明天在第2个元素后第一次出现的位置为："+index2);
var index2 = arr5.indexOf('明天',3);
console.log("明天在第3个元素后第一次出现的位置为："+index2);
// lastIndexOf(元素，起始位置) 从右向左查询元素第一次出现的位置，返回值为找到的索引位置
// 查找时起始位置也在查找范围内
var last_index1 = arr5.lastIndexOf("明天");
console.log("明天最后一次出现的位置为："+last_index1);
var last_index2 = arr5.lastIndexOf('明天',2);
console.log("明天从第2个元素往前数，第一次出现的位置为："+last_index2);
var last_index3 = arr5.lastIndexOf('明天',3);
console.log("明天从第3个元素往前数，第一次出现的位置为："+last_index3);

// 5.迭代方法 filter() map() forEach()
// filter(function(item,index,array){...}) 过滤数组元素，返回结果集,传入的function()的array参数可以被省略
var arr6 = [1,2,3,4,5,6,7,8,9,10];
var filter_return_results = arr6.filter(function(item,index,array){
	if(item % 2 === 0){
		return item;
	}
});
console.log(filter_return_results);
// map() 返回处理后的结果集
var arr7 = [
	{
		name:"shannen",
		age:17
	},
	{
		name:"Ella",
		age:18
	},
	{
		name:"Elaine",
		age:23
	}
];
var mapReturnResults = arr7.map(function(item,index,array){
	var modifyName = item.name + " Huang";
	var modifyAge = item.age * 2;
	return {modifyName,modifyAge};
});
console.log(mapReturnResults);
// forEach()
arr7.forEach(function(item,index,array){
	console.log(item.name);
});

console.log('=============================')
var newarr = {
		name:"test",
		age:289
	};
arr7.unshift(newarr);
console.log(arr7);
console.log('=============================')
arr7.push(newarr);
console.log(arr7);
// unshift()方法 在数组的前端添加项 返回数组的新长度
// unshift() 方法不创建新的创建，而是直接修改原有的数组
// shift()方法：移除数组中的第一项并返回该项
// push()方法：从数组末端添加项 把一个或多个元素添加到数组的尾部
// pop()方法：从数组末端移除项