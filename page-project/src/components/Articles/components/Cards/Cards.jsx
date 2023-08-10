import { Readmorebtn } from '../../../Button/ReadmoreBtn/Readmore';
import styles from './cards.module.scss';

export const Cards = (props) => {
    return (
   //   <div className={`${styles.Cards} d-flex`}>
          <div className={`${styles.Card}`}>
              <img className={`responsive`} src={props.image} alt="" />
            <div className={`${styles.CardDesc}`}>
              <h4 className={`cardo`}>{props.title}</h4>
              <p className={`inter`}>{props.text}</p>
            <div className={`${styles.CardDescData} cardo`}>
              <Readmorebtn title='Read More'/>
              <div>{props.date}</div>
            </div>
           </div>
         </div>
   //  </div>
    )
}