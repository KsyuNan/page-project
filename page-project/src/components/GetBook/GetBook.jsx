import styles from './getBook.module.scss';
import getBook from '../../assets/getBook.png'

export const GetBook = () => {
    return (
        <section className={`${styles.getbook} p3`}>
            <div className={`${styles.getbookContainer} paddings innerWidth flexCenter`}>
                <div className={`${styles.getbookContainerContent}`}>
                    <div className={` title`}>
                        <h1>Get Book Copy Today!</h1>
                    </div>
                    <p className={`inter`}>We believe that bookstores are essential to a healthy <br/> 
                       culture. They’re where authors can connect with readers.</p>
                     <button className={`btn-get`}>Order Today</button>
                </div>
                <div className={`${styles.getbookContainerImg}`}>
                   <img src={getBook} alt="" />
                </div>

            </div>
        </section>
    )
}