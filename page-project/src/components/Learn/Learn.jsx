import styles from './learn.module.scss';
import reader from '../../assets/reader.png';
import { Card } from './components/Card/Card'

export const Learn = () => {
    return (
     <section className={`${styles.learn}`}>
        <div className={`title flexCenter cardo`}>
            <h2>What Will You Learn?</h2>
        </div>
      <div className={`${styles.learnContainer} paddings innerWidth container flexCenter`}>   
        <Card/>
         <div className={`${styles.learnContainerDescImg}`}>
           <img src={reader} alt="" />
         </div>
      </div>
     </section>
    )
}