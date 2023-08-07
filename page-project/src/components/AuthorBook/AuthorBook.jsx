import styles from './author.module.scss'
 import { AuthorCard } from './components/AuthorCard/AuthorCard'
 import dataAuthorBook from '../../data'
import { MainTitle } from '../MainTitle/MainTitle'


export const AuthorBook = () => {
    return ( 
      <section className={`${styles.author}`}>
        <MainTitle title='The Author’s Book' />
        <div className={`${styles.authorContainer} container paddings`}>
          
          <div className={`${styles.authorContainerCards} `}>
            {dataAuthorBook.map(dataAuthorBook => (
              <AuthorCard
                key={dataAuthorBook.id}
                name={dataAuthorBook.name}
                image={dataAuthorBook.image}
                price={dataAuthorBook.price}
                text={dataAuthorBook.text}
                type={dataAuthorBook.type}
              />
            ))}
          </div>
        </div>
      </section>
 )
}

