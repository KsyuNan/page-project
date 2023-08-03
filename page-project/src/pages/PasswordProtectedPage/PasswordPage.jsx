import styles from './password.module.scss';

export const PasswordProtectedPage = () => {
    return (
        <div className={`${styles.Passwordpage} p3`}>
            <div className={`${styles.PasswordpageContainer}`}>
                <div className={`${styles.PasswordpageContainerContent} paddings container flexColCenter`}>
                    <h2>Password Protected</h2>
                    <div className={`titleLine`}></div>
                    <p>This page is password protected. If you are the website <br/> admin, or have access to this page, please type your <br/> password below.</p> 
                    <form >
                        <input type="text" placeholder='Enter Your Password'/> 
                    </form>
                     <button className={`submit-btn`}>Submit</button>
                    </div>
                </div>
            </div>
    )
}