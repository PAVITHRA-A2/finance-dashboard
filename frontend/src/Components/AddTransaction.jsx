import { useState } from "react"
import { addTransaction } from "../api"
import "../App.css"

function AddTransaction({ refresh }) {

  const [date,setDate] = useState("")
  const [amount,setAmount] = useState("")
  const [category,setCategory] = useState("")
  const [type,setType] = useState("expense")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const transaction = {
      date,
      amount: Number(amount),
      category, 
      type
    }

    await addTransaction(transaction)

   // alert("Transaction Added")

    setDate("")
    setAmount("")
    setCategory("")
    setType("expense")

    refresh()
  }

  return (

    <form onSubmit={handleSubmit}>

      <h3>Add Transaction</h3>

      <input
      type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      required
      />

      <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      required
      />

      <input
      type="text"
      placeholder="Category"
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      required
      />

      <select
      value={type}
      onChange={(e)=>setType(e.target.value)}
      >

        <option value="expense">Expense</option>
        <option value="income">Income</option>

      </select>

      <button type="submit">Add</button>

    </form>

  )
}

export default AddTransaction