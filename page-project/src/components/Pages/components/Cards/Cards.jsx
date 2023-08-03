import styles from './card.module.scss'

export const Cards = (props) => {
    return (
        <div className={`${styles.Card}`}>
           <div className={`${styles.CardTitle}`}>
              <h4>{props.title}</h4>
              <p>{props.text}</p>
              <div className={`${styles.CardTitleSub}`}>
                <div className={`${styles.CardTitleSubData} `}>
                  <div className={`yellow-circle `}></div>
                  <p><span className={`blueSub`}>{props.pages}</span>{props.count}</p>
                </div>
                <div className={`${styles.CardTitleSubData}`}>
                  <div className={`yellow-circle`}></div>
                  <p><span className={`blueSub`}>{props.length}</span>{props.time}</p>
                </div>
                </div>
           </div>
        </div>
    )
}