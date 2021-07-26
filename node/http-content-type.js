var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
    console.log('收到客户端请求')
    var url = req.url
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('普通文本')
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<h1>html</h1>')
        console.log('html')
    }
})
server.listen(3000, function () {
    console.log('服务器启动....')
})