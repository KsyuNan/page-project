import styles from './dropdown.module.scss'
import './dropdown.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { DataItems } from './data';

export const Dropdown = () => {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? `${styles.dropdownMenu} clicked` : `${styles.dropdown}` + ' secondary-menu'}>
                    {DataItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                                >
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}