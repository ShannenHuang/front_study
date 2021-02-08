// 对象 (属性和方法)字面量创建
var person= {
	name:'邓荣鹏',
	age:22,
	sexual:'male',
	school:'华侨大学',
	love:function(){
		alert("邓荣鹏超级喜欢黄水珠呀");
		return '黄水珠';
	}
}
console.log(person);
console.log(person.name);
console.log(person.love);

// es6中对象的单体模式
var person = {
	name:"alex",
	age: 20,
	fav(){
		console.log(this);
		console.log(arguments);
	}
};
person.fav();

// fav(){             

// }

// 等价于:

// function fav(){

    

// }

// 等价于

// var fav = function(){  

// }
