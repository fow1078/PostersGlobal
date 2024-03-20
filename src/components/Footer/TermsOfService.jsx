import React from 'react'
import Footer from './Footer'

import "./table.css"
import "./style.css"

import termsHtml from './terms-of-service'

function TermsOfService() {
  return (
    <>
      <div  dangerouslySetInnerHTML={{ __html: termsHtml }} />
      <Footer />
    </>
  )
}

export default TermsOfService