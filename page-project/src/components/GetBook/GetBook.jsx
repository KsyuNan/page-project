import styles from './getBook.module.scss';
import getBook from '../../assets/getBook.png'
import { Link } from 'react-router-dom';
import { LeftTitle } from '../LeftTitle/LeftTitle';
import { OrderBtn } from '../Button/OrderBtn';

export const GetBook = () => {
    return (
        <section className={`${styles.getbook} p3`}>
            <div className={`${styles.getbookContainer} paddings container flexCenter`}>
                <div className={`${styles.getbookContainerContent}`}>
                    <LeftTitle title='Get Book Copy Today!' text='We believe that bookstores are essential to a healthy  
                       culture. They’re where authors can connect with readers.'  />
                       <Link to='/our-store'>
                         <OrderBtn title='Order Today'/>
                       </Link>
                </div>
                <div className={`${styles.getbookContainerImg}`}>
                   <img className={`responsive`} src={getBook} alt="" />
                </div>

            </div>
        </section>
    )
}