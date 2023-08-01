import styles from './form.module.scss'
import { useState } from 'react'
import {BsPerson,BsEnvelope, BsTelephone, BsPencilSquare} from 'react-icons/bs'

export const Form = () => {

    const [formData, setFormData] = useState({name: '', tel: '', email: '', message: ''});

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Email: ${formData.email}, Tel: ${formData.tel}, Message: ${formData.message}`)
    }


    return (
        <form method='submit' onSubmit={handleSubmit} className={`${styles.form}`}>
           <div className={`${styles.formName}`}>
            {/*<div className={`inputIcon`}><BsPerson/></div>*/}
             <input type='text' name='name' onChange={handleChange} value={formData.name} id='' placeholder={ 'Name'} className={`inter`}/>
             {/*<div className={`inputIcon`}><BsEnvelope/></div>*/}
             <input type='email' name='email' onChange={handleChange} value={formData.email} placeholder={'Email'} className={`inter`}/>
           </div> 
            <div className={`${styles.formData}`}>
            {/* <BsTelephone />*/}
              <input type='tel' name='tel' onChange={handleChange} value={formData.tel} placeholder={'ddd'} className={`inter`}/>
              <textarea placeholder='ddd' onChange={handleChange} name="message" value={formData.message} maxLength='5000' className={`inter`}></textarea>
              {/*<BsPencilSquare/> */}
              
            <div className={`${styles.formAgreement}`}>
              <input type='checkbox' onChange={handleChange} id='keep' name='keep' value='keep' className={`inter checkbox`}/>
              <label for='checkbox'> Keep me up to date with news and offers from time to time by email </label>
            </div>  
              <button type='submit' className={`submit-btn`}>Send A Message</button>
            </div>
        </form>
    )
}