import React from "react"
import './footer.css'

const Footer: React.FC = () => {

  return (
    <footer>
      <div className="footer-link-stack">
        <a className={`footer-link footer-link-github`} href="https://github.com/MisterCyclone"><div className={`pi pi-github footer-icon`}/>GitHub</a>
        <a className={`footer-link footer-link-linkedin`}  href="https://www.linkedin.com/in/alfie-skinner-b86bb4205/"><div className={`pi pi-linkedin footer-icon`}/>LinkedIn</a>
        <a className={`footer-link footer-link-youtube`} href="https://www.youtube.com/@MisterCycloneDev"><div className={`pi pi-youtube footer-icon`}/>Youtube</a>
      </div>
    </footer>
  )
}

export default Footer;