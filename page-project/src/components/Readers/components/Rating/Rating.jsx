import styles from './rating.module.scss'

export const Rating = () => {
    return (
  
       <div className={`${styles.rating}`}>
        <span className={`${styles.ratingCircle}`}></span>
        <span className={`${styles.ratingCircle}`}></span>
        <span className={`${styles.ratingCircle}`}></span>
        <span className={`${styles.ratingCircle}`}></span>
        <span className={`${styles.ratingHalf}`}></span>      
       </div>
    ) 
}