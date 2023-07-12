import styles from './card.module.scss'

export const Cards = () => {
    return (
       <div className={`${styles.Cards} cardo flexCenter`}>

        <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <h6>Chapter-1 Get Started Intro</h6>
              <p className={`inter`}>You can double your knowledge by reading this ever  needed book that can last a lifetime.</p>
              <div className={`${styles.CardsCardTitleSub}`}>
                 <p> <span className={`yellow-circle blueSub`}>Pages:</span> 106pages</p>
                 <p><span className={`yellow-circle blueSub`}>Length:</span> 2 Hours</p>
              </div>
           </div>
        </div>

        <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <h6>Chapter-2 The Roman Culture</h6>
              <p className={`inter`}>It will help to improve your life career with the   perfect and needed knowledge about your life.</p>
              <div className={`${styles.CardsCardTitleSub}`}>
                 <p><span className={`yellow-circle blueSub`}>Pages:</span> 180pages</p>
                 <p><span className={`yellow-circle blueSub`}>Length:</span> 3 Hours</p>
              </div>
           </div>
        </div>

        <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <h6>Chapter-3 How They Servived</h6>
              <p className={`inter`}>We wanted to create an easy, convenient way for  you   to get your books & support.</p>
              <div className={`${styles.CardsCardTitleSub}`}>
                 <p><span className={`yellow-circle blueSub`}>Pages:</span> 250pages</p>
                 <p><span className={`yellow-circle blueSub`}>Length:</span> 4 Hours</p>
              </div>
           </div>
        </div>

        <div className={`${styles.CardsCard}`}>
           <div className={`${styles.CardsCardTitle}`}>
              <h6>Chapter-4 The End Of Romans</h6>
              <p className={`inter`}>Promote your book via Pages shop to support your writing  & reading career.</p>
              <div className={`${styles.CardsCardTitleSub}`}>
                 <p><span className={`yellow-circle blueSub`}>Pages:</span> 175pages</p>
                 <p><span className={`yellow-circle blueSub`}>Length:</span> 3 Hours</p>
              </div>
           </div>
        </div>

       </div>
    )
}