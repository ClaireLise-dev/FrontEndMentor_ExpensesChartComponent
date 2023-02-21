import { useState } from 'react'
import classes from './chart.module.css'

function Chart(props) {
  const [hover, setHover] = useState(false)

  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const date = new Date()
  const today = daysOfWeek[date.getDay()]

  let blockColor = { backgroundColor: 'hsl(10, 79%, 65%)' }

  if (today === props.day) {
    blockColor = { backgroundColor: 'hsl(186, 34%, 60%)' }
  }
  if (hover) {
    blockColor = { backgroundColor: 'hsl(10, 79%, 75%)' }
  }
  if (today === props.day && hover) {
    blockColor = { backgroundColor: 'hsl(186, 34%, 75%)' }
  }

  const blockHeight = {
    height: props.amount * 3 + 'px',
  }

  return (
    <>
      <div className={classes.ChartContainer}>
        <div
          className={classes.BoxAmount}
          style={{ visibility: hover ? 'visible' : 'hidden' }}
        >
          ${props.amount}
        </div>
        <div
          className={classes.Block}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ ...blockHeight, ...blockColor }}
        ></div>
        <div className={classes.Day}>{props.day}</div>
      </div>
    </>
  )
}

export default Chart
