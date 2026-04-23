import React from "react";
import './contactPage.css'

const ContactPage: React.FC = () => {
  
  return (
    <div className="container">
      <div className="contact-link-stack">
        <a className={`contact-link footer-link-github`} href="https://github.com/MisterCyclone"><div className={`pi pi-github footer-icon`}/>GitHub</a>
        <a className={`contact-link footer-link-linkedin`}  href="https://www.linkedin.com/in/alfie-skinner-b86bb4205/"><div className={`pi pi-linkedin footer-icon`}/>LinkedIn</a>
        <a className={`contact-link footer-link-email`} href="mailto:alfieskinner@mistercyclone.co.uk"><div className={`pi pi-envelope footer-icon`}/>Email</a>
      </div>
    </div>
  );
};

export default ContactPage;