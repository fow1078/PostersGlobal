import React from 'react'
import Footer from './Footer'

import "./table.css"
import "./style.css"

import privacyPolicyHtml from './privacy-policy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

function PrivacyPolicy() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
      <Footer />
    </>
  )
}

export default PrivacyPolicy