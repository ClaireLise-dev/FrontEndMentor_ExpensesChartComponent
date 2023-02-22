import classes from './balance.module.css'
import logo from '../../images/logo.svg'

function Balance() {
  return (
    <section className={classes.Main}>
      <div className={classes.Text}>
        <p>My balance</p>
        <p className={classes.Amount}>$921.48</p>
      </div>
      <div className={classes.Logo}>
        <img src={logo} alt="Logo" />
      </div>
    </section>
  )
}

export default Balance
