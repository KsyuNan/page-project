import styles from './productPage.module.scss';
import { Title } from '../../components/Title/Title';

export const ProductPage = () => {
    return (
        <section className={`${styles}`}>
            <Title 
              name='Product page'
              text='This is a product page'/>
        </section>
    )
}