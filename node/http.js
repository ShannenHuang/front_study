var http = require('http')
var url = require('url')
// 创建实例
var server = http.createServer()
// 注册request事件
server.on('request', function (req, res) {
    console.log('收到客户端请求')
    // console.log(req)
    // const url = 
    // const myurl = new URL('https://127.0.0.1:3000/urt')
    // console.log(myurl)
    // console.log(myurl.pathname)
    const myurl = url.parse(req.url)
    console.log(myurl.query)
})
// 绑定端口，启动服务
server.listen(3000, function () {
    console.log('服务器已启动。。。')
})




