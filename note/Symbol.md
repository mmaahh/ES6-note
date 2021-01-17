### Symbol
**1.创建方法**  
使用Symbol()方法可以创建一个Symbol的值  
即便键值相同两个Symbol类型的值也是不相同的  
```
let s = Symbol()
console.log('typeof s: ' + typeof s)     // typeof s: symbol
let a = Symbol('蔡文姬')
let b = Symbol('蔡文姬')
console.log(a === b)                     // false
```
使用Symbol.for()方法也可以创建一个Symbol类型的值，但是不会重复创建相同键的值  
（创建一个值之前，会搜索是否具有指定键的Symbol类型的值，如果有则返回，否则新创建一个Symbol值）  
```
let nameA = Symbol.for('瑶')
let nameB = Symbol.for('瑶')
console.log(nameA === nameB)             // true

// 不传参等同
let stringA = Symbol.for()
let stringB = Symbol.for()
console.log(stringA === stringB)         // true
```
【⚠️】Symbol.for()创建的值会被登记在全局环境中供搜索，而Symbol()创建的值不一样  

**2.不能与其他运算符计算，包括本身**  
```
let s = Symbol('1');
console.log('typeof sum:' + typeof s)     // typeof sum:symbol
let sum = s + 1;
console.log('sum:' + sum)                 //  Cannot convert a Symbol value to a number
let sum = s + s;                          //  Cannot convert a Symbol value to a number
console.log(s === '1')                    //  false
console.log(s > 1)                        // Cannot convert a Symbol value to a number
```

【js基本数据类型】  
USONB   // you are so niubility  
u       //undefined  
s       //Symbol  Sting  
o       //Object  
n       // Null number  
b       // Bollean  
【🤔？object到底是基本数据类型还是引用类型】  

**3.使用场景**  
给对象添加属性和方法
```
let game = {
    name:'game',
    up:() => {
        console.log('方法up')
    },
    down:() => {
        console.log('方法down')
    }
}
let methods = {
    up:Symbol('up'),
    down:Symbol('down')
}
game[methods.up] = () => {
   console.log('通过Symbol创建出来的up方法')
}
game[methods.down] = () => {
  console.log('通过Symbol创建出来的down方法')
}
console.log(game)    // 见img文件夹Symbol-01截图
```
为对象添加symbol类型的属性
```
let youxi = {
    name:'猜成语',
    [Symbol()]:() => {          // ⚠️用[]括起来
        console.log('添加symbol属性一')
    },
    [Symbol()]:() => {
        console.log('添加symbol属性二')
    }
}
console.log(youxi)     // 见img文件夹Symbol-02截图
```

**4.Symbol的内置属性**  
【有兴趣自己百度～】
