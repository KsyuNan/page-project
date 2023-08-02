import styles from './articles.module.scss';
import dataArticles from '../../components/Articles/data';
import { Title } from '../../components/Title/Title';
import { Cards } from '../../components/Articles/components/Cards/Cards';

export const ArticlesPage = () => {
    return (
        <section className={`${styles.Articlespage}`}>
            <Title 
              name='Articles'
              text='Every single details in the book store like offers latest news about the events
                    has more attractive and provide a seamless user experience.'/>
            <div className={`${styles.ArticlespageContainer} paddings container flexCenter`}>
                <div className={`${styles.ArticlespageContainerCards}`}>
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