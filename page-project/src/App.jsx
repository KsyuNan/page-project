import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './styles/reset.scss'
import  { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { AuthorBook } from './components/AuthorBook/AuthorBook'
import { About } from './components/About/About'
function App() {

  return (
    <>
      <Header />
      <Main />
      <AuthorBook />
      <About />
    </>
  )
}

//https://www.figma.com/file/0VBCjew76DhMP0QttLFTTj/Pages-(Copy)?type=design&node-id=0-1&mode=design&t=tcP8HzLK5kjGr7mk-0


export default App
