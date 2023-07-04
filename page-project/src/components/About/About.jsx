import styles from './about.module.scss'
import about from '../../assets/about.png'

export const About = () => {
    return (
        <section className={`${styles.about}`}>
            <div className={`${styles.aboutContainer} container paddings flexCenter`}>
               <img src={about} alt="" />
               <div className={`${styles.aboutContainerContent}`}>
                    <div className={`title`}>
                        <h2>About the Author</h2>
                    </div>
                    <p>We believe that bookstores are essential to a healthy culture. <br/> They’re where authors can connect with readers, where we <br/> discover new writers, where children get hooked on the thrill <br/> of reading that can last a lifetime.</p>
               </div>
            </div>
        </section>
    )
}