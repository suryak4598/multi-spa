import {Link, NavLink} from "react-router-dom"
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.appname}>
        <h1>Multi SPA</h1>
      </div>
      <div>
        <nav className={classes.navlink}>
          <ul>
            <NavLink className={classes.li} to="/home">
              Home
            </NavLink>
            <NavLink className={classes.li} to="/welcome">
              Welcome
            </NavLink>
            <NavLink className={classes.li} to="/product">
              Product
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
