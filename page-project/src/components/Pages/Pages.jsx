import styles from './pages.module.scss'

export const Pages = () => {
    return (
     <section className={`${styles.pages} p3`}>
        <div className={` ${styles.pagesTitle}  title flexCenter`}>
            <h2>Enhance knowledge & Vision</h2>
            <span></span>
        </div>
        <div className={`${styles.pagesContainer} flexCenter`}>
          
          <div className={`${styles.pagesContainerDesc}`}>
            <button className={`btn-main`}>Start a 15-Days Free Trail</button>
            <p>Short description about each chapter</p>
            <p><span>Have any questions?</span> Contact us</p>
          </div>
        </div>
     </section>
    )
}