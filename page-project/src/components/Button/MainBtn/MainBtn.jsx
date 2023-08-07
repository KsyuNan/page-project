import styles from './mainbtn.module.scss';

export const MainBtn = (props) => {
    return (
        <button className={`${styles.Mainbtn}`}>{props.title}</button>
    )
}