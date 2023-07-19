import styles from './cards.module.scss';
import img1 from '../../../../assets/img1.png';
import img2 from '../../../../assets/img2.png';
import img3 from '../../../../assets/img3.png';

export const Cards = () => {
    return (
      <div className={`${styles.Cards} flexCenter`}>
          <div className={`${styles.CardsCard}`}>
              <img src={img1} alt="" />
            <div className={`${styles.CardsCardDesc}`}>
              <h4 className={`cardo`}>Significant reading has more info number</h4>
              <p className={`inter`}>Override the digital divide with <br/> additional clickthroughs from DevOps for real-time schemas.</p>
            <div className={`${styles.CardsCardDescData}`}>
              <a href="#">Read more</a>
              <span>October 6, 2021</span>
            </div>
           </div>
         </div>

         <div className={`${styles.CardsCard}`}>
              <img src={img2} alt="" />
            <div className={`${styles.CardsCardDesc}`}>
              <h4>Many variations of pass majority have suffered</h4>
              <p>Capitalize on low-hanging fruit to <br/> identify a ballpark value-added activity <br/> to beta test.</p>
            <div className={`${styles.CardsCardDescData}`}>
              <a href="#">Read more</a>
              <span>October 6, 2021</span>
            </div>
           </div>
         </div>

         <div className={`${styles.CardsCard}`}>
              <img src={img3} alt="" />
            <div className={`${styles.CardsCardDesc}`}>
              <h4>Words which don’t look even slightly believable</h4>
              <p>Podcasting operational change <br/> management inside of workflows <br/> to establish a framework.</p>
            <div className={`${styles.CardsCardDescData}`}>
              <a href="#">Read more</a>
              <span>October 6, 2021</span>
            </div>
           </div>
         </div>
      </div>
    )
}