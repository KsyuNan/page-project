import styles from './keepInTouch.module.scss';
import { PiHouseLine, PiPhoneCall, PiEnvelopeSimple} from 'react-icons/pi'
import { Form } from '../Form/Form';

export const KeepInTouch = () => {
    return (
        <section className={`${styles.Kit}`}>
            <div className={`${styles.KitContainer} paddings container`}>
                <div className={`${styles.KitContainerDesc}`}>
                    <h2 className={`cardo`}>Keep In Touch</h2>
                    <div className={`titleLineLeft`}></div>
                    <p  className={`inter`}>We believe that bookstores are essential to a 
                       healthy culture. They’re where authors can connect 
                       with readers. You can connect with us with these details.
                    </p>
                    <div className={`${styles.KitContainerDescAdress}`}>
                        <div className={`${styles.KitContainerDescAdressItem}`}>
                           <div className={`${styles.KitContainerDescAdressItemLogo}`}><PiHouseLine /></div>
                           <div className={`${styles.KitContainerDescAdressItemSub}`}>
                             <h6>Visit Us :</h6>
                             <p className={`inter`}>No:09a, Downtown, San Diego, USA.</p>
                           </div>
                        </div>
                        <div className={`${styles.KitContainerDescAdressItem}`}>
                           <div className={`${styles.KitContainerDescAdressItemLogo}`}><PiEnvelopeSimple /></div>
                           <div className={`${styles.KitContainerDescAdressItemSub}`}>
                             <h6>Drop Us :</h6>
                             <p className={`inter`}>support@pages.com</p>
                           </div>
                        </div>
                        <div className={`${styles.KitContainerDescAdressItem}`}>
                            <div className={`${styles.KitContainerDescAdressItemLogo}`}><PiPhoneCall /></div>
                           <div className={`${styles.KitContainerDescAdressItemSub}`}>
                             <h6>Call Us :</h6>
                             <p className={`inter`}>Call: 1-800-123-9999</p>
                           </div>
                        </div>

                    </div>
                </div>

                <div className={`${styles.KitContainerForm}`}>
                   <Form/>
                </div>

            </div>
        </section>

    )
}