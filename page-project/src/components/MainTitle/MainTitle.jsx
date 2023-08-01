import styles from './maintitle.module.scss';

export const MainTitle = (props) => {
    return (
        <div className={`${styles.Maintitle}`}>
            <h2>{props.title}</h2>
            <div></div>
        </div>
    )
}