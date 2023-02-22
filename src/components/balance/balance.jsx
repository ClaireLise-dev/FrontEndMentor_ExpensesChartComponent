import classes from './balance.module.css'
import logo from '../../images/logo.svg'

function Balance() {
  return (
    <header className={classes.Main}>
      <div className={classes.Text}>
        <p>My balance</p>
        <h1 className={classes.Amount}>$921.48</h1>
      </div>
      <div className={classes.Logo}>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Balance
