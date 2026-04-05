import { useState } from "react"
import { deleteTransaction } from "../api"

function Transactions({ transactions, refresh }) {

  const [search, setSearch] = useState("")

  // Filter transactions based on category
  const filteredTransactions = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = async (id) => {
    await deleteTransaction(id)
    refresh()
  }

  return (
    <div>

      <h2>Transactions</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search category"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{marginBottom:"10px", padding:"6px"}}
      />

      <table border="1">

        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredTransactions.map(t => (

            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>

              <td>
                <button className="delete-btn" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default Transactions