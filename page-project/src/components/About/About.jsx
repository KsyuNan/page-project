import styles from './about.module.scss'
import about from '../../assets/about.png'
import CountUp from 'react-countup'
import { Contacts } from './components/Contacts/contacts'
import { LeftTitle} from '../../components/LeftTitle/LeftTitle';
 
export const About = () => {
    return (
        <section className={`${styles.about} p3`}>
            <div className={`${styles.aboutContainer} paddings container flexCenter`}>
               <div className={`${styles.aboutContainerImg}`}>
                <img className={`responsive`} src={about} alt="" />
               </div>
               <div className={`${styles.aboutContainerContent}`}>
                     <LeftTitle  title='About The Author' 
                              text='We believe that bookstores are essential to a healthy culture. 
                                    They’re where authors can connect with readers, where we
                                    discover new writers, where children get hooked on the thrill
                                    of reading that can last a lifetime.'  />   
                  <div className={`${styles.aboutContainerContentCounter} d-flex`}>
                   <div className={`${styles.aboutContainerContentCounterStat}`}>
                      <span>
                        <CountUp start={'00'} end={2.0} duration={4}/>
                        <p className={`inter`}>Books Published</p>
                      </span>
                   </div>
                   <div className={`border-left`}></div>
                   <div className={`${styles.aboutContainerContentCounterStat}`}>
                      <span>
                        <CountUp start={'0,0'} end={4.5} duration={4}/>
                        <p className={`inter`}>User Reviews</p>
                      </span>
                   </div>
                   <div className={`border-right`}></div>
                   <div className={`${styles.aboutContainerContentCounterStat}`}>
                      <span>
                        <CountUp start={'00'} end={'04'} duration={4}/>
                        <p className={`inter`}>Best Seller Award</p>
                      </span>
                   </div>
                  </div>
                  <Contacts />
               </div>
            </div>
        </section>
    )
}