import styles from './card.module.scss';
import logo1 from '../../../../assets/logo1.png'
import logo2 from '../../../../assets/logo2.png'
import logo3 from '../../../../assets/logo3.png'
import logo4 from '../../../../assets/logo4.png'

export const Card = () => {
    return (
        <div className={`${styles.card}`}>
           <div className={`${styles.cardContent}`}>
             <img src={logo1} alt="" />
             <h6 className={`cardo`}>Amazen Corp.</h6>
             <p>They has been helping readers, <br/> music lovers, and videophiles <br/>  find quality material.</p>
           </div>

            <div className={`${styles.cardContent}`}>
             <img src={logo2} alt="" />
             <h6 className={`cardo`}>Megan Books</h6>
             <p>We help physical bookstores <br/>  manage their overstock to <br/>  the book inventory.</p>
           </div>

            <div className={`${styles.cardContent}`}>
             <img src={logo3} alt="" />
             <h6 className={`cardo`}>Megank</h6>
             <p>Bookstore serving up the full <br/>  spectrum of Black literature <br/>  and wine black books.</p>
           </div>

            <div className={`${styles.cardContent}`}>
             <img src={logo4} alt="" />
             <h6 className={`cardo`}>Urban Store</h6>
             <p>We also carry the latest records, <br/>  issues of all of your favorite <br/>  comic books.</p>
           </div>
        </div>
    )
}