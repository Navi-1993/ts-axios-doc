// boolean
let isDone: boolean = false // true or false 

// number
// 以0表示进制，0后面的英文代表什么进制的缩写
let binaryDigit: number = 0b10100 // 2进制
let octalDigit: number = 0o24 // 8进制
let decimalDigit: number = 20 // 10进制
let hexDigit: number = 0x14 // 16进制

// string
let myname: string = 'xuefeng'
let age: number = 26
let sentence = `hello, my name is ${myname}, I was ${age} years old` // ES6字符串模板写法
let sentence1 = 'hello, my name is ' + myname + ' I was ' + age + ' years old ' // ES6之前的写法

// number
let list: number[] = [1, 2, 3] // 定义数组，且元素必须为数字，一般推荐这种写法
let list2: Array<number> = [1, 2, 3] // 定义数组，且元素必须为数字


//tuper
let arr: [string, number] // 声明变量
arr = ['hello', 10] // 赋值
let arr1: [string, number] = ['hello', 11] //声明的同时进行赋值
