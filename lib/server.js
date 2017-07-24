import express from 'express'
import config from './config'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { answer: 42 })
})

/* eslint-disable-no-console */
app.listen(config.port, () => console.info(`Running on http://localhost:${config.port}`))
/* eslint-enable-no-console */