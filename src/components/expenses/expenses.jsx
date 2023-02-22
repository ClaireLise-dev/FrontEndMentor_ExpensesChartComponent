import classes from './expenses.module.css'
import days from '../../data/data.json'
import { useState, useEffect } from 'react'
import Chart from '../chart/chart'

function Expenses() {
  const [data, setData] = useState(days)
  useEffect(() => setData(days), [])

  return (
    <main className={classes.Main}>
      <h1>Spending - Last 7 days</h1>
      <div className={classes.BlocksContainer}>
        {data.map((days) => (
          <Chart key={days.key} day={days.day} amount={days.amount} />
        ))}
      </div>
      <div className={classes.Total}>
        <div className={classes.TotalAmount}>
          <p className={classes.TotalText}>Total this month</p>
          <p className={classes.TotalNumber}>$478.33</p>
        </div>
        <div className={classes.LastMonth}>
          <p className={classes.Percent}>+2.4%</p>
          <p className={classes.TotalText}>from last month</p>
        </div>
      </div>
    </main>
  )
}

export default Expenses
