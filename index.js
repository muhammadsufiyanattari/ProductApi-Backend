import express from 'express'
import { prodcuts } from './ProductData'
const app = express()
const port = 3000

app.get('/:id', (req, res) => {
//   res.send(`Muhammad Sufiyan ! ${req.params.id}`)
  res.send(
    prodcuts
)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})