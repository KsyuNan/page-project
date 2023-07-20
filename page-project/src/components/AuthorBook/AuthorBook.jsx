import styles from './author.module.scss'
 import { AuthorCard } from './components/AuthorCard/AuthorCard'
 import dataAuthorBook from '../../data'

export const AuthorBook = () => {
    return ( 
      <section className={`${styles.author}`}>
        <div className={`${styles.authorTitle} cardo flexCenter paddings`}>
          <h2>The Author’s Book</h2>
          <div className={`${styles.authorTitleLine} titleLine`}></div>
        </div>
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
                button={dataAuthorBook.button}
              />
            ))}
          </div>
        </div>
      </section>
 )
}

