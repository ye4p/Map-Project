import React from 'react';
import './CustomPopup.css'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

const CustomPopup = ( { name, type, russian, ukrainian, rating, description, address, 
                        reviewWindowShow, setReviewWindowShow,
                        id, placeId, setPlaceId, ticketWindowShow, setTicketWindowShow 
                      } ) => {
                        const { t } = useTranslation()
  const [typeConverter, setTypeConverter] = useState('')

  function typeConverterFunc(e) {
    let array = e.split('_');
    array[0]=array[0].charAt(0).toUpperCase() + array[0].slice(1);
    let newType = array.join(' ');
    return newType;
  }
  
  function openTicketModal() {
    setTicketWindowShow(true)
    setPlaceId(id)
  }

  function openReviewModal(name, type, russian, ukrainian, rating, description, address) {
    setReviewWindowShow(true)
    setPlaceId(id)
  }

  useEffect(() => {
    setTypeConverter(typeConverterFunc(type))
  }, [type])
  
    return (
    <div className="popup-content">
      <div className="popup-header">
        <h2>{name}</h2>
        <div className="availability">
          <p>🇷🇺: <span>{russian ? '✅' : '❌'}</span></p>
          <p>🇺🇦: <span>{ukrainian ? '✅' : '❌'}</span></p>
        </div>
      </div>
      <div className="popup-main">
        <p className="popup-type">{t('popupplace')} <span>{typeConverter}</span></p>
        <p className="popup-address">{t('popupaddress')}<span>{address}</span></p>
        {description ? <p className="popup-info">{t('popupinfo')}<span>{description}</span></p> : null}
      </div>
      <div className="popup-end">
        <button className='button-data'
        onClick={openTicketModal}
        >{t('missdata')}</button>
        <button className='button-review'
        onClick={openReviewModal}
        >{t('leaverev')}</button>
      </div>
      
    </div>
    );
};

export default CustomPopup;