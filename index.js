const http = require('http')
const fs = require('fs').promises

const routerGET = {
  '/': async (req, res) => {
    const data = await fs.readFile('./views/index.html', 'utf-8')
    res.end(data)
  },
  '/contacts.html': async (req, res) => {
    const data = await fs.readFile('./views/contacts.html', 'utf-8')
    res.end(data)
  },
  '/about.html': async (req, res) => {
    const data = await fs.readFile('./views/about.html', 'utf-8')
    res.end(data)
  }
}

const requestListener = async (req, res) => {
  if (routerGET[req.url]) {
    return routerGET[req.url](req, res)
  }
  const data = await fs.readFile('./views/error.html', 'utf-8')
  res.end(data)
}

const server = http.createServer(requestListener)

server.listen(3000)
