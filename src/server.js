import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from 'components/App'
import sendmsg from 'utilities/sendmsg'
import renderHTML from 'utilities/render'

const app = express()
const jsonParse = bodyParser.json()

app.use(express.static(__dirname + '/'))

app.get('/*', (req, res) => {
  const context = {}
  const componentHTML = ReactDom.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App url={req.url} />
    </StaticRouter>
  )
  res.setHeader('Cache-Control', 'max-age=86400')
  res.end(renderHTML(componentHTML, req.url))
})

app.post('/send-form/*', jsonParse, (req, res) => {
  sendmsg(req.body)
  setTimeout(() => {
    res.send('success!')
  }, 0)
})

const PORT = process.env.PORT || 3009

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
