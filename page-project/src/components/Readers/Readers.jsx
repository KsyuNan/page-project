import styles from './readers.module.scss';
import { Rating }  from './components/Rating/Rating';
import { Cards } from './components/Cards/Cards';

export const Readers = () => {
    return (
     <section className={`${styles.Readers} p3`}>
        <div className={`${styles.ReadersContainer} paddings container flexCenter`}>
            <div className={`${styles.ReadersContainerDesc}`}>
               <div className={`title cardo`}>
                 <h2>Words From Our <br/> Readers</h2>
               </div>
               <p className={`p3 inter`}>We believe that bookstores are essential to a <br/> healthy culture. 
                They’re where authors can <br/> connect with readers, where we discover 
                new <br/> writers, where children get hooked on the thrill <br/> of reading 
                that can last a lifetime.
               </p>
               <Rating />
               <h5>Overall Customer Ratings</h5>
            </div>
            <div className={`$styles.ReadersContainerCards`}>
              <Cards/>
            </div>
        </div>
     </section>
    )
}