const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

const filePath = "./transactions.json"



// GET all transactions
app.get("/transactions", (req, res) => {

  const data = JSON.parse(fs.readFileSync(filePath))

  res.json(data)

})



// POST transaction
app.post("/transactions", (req, res) => {

  const data = JSON.parse(fs.readFileSync(filePath))

  const newTransaction = {
    id: Date.now(),
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    type: req.body.type
  }

  data.push(newTransaction)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

  res.json(newTransaction)

})



// DELETE transaction
app.delete("/transactions/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const data = JSON.parse(fs.readFileSync(filePath))

  const filtered = data.filter(t => t.id !== id)

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2))

  res.json({ message: "Transaction deleted" })

})



app.listen(5000, () => {
  console.log("Server running on port 5000")
})