### async函数与await表达式
**1.async函数**  
async函数的返回值是Promise对象  
promise对象的结果由async函数执行的返回值决定
````
// async函数
    async function fn(){
        // 只要返回的不是promise类型的对象，返回的结果就是成功promise对象
        // 1.返回一个字符串
        return '返回'

        // 2.返回undefined
        // return

        // 3.抛出错误时，返回的结果是rejected
        // throw new Error('出错了')

        //4.返回的结果是promise对象
        // return new Promise((resolve, reject) => {
        //     resolve('成功了')
        //     // reject('失败了')
        // })
    }
    const result = fn()
    console.log(result)
    result.then(value => {
        console.log(value)
    }).catch((reason) => {
        console.warn(reason)
    })
```` 

**2.await表达式**  
(1)await必须写在async函数中（⚠️ async可以没有await关键字） 
(2)await后面的表达式一般为promise对象  
(3)await返回的是promise成功的值  
(4)await的promise失败了，就会抛出异常，需要try...catch捕获  
```
//成功 返回promise成功的值
const pro = new Promise((resolve, reject) => {
        resolve('成功返回数据')
    })
    async function main(){
        let result = await pro;
        console.log(result)
    }
    // 调用async函数
    main()          // 成功返回数据
```

```
// 失败 需要用try...catch捕获
const err = new Promise((resolve, reject) => {
        reject('失败报错了')
    })
    async function mainErr(){
        try{
            let info = await err;
            console.logo(info)
        }
        catch(e){
            console.warn(e)
        }
    }
    // 调用async函数
    mainErr()          // 失败报错了
```
