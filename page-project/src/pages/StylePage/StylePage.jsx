import styles from './style.module.scss'
import {Title} from '../../components/Title/Title'
import { Form } from '../ContactPage/components/Form/Form'

export const StylePage = () => {
    return (
        <section className={`${styles.Styles} `}>
            <Title name={'Style Guide'} text={'All the default tag styles are listed here to know how its exactly shown in the template.'}/>
            <div className={`${styles.StylesContainer} paddings container flexColStart`}>
                <div className={`${styles.StylesContainerColor} paddings`}>
                    <h4 className='cardo'>Colors</h4>
                    <div className={`${styles.StylesContainerColorList}`}>
                        <div className={`${styles.StylesContainerColorListItem}`}>
                           <div className={`${styles.StylesContainerColorListItemBlue}`}></div>
                           <h5>#1B3764</h5>
                        </div>
                        <div className={`${styles.StylesContainerColorListItem}`}>
                           <div className={`${styles.StylesContainerColorListItemYellow}`}></div>
                           <h5>#39C7B1</h5>
                        </div>
                        <div className={`${styles.StylesContainerColorListItem}`}>
                           <div className={`${styles.StylesContainerColorListItemLight}`}></div>
                           <h5>#F6F8FC</h5>
                        </div>
                    </div>
                </div>

                <div className={`${styles.StylesContainerParagraph} paddings`}>
                   <h4 className={`cardo`}>Paragraph</h4>
                   <p className={`inter`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
                    enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
                    dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh 
                    et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique 
                    posuere.</p>
                </div>

                <div className={`${styles.StylesContainerButtons} paddings`}>
                   <h4>Button</h4>
                </div>

                <div className={`${styles.StylesContainerTitle} paddings`}>
                    <h4>Title</h4>

                    <h1>Heading H1 Title</h1>
                    <h2>Heading H2 Title</h2>
                    <h3>Heading H3 Title</h3>
                    <h4>Heading H4 Title</h4>
                    <h5>Heading H5 Title</h5>
                    <h6>Heading H6 Title</h6>
                </div>

                <div className={`${styles.StylesContainerList} paddings`}>
                   <h4>List</h4>
                  <ul>
                    <li><p className={`inter`}>They has been helping readers, music lovers, and videophiles find quality material.</p></li>
                    <li><p className={`inter`}>We help physical bookstores manage their overstock to the book inventory.</p></li>
                    <li><p className={`inter`}>Bookstore serving up the full spectrum of Black literature and wine black books.</p></li>
                  </ul>

                  <ol>
                    <li><p className={`inter`}>They has been helping readers, music lovers, and videophiles find quality material.</p></li>
                    <li><p className={`inter`}>We help physical bookstores manage their overstock to the book inventory.</p></li>
                    <li><p className={`inter`}>Bookstore serving up the full spectrum of Black literature and wine black books.</p></li>
                  </ol>
                </div>

                <div className={`${styles.StylesContainerQuote} paddings`}>
                    <h4>Blockquote</h4>

                    <div className={`${styles.StylesContainerQuoteItem}`}>
                        <p className={`inter`}>“ We believe that bookstores are essential to a healthy culture. 
                            They’re where authors can connect with readers. new writers, <br/>
                            where children get hooked on the thrill of reading that can 
                            last a lifetime.“</p>
                    </div>
                </div>

                <div className={`${styles.StylesContainerForm} paddings`}>
                   <Form />
                </div>
            </div>
        </section>
    )
}