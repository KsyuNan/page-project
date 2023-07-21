import styles from './pages.module.scss'
import { Cards } from './components/Cards/Cards'
import dataPages from './data'

export const Pages = () => {
    return (
     <section className={`${styles.pages} p3`}>
    
        <div className={` ${styles.pagesContainerTitle} cardo title container`}>
            <h2>Enhance knowledge & Vision</h2>
            <span></span>
        </div>
        <div className={`${styles.pagesContainer} paddings container `}>
           <div className={`${styles.pagesContainerCards} cardo`}>
          {dataPages.map(dataPages => (
            <Cards 
             key={dataPages.id}
             title={dataPages.title}
             text={dataPages.text}
             pages={dataPages.pages}
             count={dataPages.count}
             length={dataPages.length}
             time={dataPages.time}
          />
          ))
          }
          </div>
         {/*
          <div className={`${styles.pagesContainerDesc}`}>
            <button className={`btn-page`}>Start a 15-Days Free Trail</button>
            <p className={`inter`}>Short description about each chapter</p>
            <p className={`inter`}><span>Have any questions?</span> Contact us</p>
          </div>

        */}
        </div>
     
     </section>
    )
}