import styles from './store.module.scss';
import  infoCard from './StoreCard/index';
import { Title } from '../../components/Title/Title';
import { StoreCard } from './StoreCard/StoreCard';
export const StorePage = () => {
    return (
        <div className={`${styles.Storepage} `}>
            <Title name='Our Store' text='We believe that bookstores are essential to a healthy
                                          culture around readers & authors.'/>
            <div className={`${styles.StorepageContainer} paddings container`}>
            <div className={`${styles.StorepageContainerCards}`}>
                 {
                     infoCard.map(infoCard => (
                        <StoreCard 
                          key={infoCard.id}
                          image={infoCard.image}
                          title={infoCard.title}
                          price={infoCard.price}
                          text={infoCard.text}
                          type={infoCard.type}
                        />
                     ))
                 }
            </div>
            </div>
        </div>
    )
}