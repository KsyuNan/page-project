import styles from './lefttitle.module.scss';

export const LeftTitle = (props) => {
    return (
        <div className={`${styles.Lefttitle}`}>
            <h2>{props.title}</h2>
            <div></div>
            <p>{props.text}</p>
        </div>
    )
}