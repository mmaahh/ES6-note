//引入fs模块
const fs = require('fs')
//读取文件01
function readOne (){
    return new Promise((resolve, reject) => {
        fs.readFile('./data/读取文件01.md',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
//读取文件02
function readTwo (){
    return new Promise((resolve, reject) => {
        fs.readFile('./data/读取文件02.md',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
//读取文件03
function readThree (){
    return new Promise((resolve, reject) => {
        fs.readFile('./data/读取文件03.md',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
// 声明一个async函数
async function readAll(){
    let fileOne = await readOne()
    let fileTwo = await readTwo()
    let fileThree = await readThree()
    console.log(fileOne.toString())
    console.log(fileTwo.toString())
    console.log(fileThree.toString())
}
readAll()
