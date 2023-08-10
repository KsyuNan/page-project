import styles from './readmorebtn.module.scss';

export const Readmorebtn = (props) => {
    return(
        <a className={`${styles.ReadmoreBtn}`}>{props.title}</a>
    )
}