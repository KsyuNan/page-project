import styles from './storecard.module.scss';
import { OrderBtn } from '../../../components/Button/OrderBtn';


export const StoreCard = (props) => {
    return (
     <div className={`${styles.Cardstore}`}>
       <div className={`${styles.CardstoreContent}`}>
        <div className={`${styles.CardstoreContentImg}`}>
          <img src={props.image} alt="" />
        </div>
          <div className={`${styles.CardstoreContentTitle}`}>
          <h3>{props.title}</h3>
          <h5>{props.price}</h5>
          <p>{props.text}</p>
          <h6>{props.type}</h6>
          <OrderBtn title='Order Now'/>
          </div>
       </div>
     </div>
    )
}