import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function MonthlyChart({ transactions }) {

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ]

  const monthlyExpense = new Array(12).fill(0)

  transactions.forEach(t => {

    if (t.type === "expense") {

      const month = new Date(t.date).getMonth()

      monthlyExpense[month] += t.amount
    }

  })

  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Expenses",
        data: monthlyExpense
      }
    ]
  }

  return (
    <div style={{width:"600px", margin:"30px auto"}}>
      <h3>Monthly Expense Chart</h3>
      <Bar data={data}/>
    </div>
  )
}

export default MonthlyChart