import styles from './getBook.module.scss';
import getBook from '../../assets/getBook.png'
import { LeftTitle } from '../LeftTitle/LeftTitle';

export const GetBook = () => {
    return (
        <section className={`${styles.getbook} p3`}>
            <div className={`${styles.getbookContainer} paddings container flexCenter`}>
                <div className={`${styles.getbookContainerContent}`}>
                    <LeftTitle title='Get Book Copy Today!' text='We believe that bookstores are essential to a healthy  
                       culture. They’re where authors can connect with readers.'  />
                     <button className={`btn-get`}>Order Today</button>
                </div>
                <div className={`${styles.getbookContainerImg}`}>
                   <img className={`responsive`} src={getBook} alt="" />
                </div>

            </div>
        </section>
    )
}