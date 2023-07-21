import styles from './cards.module.scss';
import {Rating } from '../Rating/Rating';

export const Cards = (props) => {
    return (
      
      <div className={`${styles.Card}`}>
         <div className={`${styles.CardTitle}`}>
            <img src={props.image} alt="ava1" />
              <div className={`${styles.CardTitleName} cardo`}>
                 <h5 >{props.name}</h5>
                 <Rating />
              </div>
           </div>
            <h6 className={`cardo`}>{props.title}</h6>
            <p className={`inter`}>{props.text}</p>
         </div> 
    )
}