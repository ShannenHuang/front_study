var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        fs.readFile('../小米商城顶部栏.html', function (err, data) {
            if (!err) {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            } else {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end(err)
            }
        })
    } else if (url === '/img') {
        fs.readFile('../image/skin1.jpg', function (err, data) {
            if (!err) {
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            } else {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end(err)
            }
        })
    }
})
server.listen(3000, function () {
    console.log('服务器启动...')
})