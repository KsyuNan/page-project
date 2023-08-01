import styles from './footer.module.scss';
import logo from '../../assets/logo.png';
import { Social } from './components/Social/Social';
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <section className={`${styles.Footer} p3`}>
           <div className={`${styles.FooterContainer} paddings container`}>
               <div className={`${styles.FooterContainerContent}`}>
                   <div className={`${styles.FooterContainerContentItem}`}>
                      <img className={`responsive`} src={logo} alt="" />
                      <Social/>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                      <h6 className={`cardo`}>Explore</h6>
                      <ul>
                        <li className={`inter`}><Link to='/home' href="">Home</Link></li>
                        <li className={`inter`}><Link to='/about'  href="">About</Link></li>
                        <li className={`inter`}><Link to='/articles'  href="">Articles</Link></li>
                        <li className={`inter`}><Link to='/our-store'  href="">Our Store</Link></li>
                        <li className={`inter`}><Link to='/contact-us' href="">Contact Us</Link></li>
                      </ul>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                     <h6 className={`cardo`}>Utility Pages</h6>
                     <ul>
                        <li className={`inter`}><Link to='/style-guide' href="">Style Guid</Link></li>
                        <li className={`inter`}><Link to='/page-not-found' href="">404 Not Found</Link></li>
                        <li className={`inter`}><Link to='/password-protected' href="">Password Protected</Link></li>
                        <li className={`inter`}><Link to='/liseness' href="">Lisenses</Link></li>
                        <li className={`inter`}><Link to='/changelog' href="">Changelog</Link></li>
                     </ul>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                     <h6 className={`cardo`}>Keep in Touch</h6>
                       <div className={`${styles.FooterContainerContentItemInfo}`}>
                         <p>Adress:</p>
                         <p className={`inter`}>24A Kingston St, Los Vegas <br/> NC 28202, USA.</p>
                       </div>
                       <div className={`${styles.FooterContainerContentItemInfo}`}>
                         <p>Mail: </p>
                         <p className={`inter`}>support@pages.com</p>
                       </div>
                       <div className={`${styles.FooterContainerContentItemInfo}`}>
                        <p>Phone :</p>
                        <p className={`inter`}>(+22) 123 - 4567 - 900</p>
                       </div>
                   </div>
                   
               </div>
               <div className={` ${styles.FooterContainerAuthor}`}>
                  <div className={`footerSeparator`}></div>
                  <p className={`footerAuthor flexCenter inter`}>© Drafted by &nbsp; <a href=""> VictorFlow </a>&nbsp; - Powered by &nbsp;<a href=""> Webflow.</a> </p>
                </div>
           </div>
        </section>
    )
}