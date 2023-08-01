import styles from './form.module.scss';

export const FormSubmit = () => {
    return (
        <div className={`${styles.Formsubmit} paddings container `}>
            <form className={`${styles.FormsubmitForm}`}>
                <div className={`${styles.FormsubmitFormName}`}>
             <input 
               type='text' 
               name='name'  
               id='' 
               placeholder={ 'Name'} 
               className={`inter`}/>      
             <input 
               type='email' 
               name='email'  
               placeholder={'Email'} 
               className={`inter`}/>
           </div> 
            <div className={`${styles.FormsubmitFormData}`}>  
              <input 
                type='tel' 
                name='tel' 
                placeholder={'ddd'} 
                className={`inter`}/>
              <textarea 
                placeholder='ddd'  
                name="message"  
                maxLength='5000' 
                className={`inter`}>
              </textarea>   
            <div className={`${styles.FormsubmitFormAgreement}`}>
              <input 
                type='checkbox'  
                id='' 
                name='terms' 
                value='checked' 
                className={`inter checkbox`}/>
              <label 
              for='checkbox'> 
              Keep me up to date with news and offers from time to time by email 
              </label>
            </div>  
              <button 
                type='submit' 
                className={`submit-btn`}>Send A Message
              </button>
            </div>
            </form>
        </div>
    )
}