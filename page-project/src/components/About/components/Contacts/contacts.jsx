import styles from './contacts.module.scss'
import qr from '../../../../assets/qr.png'

export const Contacts = () => {
    return (
        <div className={`${styles.contacts}`}>
            <div className={`${styles.contactsContent}`}>
             <img src={qr} alt="" />
             <span className={`img-border`}></span>
             <div className={`${styles.contactsContentTitle}`}>
              <span>John Abraham , Ph.d</span>
              <span>Mail: johnabraham@gmail.com</span>
              <span>Phone: (+2) 123 545 9000</span>
           </div>
           </div>
        </div>
    )
}