import { Link } from "react-router-dom"
import {IoCubeOutline} from 'react-icons/io5'
import './style.css'
export const Logo = () => {
  return (
    <>
      <div className="cad">
        <Link to='/'><IoCubeOutline/></Link>
      </div>
    </>
  )

}