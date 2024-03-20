import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h6 className="privacy-policy"><a className="policy-link" href="mailto:contact@postersglobal.com" target='_blank'>Contact Us</a></h6>
          <h6 className="privacy-policy"><a className="policy-link" href="/terms-of-service">Terms Of Service</a></h6>
          <h6 className="privacy-policy"><a className="policy-link" href="/privacy-policy">Privacy Policy</a></h6>
        </div>
        <h6 className="author">©{currentYear} Posters Media LLC</h6>
      </div>
    </footer>
  )
}

export default Footer;