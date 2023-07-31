import styles from './footer.module.scss';
import logo from '../../assets/logo.png';
import { Social } from './components/Social/Social';
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <section className={`${styles.Footer} p3`}>
           <div className={`${styles.FooterContainer} paddings container`}>
               <div className={`${styles.FooterContainerContent}  flexCenter`}>
                   <div className={`${styles.FooterContainerContentItem}`}>
                      <img src={logo} alt="" />
                      <Social/>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                      <h6 className={`cardo`}>Explore</h6>
                      <ul>
                        <li><Link to='/home' href="">Home</Link></li>
                        <li><Link to='/about'  href="">About</Link></li>
                        <li><Link to='/articles'  href="">Articles</Link></li>
                        <li><Link to='/our-store'  href="">Our Store</Link></li>
                        <li><Link to='/contact-us' href="">Contact Us</Link></li>
                      </ul>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                     <h6 className={`cardo`}>Utility Pages</h6>
                     <ul>
                        <li><Link to='/style-guide' href="">Style Guid</Link></li>
                        <li><Link to='/404' href="">404 Not Found</Link></li>
                        <li><Link to='/password-protected' href="">Password Protected</Link></li>
                        <li><Link to='/liseness' href="">Lisenses</Link></li>
                        <li><Link to='/changelog' href="">Changelog</Link></li>
                     </ul>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                     <h6 className={`cardo`}>Keep in Touch</h6>
                       <div>
                         <span>Adress:</span>
                         <span>24A Kingston St, Los Vegas <br/> NC 28202, USA.</span>
                       </div>
                       <div>
                         <span>Mail: </span>
                         <span>support@pages.com</span>
                       </div>
                       <div>
                        <span>Phone :</span>
                        <span>(+22) 123 - 4567 - 900</span>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    )
}