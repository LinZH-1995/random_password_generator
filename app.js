const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port} !`)
})