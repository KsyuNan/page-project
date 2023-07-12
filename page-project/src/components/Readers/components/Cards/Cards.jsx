import styles from './cards.module.scss';
import ava1 from '../../../../assets/ava1.png';
import ava2 from '../../../../assets/ava2.png'
import ava3 from '../../../../assets/ava3.png'
import {Rating } from '../Rating/Rating';

export const Cards = () => {
    return (
        <section className={`${styles.Cards}`}>
         <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <img src={ava1} alt="ava1" />
              <div className={`${styles.CardsCardTitleName}`}>
                 <h4 >James Williams</h4>
                 <Rating />
              </div>
           </div>
           <h6 className={`cardo`}>“ Great Books Collections ”</h6>
           <p className={`inter`}>I was searching this book for <br/> many  years and I was happy that I <br/> could  find it here.</p>
         
         </div>

         <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <img src={ava2} alt="ava2" />
              <div className={`${styles.CardsCardTitleName}`}>
                 <h4>Angeline Flora</h4>
                 <Rating />
              </div>
              </div>
           <h6 className={`cardo`}>“ Perfect Response Author”</h6>
           <p className={`inter`}>I had a question about the book <br/> and the author response was great <br/> & comfort.</p>
         
         </div>

         <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <img src={ava3} alt="ava3" />
              <div className={`${styles.CardsCardTitleName}`}>
                 <h4>Chris Adams</h4>
                 <Rating />
              </div>
            </div>
            <h6 className={`cardo`}>“ Creative Writing Skill”</h6>
           <p className={`inter`}>Sent an email after to books <br/> arrived to ask about the author & I <br/> received a reply.</p>
           
         </div>
         


        </section>
    )
}