import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti'
import {HiShoppingCart} from 'react-icons/hi';
export const Header = () => {
    return (
        <section className={styles.header}>
            <div className={` ${styles.headerContainer} paddings flexCenter container`}>
                <div className={`${styles.headerContainerLogo} flexStart`}>
                  <img src={logo} alt="" width={100}/>

                <div className={` ${styles.headerContainerSocial} flexStart`}>
                  <a><TiSocialFacebook size={20}/></a>
                  <a><TiSocialTwitter size={20}/></a>
                  <a><TiSocialLinkedin size={20}/></a>
                </div>
                </div>

                <nav className={`${styles.headerContainerNav} flexCenter`}>
                    <ul className={`${styles.headerContainerNavMenu} flexCenter`}>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href=""><HiShoppingCart /></a></li>
                        <li><button className={`btn-main`}>Order Today</button>   </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}