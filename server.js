const http = require('http')
const server = http.createServer((req, res) => {
        console.log('New connection')
        res.end('Hello Rohan yo wassup')
})
const PORT =  process.env.PORT || 8080
server.listen(PORT, () => console.log('listening'))