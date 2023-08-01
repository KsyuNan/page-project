import styles from './trusted.module.scss'
import { Card } from './components/Card/Card'
import dataTrusted from './data'
import { MainTitle } from '../MainTitle/MainTitle'

export const Trusted = () => {
    return (
        <section className={`${styles.trusted} p3`}>
            <MainTitle title={'Trusted By The Best'}/>
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