import styles from './social.module.scss';
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'

export const Social = () => {
    return (
        <div className={` ${styles.social} flexStart`}>
            <a href='https://www.facebook.com/' target='_blank'><TiSocialFacebook size={20}/></a>
            <a href='https://twitter.com/' target='_blank' ><TiSocialTwitter size={20}/></a>
            <a href='https://www.linkedin.com/' target='_blank'><TiSocialLinkedin size={20}/></a>
        </div>
    )
}