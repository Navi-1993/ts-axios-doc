// boolean
var isDone = false; // true or false 
// number
// 以0表示进制，0后面的英文代表什么进制的缩写
var binaryDigit = 20; // 2进制
var octalDigit = 20; // 8进制
var decimalDigit = 20; // 10进制
var hexDigit = 0x14; // 16进制
// string
var myname = 'xuefeng';
var age = 26;
var sentence = "hello, my name is " + myname + ", I was " + age + " years old"; // ES6字符串模板写法
var sentence1 = 'hello, my name is ' + myname + ' I was ' + age + ' years old '; // ES6之前的写法
// array
var list = [1, 2, 3]; // 定义数组，且元素必须为数字，一般推荐这种写法
var list2 = [1, 2, 3]; // 定义数组，且元素必须为数字
//tuper
var arr; // 声明变量
arr = ['hello', 10]; // 赋值
var arr1 = ['hello', 11]; //声明的同时进行赋值
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var checkIdx = Color[4];
console.log(c);
console.log(checkIdx); // => Blue
// any 会跳过ts语法的类型检查
// 当真的不知道需要做何检查时可以使用，但不应该滥用
var notSure = 4;
var arr_ = [1, true, 'xuefeng'];
// null 与 undefined 是typescript的子类型
// null
var u = undefined;
var n = undefined;
// undefined
// void
// never
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
