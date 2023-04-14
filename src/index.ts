import express from 'express'
const app = express()

app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('dulce de leche')
  res.send('alfajores')
})

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
