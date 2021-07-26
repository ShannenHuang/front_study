// 引入fs文件系统
var fs = require('fs')
fs.readFile('./data/hello.txt', (error, data) => {
    console.log(data.toString())
    console.log(error)
})
fs.writeFile('./data/hello.txt', 'this is hello.txt.', function (error) {
    if (!error) {
        console.log('文件写入成功!')
    } else {
        console.log(error)
    }
})