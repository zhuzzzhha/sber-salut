
import http from 'http'
import express, { response } from 'express'

const app = express()


const data = fs.readFile('data.json', 'utf8');
const parsedData = JSON.parse(data);

app.get('/Learning', (req, res) => {
    const { evolve, unit } = req.query
    const result = parsedData[evolve][unit];
    let json_data = {}
    for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
        json_data.translates = json_data.translates || [];
        json_data.translates.push(result[i]);
    } else {
        json_data.words = json_data.words || [];
        json_data.words.push(result[i]);
    }
  }
    res.json(json_data)
})

app.get('/Repetition', (req, res) => {
  const { evolve, unit } = req.query
  const result = parsedData[evolve][unit];
  let json_data = {}
  for (let i = 0; i < result.length; i++) {
  if (i % 2 !== 0) {
      json_data.translates = json_data.translates || [];
      json_data.translates.push(result[i]);
  } else {
      json_data.words = json_data.words || [];
      json_data.words.push(result[i]);
  }
}
  res.json(json_data)
})

app.listen(3001, () => {console.log("Server Started on port 3001")})


/*export const server = () => {
  const route = []
  return {
    get(url, callback) {
      route.push({url, callback, method: 'GET'})
    },
    post(url, callback) {
      route.push({url, callback, method: 'POST'})
    },
    delete(url, callback) {
      route.push({url, callback, method: 'DELETE'})
    },
    patch(url, callback) {
      route.push({url, callback, method: 'PATCH'})
    },
    listen() {
      const listener = (req, res) => {
        if (req.method == 'GET') {
          if (req.url == '/Evolves') {
            res.end('All books')
          }
        }
        res.end('Hello world')
      }
      const server = http.createServer(listener)
      server.listen(3000)
    }
  }

}*/
