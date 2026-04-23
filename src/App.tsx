import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homePage'
import AboutPage from './pages/aboutpage/aboutPage'
import ProjectsPage from './pages/projectspage/projectsPage'
import ExperiencePage from './pages/experiencepage/experiencePage'
import ContactPage from './pages/contactpage/contactPage'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/projects" Component={ProjectsPage}/>
        <Route path="/experience" Component={ExperiencePage}/>
        <Route path="/contact" Component={ContactPage}/>
      </Routes>
    </>
  )
}

export default App
