import styles from './nav.module.scss'
import { useState } from 'react'
import { Link}  from 'react-router-dom'
import { Dropdown } from './components/Dropdown/Dropdown'
import logo from '../../assets/logo.png'
import { Social } from './components/Social/Social'
import { MainBtn } from '../Button/MainBtn/MainBtn'

function Nav (){

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


    return (
        <>
        <div className={`${styles.navbar}`}>
         <nav className={`${styles.navbarContainer} container padding flexCenter`}>
            <Link 
               to='/home' 
               className={`${styles.navbarContainerLogo}`} 
               onClick={closeMobileMenu}
            > 
               <img src={logo} alt="" width={100}/>
               <Social />
            </Link>
          <div className={`${styles.navbarContainerMenuicon}`} onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? `${styles.navbarContainerNavmenu} ` : `${styles.navbarContainerNavmenu}`}>
             <li className={`${styles.navbarContainerNavmenuItem} inter`}>
               <Link 
                 to='/home' 
                 className={`${styles.navbarContainerNavmenuItemLinks} active`} 
                 onClick={closeMobileMenu} 
               >
                 Home
               </Link>
             </li>
             <li
               className={`${styles.navbarContainerNavmenuItem}`}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
             ></li>
             <li className={`${styles.navbarContainerNavmenuItem} inter`}>
               <Link 
                 to='/about' 
                 className={`${styles.navbarContainerNavmenuItemLinks}`} 
                 onClick={closeMobileMenu} 
              >
                 About 
               </Link>
               
             </li>
             <li className={`${styles.navbarContainerNavmenuItem} inter`}>
               <Link
                className={`${styles.navbarContainerNavmenuItemLinks}`} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
               >
                 Pages <i className='fas fa-caret-down' />
                 {dropdown && <Dropdown />}
               </Link>
             </li>
             <li className={`${styles.navbarContainerNavmenuItem} inter`}>
               <Link 
                 to='/contact-us' 
                 className={`${styles.navbarContainerNavmenuItemLinks}`} 
                 onClick={closeMobileMenu} 
               >
                 Contact Us
               </Link>
             </li>
             <li className={`${styles.navbarContainerNavmenuItem} inter`}>
               <Link 
                 to='/contact-us' 
                 className={`${styles.navbarContainerNavmenuItemLinks}`} 
                 onClick={closeMobileMenu} 
               >
                 <i className="fa-solid fa-cart-shopping"></i>
               </Link>
             </li>
          </ul>
          <Link to="/contact-us">
               <MainBtn title='Order Today'/>
          </Link>
         </nav>
        </div>
        </>
    )
}

export default Nav


//https://www.youtube.com/watch?v=T2MhVxJxsL0   Responsive menu 