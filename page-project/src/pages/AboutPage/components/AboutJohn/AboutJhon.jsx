import { LeftTitle } from '../../../../components/LeftTitle/LeftTitle'
import styles from './aboutJohn.module.scss'

export const AboutJhon = () => {
    return (
        <div className={`${styles.Aboutjohn}`}>
            <div className={`${styles.AboutjohnContainer} paddings container`}>
                <div className={`${styles.AboutjohnContainerImg}`}>
                    <img src="https://assets.website-files.com/615aa2992a14b77739e3c502/61f4c39b6a5ac508983b648f_author-large-image.jpg" alt="" />
                </div>
                <div className={`${styles.AboutjohnContainerContent} paddings `}>
                  <div className={`${styles.AboutjohnContainerContentBio}`}>
                     <div className={`${styles.AboutjohnContainerContentBioItem}`}>
                        <h6>Country :</h6>
                        <div>United Kingdom</div>
                     </div>
                     <div className={`${styles.AboutjohnContainerContentBioItem}`}>
                        <h6>Language: </h6>
                        <div>English</div>
                     </div>
                     <div className={`${styles.AboutjohnContainerContentBioItem}`}>
                        <h6>Genre:</h6>
                        <div>Historical</div>
                     </div>
                     <div className={`${styles.AboutjohnContainerContentBioItem}`}>
                        <h6>First Publication:</h6>
                        <div>1991</div>
                     </div>
                     <div className={`${styles.AboutjohnContainerContentBioItem}`}>
                        <h6>Follow Me On:</h6>
                        <div className={`social`}>
                          <a href=""><i class="fa-brands fa-facebook-f"></i></a>   
                          <a href=""><i class="fa-brands fa-twitter"></i></a>  
                          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>  
                        </div>
                     </div>
                    </div>
                    <div className={`${styles.AboutjohnContainerContentDesc}`}>
                      <LeftTitle 
                        title='About Dr. John Abraham' 
                        text='An author, a website or magazine, have a an organization that wants to 
                              recommend books, or even just a book-lover with an Instagram feed, you 
                              can sign up to be an affiliate, start your own shop, and be rewarded 
                              for your advocacy of books.'/>
                      <div>
                        <button className={`btn-contact`}>
                           Contact Now
                        </button>
                      </div>
                   </div>
                  </div>
                
            </div>
        </div>
    )
}