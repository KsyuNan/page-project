import styles from './subscribe.module.scss';

export const Subscribe = () => {
    return (
        <section className={`${styles.Subscribe}p3`}>
         <div className={`${styles.SubscribeContainer} paddings container flexCenter`}>
           <div className={`${styles.SubscribeContainerDesc}`}>
              <h2 className={`title`}>Get The Best Updates</h2>
              <p>Subscribe with your mail id to know the current update in book <br/> edition at your fingertip with in a minute.</p>
            <form className={`${styles.SubscribeContainerDescForm}`}>
                <input type="email" placeholder="Your Email ID..." />
                <button className="subscribe">Subscribe</button>
            </form>
           </div>
         </div>
        </section>
    )
}