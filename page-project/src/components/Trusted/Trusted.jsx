import styles from './trusted.module.scss'
import { Card } from './components/Card/Card'

export const Trusted = () => {
    return (
        <section className={`${styles.trusted} p3`}>
            <div className={`${styles.trustedContainerTitle} title flexCenter`}>
                 <h2>Trusted By The Best</h2>
               </div>
            <div className={`${styles.trustedContainer} paddings innerWidth ` }>
               

               <div className={`${styles.trustedContainerContent} flexCenter`} >               
                     <Card/>        
               </div>
            </div>

        </section>
    )
}