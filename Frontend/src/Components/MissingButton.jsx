import React from 'react'
import './MissingButton.css'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
const MissingButton = ({requestWindowShow, setRequestWindowShow}) => {
  const { t } = useTranslation()
  const [missingHover, setMissingHover] = useState(false)

  function handleOpenReqWindow() {
    setRequestWindowShow(true)
  }
  return (
    <div className='place-missing'>
      <button
        onClick={handleOpenReqWindow}
        onMouseEnter={() => setMissingHover(true)} 
        onMouseOut = {() => setMissingHover(false)}
      >
      ?
      </button>
      <div className="place-missing-hover"
        style={{
          opacity: missingHover ? 1 : 0,
          pointerEvents: missingHover ? 'auto' : 'none'
        }}
      >
        <p>{t('cantf')}</p>
        <p>{t('requestadd')}</p>
      </div>
    </div>
  )
}

export default MissingButton