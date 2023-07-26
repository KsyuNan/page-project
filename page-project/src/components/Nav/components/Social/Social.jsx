import styles from './social.module.scss';
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'

export const Social = () => {
    return (
        <div className={` ${styles.social} flexStart`}>
            <Link><TiSocialFacebook size={20}/></Link>
            <Link><TiSocialTwitter size={20}/></Link>
            <Link><TiSocialLinkedin size={20}/></Link>
        </div>
    )
}