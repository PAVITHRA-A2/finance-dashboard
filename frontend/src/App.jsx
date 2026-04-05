import { useEffect, useState } from "react"
import { getTransactions } from "./api"

import Dashboard from "./components/Dashboard"
import AddTransaction from "./components/AddTransaction"
import Transactions from "./components/Transactions"
import MonthlyChart from "./components/MonthlyChart"

function App() {

  const [transactions, setTransactions] = useState([])

  const loadTransactions = () => {
    getTransactions().then(setTransactions)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div className="container">

      <h1>Finance Dashboard</h1>

      <Dashboard transactions={transactions} />

      <AddTransaction refresh={loadTransactions} />

      <div className="layout">

        <div className="left">
          <Transactions
            transactions={transactions}
            refresh={loadTransactions}
          />
        </div>

        <div className="right">
          <MonthlyChart transactions={transactions}/>
        </div>

      </div>

    </div>
  )
}

export default App