import './aboutPage.module.scss'
import { Title } from '../../components/Title/Title'
import { AboutJhon } from './components/AboutJohn/AboutJhon'
import { MyStory } from './components/MyStory/MyStory'
import { AuthorBook } from '../../components/AuthorBook/AuthorBook'
import { Trusted } from '../../components/Trusted/Trusted'
import { Subscribe } from '../../components/Subscribe/Subscribe'

export const AboutPage = () => {
    return (
        <section >
            <div>
              <Title name={'About Author'} text={'Here you can discover how Pages reach this boundary and having a grown on the principles of writing and the reading.'} />
              <AboutJhon />
              <MyStory />
              <AuthorBook />
              <Trusted />
              <Subscribe />
           </div>
        </section>
    )
}