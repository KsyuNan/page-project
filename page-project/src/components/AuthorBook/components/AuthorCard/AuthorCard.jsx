import { OrderBtn } from '../../../Button/OrderBtn'
import styles from './authorCard.module.scss'

export const AuthorCard = (props) => {
    return (
    <div className={` ${styles.author}  flexCenter paddings`}>
            <div className={`${styles.authorCard}`}>
                <img src={props.image} alt='book-img' className={`${styles.authorCardImg} responsive`}/>
                  <div className={`${styles.authorCardDesc} flexColStart`}>
                      <h3>{props.name}</h3>
                      <span>{props.price}</span>
                      <p>{props.text}</p>
                      <h5 className={`yellow-circle printed`}>{props.type}</h5>
                      <OrderBtn title='Order Now'/>             
                  </div>
            </div>
     </div>

      /*
      <div className={`${styles.card} flexCenter`}>
            <div className={`${styles.cardItem}`}>
                <img src={props.image} alt='book-img' className={`${styles.cardItemImg}`}/>
                  <div className={`${styles.cardItemDesc} flexColStart`}>
                      <h5>{props.name}</h5>
                      <span>{props.price}</span>
                      <p>{props.text}</p>
                      <span className={`yellow-circle printed`}>{props.type}</span>
                      <button className={`authorBtn`}>{props.button}</button>             
                  </div>
            </div>
      </div>
      */
    )
}
