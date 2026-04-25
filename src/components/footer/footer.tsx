import React from "react"
import './footer.css'

interface LinkCardProp {
  label: string;
  link: string;
  href: string;
}

interface LinkCardProps {
  links: LinkCardProp[];
}

const Footer: React.FC<LinkCardProps> = ({links}) => {

  return (
    <footer>
      <h1>Thank you for visiting!</h1>
      <div className="footer-link-stack">
        <p className="footer-header">Links:</p>
        {links.map((link) => {
          return (
            <a className='footer-link' href={link.href} target='_blank' rel='noopener noreferrer'> <p className="footer-link-header">{link.label}</p>{link.link}</a> 
          )
        })}
      </div>
    </footer>
  )
}

export default Footer;