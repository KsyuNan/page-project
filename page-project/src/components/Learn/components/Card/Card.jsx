import styles from './card.module.scss'

export const Card = (props) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.cardItem}`}>
                <span>{props.number}</span>
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}