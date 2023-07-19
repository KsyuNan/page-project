import styles from './articles.module.scss';
import { Cards } from './components/Cards/Cards';


export const Articles = () => {
    return (
     <section className={`${styles.Articles} p3`}>
        <div className={`title flexCenter`}>
            <h2>Articles & Resources</h2>
        </div>
        <div className={`${styles.ArticlesContainer} paddings container innerWidth flexCenter`}>    
          <Cards />
        </div>
     </section>
    )
}