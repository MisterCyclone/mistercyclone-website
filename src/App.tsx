import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomePage from './pages/homepage/homePage'
import AboutPage from './pages/aboutpage/aboutPage'
import ProjectsPage from './pages/projectspage/projectsPage'
import ExperiencePage from './pages/experiencepage/experiencePage'
import { Route, Routes } from 'react-router-dom'
import footerContent from './website-content/footer.json'

const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/projects" Component={ProjectsPage}/>
        <Route path="/experience" Component={ExperiencePage}/>
      </Routes>
      <Footer links={[footerContent.github, footerContent.linkedin, footerContent.email]}/>
    </>
  )
}

export default App
