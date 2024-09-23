import React from 'react'

export default function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div>
        <>
      <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Jai's Developer Portfolio</h3>
            </div>
            
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>

            </div>
            
        </div>
        <div className="footer-rights">
        Copyright &copy; {currentYear} Jai's Portfolio | All rights reserved!
        </div>
    </footer>
    </>
    </div>
  )
}
