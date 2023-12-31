import '../../styles/index.scss'

import { Main } from '../Main/Main'
import { AuthorBook } from '../AuthorBook/AuthorBook'
import { About } from '../About/About'
import { Trusted } from '../Trusted/Trusted'
import { GetBook } from '../GetBook/GetBook'
import { Learn } from '../Learn/Learn'
import { Pages } from '../Pages/Pages'
import { Readers } from '../Readers/Readers'
import { Articles } from '../Articles/Articles'
import { Subscribe } from '../Subscribe/Subscribe'

export const Home = () => {
    return (
        <>
         <Main />     
         <AuthorBook />
         <About />
         <Trusted />
         <GetBook />
         <Learn />
         <Pages />
         <Readers />
         <Articles />
        <Subscribe />
        </>
    )
}