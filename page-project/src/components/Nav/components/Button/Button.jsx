import styles from './button.module.scss'
import { Link } from 'react-router-dom'

export const Button = () => {
    return (
        <Link to='contact-us'>
           <button className={`btn-main`}>Order Now</button>
        </Link>
    )
}