import styles from './about.module.scss'
import about from '../../assets/about.png'
import CountUp from 'react-countup'
import { Contacts } from './components/Contacts/contacts'
 
export const About = () => {
    return (
        <section className={`${styles.about}`}>
            <div className={`${styles.aboutContainer} paddings innerWidth flexCenter`}>
               <img src={about} alt="" />
               <div className={`${styles.aboutContainerContent}`}>
                    <div className={` ${styles.aboutContainerContentTitle} cardo title`}>
                        <h2>About the Author</h2>
                        <div className={`${styles.aboutContainerContentTitleLine} titleLineLeft`}></div>
                    </div>
                    <p>We believe that bookstores are essential to a healthy culture. <br/> They’re where authors can connect with readers, where we <br/> discover new writers, where children get hooked on the thrill <br/> of reading that can last a lifetime.</p>
                  <div className={`${styles.aboutContainerContentCounter} flexCenter`}>
                   <div className={`${styles.aboutContainerContentCounterStat} flexColStart`}>
                      <span>
                        <CountUp start={'00'} end={'02'} duration={4}/>
                        <p>Books Published</p>
                      </span>
                   </div>
                   <div className={`${styles.aboutContainerContentCounterStat}`}>
                      <span>
                        <CountUp start={'0.0'} end={'4.5'} duration={4}/>
                        <p>User Reviews</p>
                      </span>
                   </div>
                   <div className={`${styles.aboutContainerContentCounterStat}`}>
                      <span>
                        <CountUp start={'00'} end={'04'} duration={4}/>
                        <p>Best Seller Award</p>
                      </span>
                   </div>
                  </div>
                  <Contacts />
               
               </div>
            </div>
        </section>
    )
}