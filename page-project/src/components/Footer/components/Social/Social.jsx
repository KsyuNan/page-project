import styles from './social.module.scss';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram} from 'react-icons/ti';

export const Social = () => {
    return (
        <div className={`${styles.Social}`}>
          <ul className={`${styles.SocialList}`}>
            <li><a href=""><TiSocialFacebook/></a></li>
            <li><a href=""><TiSocialTwitter/></a></li>
            <li><a href=""><TiSocialLinkedin /></a></li>
            <li><a href=""><TiSocialInstagram/></a></li>
          </ul>
        </div>
    )
}