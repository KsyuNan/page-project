import styles from './changelogPages.module.scss';
import { Title } from '../../components/Title/Title';

export const ChangelogPage = () => {
    return (
        <section className={` ${styles.Changelog}`}>
             <Title name={'Changelog'} text={'All the template changes like CSS tweaks, functionality improvements, layout improvements are listed here.'} />
            <div className={` ${styles.ChangelogContainer} paddings container`}>
               
             <div className={` ${styles.ChangelogContainerTemplate} flexColCenter` }>
                <div className={` ${styles.ChangelogContainerTemplateSub} flexCenter`}>
                   <h4>V.1</h4>
                </div>
                <p className={`inter`}>Initial Pages Webflow Template Release</p>
             </div>
            </div>
        </section>
    )
}