import { MainTitle } from '../MainTitle/MainTitle';
import styles from './articles.module.scss';
import { Cards } from './components/Cards/Cards';
import dataArticles from './data'


export const Articles = () => {
    return (
     <section className={`${styles.Articles} p3`}>
        <MainTitle title={'Articles & Resources'}/>
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