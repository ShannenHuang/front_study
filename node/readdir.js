var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/dir') {
        fs.readFile('./data/template.html', (err, data) => {
            if (!err) {
                var wwwDir = 'D:/'
                fs.readdir(wwwDir, (err, files) => {
                    if (!err) {
                        var content = ''
                        files.forEach(function (item) {
                            // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
                            content += `
                            <tr>
                              <td data-value="/"><a class="icon dir" href="/D:/">${item}/</a></td>
                              <td class="detailsColumn" data-value="0"></td>
                              <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                            </tr>
                          `
                        })
                        data = data.toString().replace('^_^', content)
                        res.end(data)
                    } else {
                        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                        res.end(err)
                    }
                })
            } else {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end(err)
            }
        })
    }
})

server.listen(5000, function () {
    console.log('server start...')
})