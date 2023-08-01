import styles from './readers.module.scss';
import { Rating }  from './components/Rating/Rating';
import { Cards } from './components/Cards/Cards';
import dataReaders from './data'
import { LeftTitle } from '../LeftTitle/LeftTitle';

export const Readers = () => {
    return (
     <section className={`${styles.Readers} p3`}>
        <div className={`${styles.ReadersContainer} paddings container flexCenter`}>
            <div className={`${styles.ReadersContainerDesc}`}>
              <LeftTitle 
                title='Words From Our Readers' 
                text='We believe that bookstores are essential to a healthy culture. 
                They’re where authors can connect with readers, where we discover 
                new writers, where children get hooked on the thrill of reading 
                that can last a lifetime.'
                />  
               <div className={`d-flex`}>
                 <Rating />
                 <p>(4.8/5)</p>
                 <span>Overall Customer Ratings</span>
               </div>
            </div>
            <div className={`${styles.ReadersContainerCards}`}>
              { dataReaders.map(dataReaders => (
               <Cards 
                 key={dataReaders.id}
                 image={dataReaders.image}
                 name={dataReaders.name}
                 title={dataReaders.title}
                 text={dataReaders.text}
              />
              ))}
            </div>
        </div>
     </section>
    )
}