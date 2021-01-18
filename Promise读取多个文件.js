// Promise读取多个文件
// 第一种写法：常规写法
    // 引入fs
    // const fs = require('fs')
    // fs.readFile('./data/读取文件01.md',(err,data1) => {
    //     console.log(data1.toString())
    //     fs.readFile('./data/读取文件01.md',(err,data2) => {
    //         console.log(data2.toString())
    //         fs.readFile('./data/读取文件03.md',(err,data3) => {
    //             console.log(data3.toString())
    //         })
    //     })
    // })

// 第二种写法：Promise写法
// 更改文件地址可切换成功和失败状态
    // 引入 fs
    const fs = require('fs')
    new Promise((resolve, reject) => {
        fs.readFile('./data/读取文件01.mds',(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    }).then(value => {
        return new Promise((resolve, reject) => {
            fs.readFile('./data/读取文件02.mds',(err,data) => {
                if(err) reject(err)
                resolve([value,data])
            })
        })
    },(reason) => {
        console.log('读取文件02失败了')
    }).then(value => {
        return new Promise((resolve, reject) => {
            fs.readFile('./data/读取文件03.mds',(err,data) => {
                if(err){
                    reject(err)
                }else{
                    value.push(data)
                    resolve(value)
                }
            })
        })
    },(reason) => {
        console.log('读取文件03失败了')
    }).then(value => {
        console.log('Promise写法：' + value.join('\r\n'))
    },(reason) => {
        console.log('读取三个文件都失败了')
    })


const p = new Promise((resolve, reject) => {
    reject('模拟出错')
})
p.catch(reason => {
    console.warn(reason)
})
