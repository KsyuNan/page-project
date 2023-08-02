import styles from './mystory.module.scss';

import { LeftTitle} from '../../../../components/LeftTitle/LeftTitle'

export const MyStory = () => {
    return (
        <div className={`${styles.story}`}>
          <div className={`${styles.storyContainer} paddings container`}>
            <div className={`${styles.storyContainerDesc}`}>
               <div className={`${styles.storyContainerDescTitle}`}>
                  <LeftTitle 
                    title='My Story' 
                    text='We believe that bookstores are essential to a healthy culture. 
                    They’re where authors can connect with readers, where we discover 
                    new writers, where children get hooked on the thrill of reading.'/>
                </div>
                 <div className={`${styles.storyContainerDescAward}`}>
                     <div className={`${styles.storyContainerDescAwardItem}`}>
                         <div className={`${styles.storyContainerDescAwardItemNum}`}>
                            <h5>01</h5>
                            <div className={`dotted-border`}></div>
                         </div>
                         <div className={`${styles.storyContainerDescAwardItemTitle}`}>
                           <h4>Great Author Awards - 2006</h4>
                           <p className={`inter`}>Won a best author of the year for my second & fourth book about the science fiction.</p>
                         </div>
                     </div>
                     <div className={`${styles.storyContainerDescAwardItem}`}>
                         <div className={`${styles.storyContainerDescAwardItemNum}`}>
                            <h5>02</h5>
                            <div className={`dotted-border`}></div>
                         </div>
                         <div className={`${styles.storyContainerDescAwardItemTitle}`}>
                           <h4>Highest Rating For a Book - 2008</h4>
                           <p className={`inter`}>All of my books are rated highly from the book publisher and also from the readers.</p>
                         </div>
                     </div>
                     <div className={`${styles.storyContainerDescAwardItem}`}>
                         <div className={`${styles.storyContainerDescAwardItemNum}`}>
                            <h5>03</h5>
                            <div className={`dotted-border`}></div>
                         </div>
                         <div className={`${styles.storyContainerDescAwardItemTitle}`}>
                           <h4>Highest Paid Author- 2014</h4>
                           <p className={`inter`}>Highest paid author for the decade based on the number of selling books and novels.</p>
                         </div>
                     </div>
                 </div>

            </div>
            <div className={`styles.storyContainerImg`}>
                <img className={`responsive`} src="https://assets.website-files.com/615aa2992a14b77739e3c502/61f4c39be0c905845018525e_author-verticle-image.jpg" alt="" />
            </div>
          </div>
        </div>
    )
}