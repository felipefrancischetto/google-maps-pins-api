import express from 'express'
import bodyParser from  'body-parser'

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Backed is running on port: ${port}.`))

app.use((req, res, next) => {
  res.send('Backend Google Maps Pins API')
})