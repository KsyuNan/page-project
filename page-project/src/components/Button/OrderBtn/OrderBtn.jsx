import styles from './orderbtn.module.scss'; 

export const OrderBtn = (props) => {
    return (
        <button className={`${styles.Orderbtn}`}>{props.title}</button>
    )
}