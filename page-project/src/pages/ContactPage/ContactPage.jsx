import styles from './contactPage.module.scss';
import { Title } from '../../components/Title/Title';
import { KeepInTouch } from './components/KeepInTouch/KeepInTouch';
import { Faq } from './components/Faq/Faq';
import { FormSubmit } from '../../components/FormSubmit/FormSubmit';


export const ContactPage = () => {
    return (
        <section>
            <Title name={'Contact Us'} text={'Whether you have a question about features, pricing or anything else about the books, our team is ready to answer all your questions.'} />
            <KeepInTouch />
            <Faq/>
          {/*  <FormSubmit/>*/} 
        </section>
    )
}