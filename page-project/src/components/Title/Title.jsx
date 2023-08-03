import styles from './title.module.scss'

export const Title = (props) => {

    return (
        <div className={`${styles.title}  `}>
          <div className={`${styles.titleContainer} cardo container paddings`}>
              <h2>{props.name}</h2>
              <div className={`title-line`}></div>
              <p>{props.text}</p>
          </div>
        </div>
    )
}