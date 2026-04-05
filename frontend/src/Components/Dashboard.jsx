function Dashboard({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0)

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0)

  const balance = income - expense

  return (
    <div>

      <h2>Financial Summary</h2>
      <div className="summary">

  <div className="card balance">
    <h3>Total Balance</h3>
    <p>₹{balance}</p>
  </div>

  <div className="card income">
    <h3>Income</h3>
    <p>₹{income}</p>
  </div>

  <div className="card expense">
    <h3>Expenses</h3>
    <p>₹{expense}</p>
  </div>

</div>

    </div>
  )
}

export default Dashboard