//Promise 读取文件
//一.正常方法读取文件：
    // 引入fs模块
    // const fs = require('fs')
    // // 调用方法读取文件
    // fs.readFile('./note/Promise.md',(err,data) => {
    //     // 如果失败，则抛出错误
    //     if(err) {
    //         throw err
    //     }
    //     // 如果没出错，则输出内容 此时输出的data会是Buffer，故加上toString()
    //     console.log(data)
    // })
    // 打卡编辑器控制台，输入node Promise.js，即可输出Promise.md文件内容，若文件路径写错，则打开err内容
    /*
    * 【延伸】
    * readFile读取文件
    * fs.readFile(filename,[option],callback) 方法读取文件。
    * 参数说明：
    * filename String 文件名
    * option Object
    * encoding String |null default=null
    * flag String default='r'
    * callback Function
    * */

//二.Promise方法读取文件
    // 引入fs
    // const fs = require('fs')
    // const p = new Promise((resolve,reject) => {
    //     fs.readFile('./note/Promise.md',(err,data) => {
    //         // 如果判断失败
    //         if(err) reject(err)   // 更改p状态为reject
    //         // 如果成功
    //         resolve(data)         // 更改p状态为resolve
    //     })
    // })
    // p.then((value) => {
    //     console.log(value.toString())
    // },(reason) => {
    //     console.log('读取失败：' + reason)
    // })

const p = new Promise((resolve,reject) => {
    // 创建对象
    const xhr = new XMLHttpRequest()
    // 初始化
    xhr.open('get','https://api.apiopen.top/getJoke')
    // 发送
    xhr.send()
    // 绑定事件，处理响应结果
    xhr.onreadystatechange =  () => {
        // 判断
        if(xhr.readyState === 4){
            // 判断响应状态码结果
            if (xhr.status >= 200 && xhr.status < 300 ) {
                // 表示成功
                resolve(xhr.response)
            } else {
                reject(xhr.status)
            }
        }
    }
})
p.then((value) => {
    console.log(value)
},(reason) => {
    console.log(reason)
})
