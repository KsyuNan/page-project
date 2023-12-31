import './App.scss'
import './styles/index.scss'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home'
import Nav from './components/Nav/Nav'
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage';
import { StorePage } from './pages/StorePage/StorePage';
import { StylePage } from './pages/StylePage/StylePage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { PasswordProtectedPage } from './pages/PasswordProtectedPage/PasswordPage';
import { LisensePage } from './pages/LisensesPage/LisensePage';
import { ChangelogPage } from './pages/ChangelogPages/ChangelogPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <Router>
      <Nav />
      <Routes>    
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact-us' element={<ContactPage/>}/>
        <Route path='/articles' element={<ArticlesPage/>}/>
        <Route path='/our-store' element={<StorePage/>}/>
        <Route path='/style-guide' element={ <StylePage/>}/>
        <Route path='/page-not-found' element={<PageNotFound />}/>
        <Route path='/password-protected' element={<PasswordProtectedPage/>}/>
        <Route path='/liseness' element={<LisensePage/>}/>
        <Route path='/changelog' element={<ChangelogPage />}/>
        <Route path='/product/:id' element={<ProductPage />}/>
      </Routes>    
      <Footer />
    </Router>
  )
}

export default App

/*
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
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Navbar />
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

//https://preview.webflow.com/preview/pages-template?utm_medium=preview_link&utm_source=dashboard&utm_content=pages-template&preview=a72e12bfe3180f8ceb345a97fda83ac2&pageId=615d33b16099ba1e3c9a3ab1&workflow=preview
export default App
*/

//https://www.youtube.com/watch?v=f55qeKGgB_M&list=PLIhUbfOYlc1HOovVT_V0XvyoDIm8Uujno&index=32&t=1103s