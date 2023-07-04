import styles from './author.module.scss'
import book1 from '../../assets/book1.png'
import book2 from '../../assets/book2.png'

export const AuthorBook = () => {
    return (
        <section className={`${styles.author}`}>
            <div className={`${styles.authorContainer} container paddings`}>

              <div className={` ${styles.authorContainerTitle} cardo`}>
                 <h2>The Author’s Book</h2>
              </div>
              
              <div className={`flexCenter paddings`}>
                <div className={`${styles.authorContainerCard} flexCenter paddings`}>
                    <img src={book1} alt="" />
                  <div className={`${styles.authorContainerCardDesc} flexColStart`}>
                      <h5>Atomic One’s</h5>
                      <span>$ 13.84 USD</span>
                      <p>As the book contains <br/> theoretical content as well 
                        <br/> as solved questions.
                      </p>
                      <span className={`yellow-circle printed`}>Printed Book</span>
                      <button className={`authorBtn`}>Order Now</button>             
                  </div>
                </div>

                <div className={`${styles.authorContainerCard} flexCenter`}>
                    <img src={book2} alt="" />
                  <div className={`${styles.authorContainerCardDesc} flexColStart`}>
                      <h5>The Dark Light</h5>
                      <span>$ 86.11 USD</span>
                      <p>As the book contains <br/> theoretical content as well 
                        <br/> as solved questions.
                      </p>
                      <span className={`yellow-circle printed`}>Order Now</span>
                      <button className={`authorBtn`}>Order Now</button>             
                  </div>
                </div>
            </div>
            </div>
        </section>
    )
}