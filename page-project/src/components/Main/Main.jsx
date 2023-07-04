import styles from './main.module.scss'
import main from '../../assets/main.png'


export const Main = () => {
    return (
      <section className={` ${styles.main} `}>
        <div className={` ${styles.mainContainer} container paddings innerWidth flexCenter`}>
           <div className={`${styles.mainContainerContent} flexColStart`}>
            <span className={`sub cardo `}>Welcome to Pages!!!</span>
            <h1 className={`cardo`}>Your Books From <br /> The Best Writer</h1>
            <p>We believe that reading books are essential to a healthy culture. <br/> 
               They’re where authors can connect with readers.
            </p>
            <div className={`${styles.mainContainerContentBtn}`}>
                <button className={`btn-main`}>Order Today</button>
                <button className={`btn-main`}>Read free Demo</button>
            </div>

            <div className={` ${styles.mainContainerContentList} flexCenter`}>
                <div className={` ${styles.mainContainerContentListItem} flexColStart`}>
                   <span className={`yellow-circle`} />
                   <h6 className={`cardo`}>Pages</h6>
                   <span className={`inter desc`}>250 pages</span>
                </div>
                <div className={` ${styles.mainContainerContentListItem} flexColStart`}>
                   <span className={`yellow-circle`} />
                   <h6 className={`cardo`}>Length</h6>
                   <span className={`inter desc`}>10 Hours</span>
                </div>
                <div className={` ${styles.mainContainerContentListItem} flexColStart`}>
                   <span className={`yellow-circle`} />
                   <h6 className={`cardo`}>Rating</h6>
                   <span className={`inter desc`}>4.5/5 (305 ratings)</span>
                </div>
            </div>

           </div>

           <div className={`${styles.mainContainerImage}`}>
             <img src={main} alt="" />

           </div>
        </div>
      </section>
    )
}