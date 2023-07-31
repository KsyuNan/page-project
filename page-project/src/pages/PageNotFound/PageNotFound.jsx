import styles from './pageNotFound.module.scss';

export const PageNotFound = () => {
    return (
        <div className={`${styles.Pagenotfound}`}>
            <div className={`${styles.PagenotfoundContainer} paddings container`}>         
                <h2 className={`cardo`}>404</h2>
                <h3 className={`cardo`}>Page Not Found!!!</h3>
                <p className={`inter`}>The page you are looking for doesn't exist. 
                    Please try searching for <br/> some other page, 
                    or return to the website's homepage to find <br/>
                    what you're looking for.
                </p>
                <button className='btn-contact'>Back To Home</button>
              </div>
            </div>
    )
}