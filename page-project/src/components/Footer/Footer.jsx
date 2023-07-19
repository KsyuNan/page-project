import styles from './footer.module.scss';
import logo from '../../assets/logo.png';
import { Social } from './components/Social/Social';


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
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Our Store</a></li>
                        <li><a href="">Contact Us</a></li>
                      </ul>
                   </div>
                   <div className={`${styles.FooterContainerContentItem}`}>
                     <h6 className={`cardo`}>Utility Pages</h6>
                     <ul>
                        <li><a href="">Style Guid</a></li>
                        <li><a href="">404 Not Found</a></li>
                        <li><a href="">Password Protected</a></li>
                        <li><a href="">Lisenses</a></li>
                        <li><a href="">Changelog</a></li>
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