import styles from './card.module.scss';

export const Card = (props) => {
    return (
        <div className={`${styles.card} flexCenter`}>
           <div className={`${styles.cardContent}`}>
             <img src={props.image} alt="" />
             <h4>{props.title}</h4>
             <p>{props.text}</p>
           </div>
        </div>
    )
}