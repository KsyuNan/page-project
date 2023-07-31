import styles from './social.module.scss';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram} from 'react-icons/ti';
import { Link } from 'react-router-dom';

export const Social = () => {
    return (
        <div className={`${styles.Social}`}>
          <ul className={`${styles.SocialList}`}>
            <li><Link href=""><TiSocialFacebook/></Link></li>
            <li><Link href=""><TiSocialTwitter/></Link></li>
            <li><Link href=""><TiSocialLinkedin /></Link></li>
            <li><Link href=""><TiSocialInstagram/></Link></li>
          </ul>
        </div>
    )
}