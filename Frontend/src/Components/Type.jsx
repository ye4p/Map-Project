import React from "react";
import './Type.css'
import { useState} from 'react'
import { useTranslation } from 'react-i18next'

const Type = ( { typeOfPlace, setTypeOfPlace } ) => {
    const { t } = useTranslation()
    function handleChangeType(e) {
        setTypeOfPlace(e.target.value)
        // console.dir(e)
    }
    useState(() => {
      //  console.log(typeOfPlace)
    }, [typeOfPlace])
    return (
        <div className="type-place">
            <div className="type-title">
                <p>
                    {t('type')}
                </p>
            </div>
            <select name="place" id="place"
            onChange={handleChangeType}
            >
                <option value="">{t('type1')}</option>
                <option value="park">{t('type2')}</option>
                <option value="restaurant">{t('type3')}</option>
                <option value="grocery">{t('type4')}</option>
                <option value="cinema">{t('type5')}</option>
                <option value="other">{t('type6')}</option>
            </select>
        </div>
    )
}
export default Type