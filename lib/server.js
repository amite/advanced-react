import express from 'express'
import config from './config'
import serverRender from './serverRender'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const initialContent = serverRender()
  res.render('index', { initialContent })
})

/* eslint-disable no-console */
app.listen(config.port, () => console.info(`Running on http://localhost:${config.port}`))
/* eslint-enable no-console */