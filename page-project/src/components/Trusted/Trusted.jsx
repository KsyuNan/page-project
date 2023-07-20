import styles from './trusted.module.scss'
import { Card } from './components/Card/Card'
import dataTrusted from './data'

export const Trusted = () => {
    return (
        <section className={`${styles.trusted} p3`}>
            <div className={`${styles.trustedContainerTitle} title flexCenter container`}>
                 <h2>Trusted By The Best</h2>
                 <div className={`${styles.trustedContainerTitle} titleLine`}></div>
               </div>
            <div className={`${styles.trustedContainer} paddings innerWidth container` }>
               <div className={`${styles.trustedContainerContent} flexCenter`} >               
                    {dataTrusted.map(dataTrusted => (
                      <Card
                       key={dataTrusted.id}
                       image={dataTrusted.image}
                       title={dataTrusted.title}
                       text={dataTrusted.text}
                     /> 
                    )) 
                    }       
               </div>
            </div>
        </section>
    )
}