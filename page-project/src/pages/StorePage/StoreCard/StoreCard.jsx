/* eslint-disable react/prop-types */
import styles from './storecard.module.scss';
import { OrderBtn } from '../../../components/Button/OrderBtn';
import { Link } from 'react-router-dom';


export const StoreCard = (props) => {
    let url = props.title;
    url = url.replace(/\s+/g, '-').toLowerCase();

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
          <Link to={`/product/${url}`}>
            <OrderBtn title='Order Now'/>
          </Link>
          </div>
       </div>
     </div>
    )
}