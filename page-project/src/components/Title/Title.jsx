import styles from './title.module.scss'

export const Title = () => {
    return (
        <div className={`${styles.title}  `}>
          <div className={`${styles.titleContainer} cardo container paddings`}>
              <h2>About Author</h2>
              <div className={`title-line `}></div>
              <p className={`inter`}>Here you can discover how Pages reach this boundary and having a
                 grown on the principles of writing and the reading.</p>
          </div>
        </div>
    )
}