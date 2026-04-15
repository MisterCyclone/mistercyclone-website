import './index.css';
import { homePage } from './pages/homepage';
import { Header } from './components/header/header';

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(Header());
app.appendChild(homePage());