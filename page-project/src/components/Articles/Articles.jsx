import styles from './articles.module.scss';
import { Cards } from './components/Cards/Cards';
import dataArticles from './data'


export const Articles = () => {
    return (
     <section className={`${styles.Articles} p3`}>
        <div className={`title flexCenter cardo`}>
            <h2>Articles & Resources</h2>
        </div>
        <div className={`${styles.ArticlesContainer} paddings container d-flex`}>
          <div className={`${styles.ArticlesContainerCards}`}>
          {
            dataArticles.map(dataArticles => (
             <Cards 
               key={dataArticles.id}
               image={dataArticles.image}
               title={dataArticles.title}
               text={dataArticles.text}
               action={dataArticles.action}
               date={dataArticles.date}
             />
            ))
          }      
        </div>
        </div>
     </section>
    )
}