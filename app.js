const express = require('express')
const exphbs = require('express-handlebars')
const generatePasswords = require('./generate_password')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePasswords(req.body)
  res.render('index', { password: password, options: options})
})

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port} !`)
})