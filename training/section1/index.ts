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

// array
let list: number[] = [1, 2, 3] // 定义数组，且元素必须为数字，一般推荐这种写法
let list2: Array<number> = [1, 2, 3] // 定义数组，且元素必须为数字


//tuper
let arr: [string, number] // 声明变量
arr = ['hello', 10] // 赋值
let arr1: [string, number] = ['hello', 11] //声明的同时进行赋值

// enum
enum Color {
  Red, //index = 0
  Green = 3, // index = 3
  Blue
}
let c: Color = Color.Green
let checkIdx = Color[4]
console.log(c)
console.log(checkIdx) // => Blue



// any 会跳过ts语法的类型检查
// 当真的不知道需要做何检查时可以使用，但不应该滥用
let notSure: any = 4

let arr_: any[] = [1, true, 'xuefeng']

// null 与 undefined 是typescript的子类型

// null
let u: undefined = undefined
let n: null = undefined

// undefined

// void



// never

function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}
