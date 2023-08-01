import styles from './contacts.module.scss'
import qr from '../../../../assets/qr.png'

export const Contacts = () => {
    return (
        <div className={`${styles.contacts}`}>
            <div className={`${styles.contactsContent}`}>
             <img className={`responsive`} src={qr} alt="" />
             <span className={`img-border`}></span>
             <div className={`${styles.contactsContentTitle}`}>
              <span className={`cardo`}>John Abraham , Ph.d</span>
              <span className={`cardo`}>Mail: johnabraham@gmail.com</span>
              <span className={`cardo`}>Phone: (+2) 123 545 9000</span>
           </div>
           </div>
        </div>
    )
}