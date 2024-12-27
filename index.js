import express from 'express'
import { prodcuts } from './ProductData'
import cors from "cors";
const app = express()
const port = 3000

app.get('/:id', (req, res) => {
//   res.send(`Muhammad Sufiyan ! ${req.params.id}`)
 
app.use(cors({origin: ["http://localhost:5173/","http://localhost:3000/","https://sufiyan-ecommerce-website.surge.sh/"]}))
  res.send(
    prodcuts
)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})