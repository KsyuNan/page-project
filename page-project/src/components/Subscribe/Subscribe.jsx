import styles from './subscribe.module.scss';

export const Subscribe = () => {
    return (
        <section className={`${styles.Subscribe} paddings`}>
         <div className={`${styles.SubscribeContainer}  container flexCenter`}>
           <div className={`${styles.SubscribeContainerDesc}`}>
            <div className={`${styles.SubscribeContainerDescTitle}`}>
              <h2 className={`title cardo`}>Get The Best Updates</h2>
              <p className={`inter`}>Subscribe with your mail id to know the current update in book <br/> edition at your fingertip with in a minute.</p>
            </div>
            <form className={`${styles.SubscribeContainerDescForm}`}>
                <input type="email" placeholder="Your Email ID..." />
                <button className="subscribe">Subscribe</button>
            </form>
           </div>
         </div>
        </section>
    )
}