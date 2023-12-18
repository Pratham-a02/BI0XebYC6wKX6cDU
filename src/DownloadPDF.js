import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const DownloadPDF = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <a className='btn btn-success' href='Pratham Pahad (11).pdf' download='Resume.pdf'>
            Download
        </a>
    </div>
  )
}

export default DownloadPDF