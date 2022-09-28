import { Link } from "react-router-dom"
import './style.css'
export const Menu = () => {

  return (
    <>
      <header>
        <nav className="menu">
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            
            <li> <Link to={'/services'}>Services</Link> </li>
            
            <li> <Link to={'/contacts'}>Contact</Link> </li>
          </ul>
        </nav>

      </header>
    </>
  )

}