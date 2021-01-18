### Promise
参考链接[阮一峰 Promise对象 章节](https://es6.ruanyifeng.com/#docs/promise)  
**1.基本语法**  
Promise是ES6引入的异步编程的解决方案，语法上Promise是一个构造函数，用了封装异步操作并可以获取成功或失败的结果
```
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        // 正常数据时
        // let data = '正常数据'
        // resolve(data)        // 调用resolve方法，此时p的状态就是成功
        // 错误数据时
        let err = '错误数据'
        reject(err)          // 调用reject方法，此时p的状态就是失败
    },3000)
})

// 调用Promise对象的then方法
p.then((value) => {
    console.log('成功回调：' + value)
},(reason) => {
    console.log('失败回调：' + reason)
})
```
**2.Promise读取文件实例**  
见[Promise.js](../Promise.js)

**3.Promise封装ajax操作**  
见[PromiseAjax.html](../PromiseAjax.html)  

**4.Promise.protoype.then**  
见[Promise-then.html](../Promise-then.html)  

**5.Promise读取多个文件实例**  
见[Promise读取多个文件.js](../Promise读取多个文件.js)

**6.Promise 的catch方法**
```
const p = new Promise((resolve, reject) => {
    // 设置p状态失败，并设置失败的值
    reject('模拟出错')
})
p.catch(reason => {
    console.warn(reason)
})
```  
⬆上部分代码️同等于下部分代码⬇️，输出结果都一样
```
  const p = new Promise((resolve, reject) => {
        reject('模拟出错')
    })
    p.then(value => {
        console.log(value)
    },reason => {
        console.warn(reason)
    })
```
