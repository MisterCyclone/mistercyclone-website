import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage'
import ProjectsPage from './pages/projectspage'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/projects" Component={ProjectsPage}/>
      </Routes>
    </>
  )
}

export default App
