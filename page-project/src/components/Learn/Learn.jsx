import styles from './learn.module.scss';
import reader from '../../assets/reader.png';
import { Card } from './components/Card/Card';
import dataLearn from './data';
import { MainTitle } from '../MainTitle/MainTitle';

export const Learn = () => {
    return (
     <section className={`${styles.learn} p3`}>
        <MainTitle  title={'What Will You Learn?'} />
      <div className={`${styles.learnContainer} paddings container flexCenter`}>   
        <div className={`${styles.learnContainerCards}`}>
        {dataLearn.map(dataLearn => (
          <Card
           key={dataLearn.id}
           number={dataLearn.number}
           text={dataLearn.text}
          />
        ))} 
        </div>
         <div className={`${styles.learnContainerDesc} `}>
           <img src={'https://assets.website-files.com/615aa2992a14b77739e3c502/61f3b5925fc6f6fbe6dc1fee_learn-image.jpg'} alt="" />
          <div className={`imageDecor`}></div>
         </div>
      </div>
     </section>
    )
}