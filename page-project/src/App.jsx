import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './styles/reset.scss'
import  { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { AuthorBook } from './components/AuthorBook/AuthorBook'
import { About } from './components/About/About'
import { Trusted } from './components/Trusted/Trusted'
import { GetBook } from './components/GetBook/GetBook'
import { Learn } from './components/Learn/Learn'
import { Pages } from './components/Pages/Pages'
import { Readers } from './components/Readers/Readers'
import { Articles } from './components/Articles/Articles'
import { Subscribe } from './components/Subscribe/Subscribe'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

//https://www.figma.com/file/0VBCjew76DhMP0QttLFTTj/Pages-(Copy)?type=design&node-id=0-1&mode=design&t=tcP8HzLK5kjGr7mk-0

//online template https://pages-template.webflow.io/
export default App
