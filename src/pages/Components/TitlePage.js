import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import './TitlePage.css'

const TitlePage = (props) => {
    const {icon, title, subtitle, backLink} = props;
    
  return (
    <div id='identifiants-banner'>
        <div id='identifiants-banner-title'>
            <div id="identifiants-banner-title-frame">
                <img src={icon} alt="Users-icon" id='identifiants-banner-title-frame-icon'/>
            </div>
            <div id='identifiants-banner-title-text'>
                <h1 id='identifiants-banner-title-text-title'>{title}</h1>
                {subtitle &&
                    <div id='titlepage-banner-title-text-subtitle'>
                        <h1>{'>'}</h1>
                        <h1>{subtitle}</h1>
                    </div>
                }
            </div>
        </div>
        <div id='identifiants-banner-back'>
            <Link to={backLink ? backLink : '/home'}>
                <h1><FontAwesomeIcon icon={faCircleArrowLeft}/></h1>
                <h1 id='identifants-banner-back-text'>Back</h1>
            </Link>
        </div>
    </div>
  )
}

export default TitlePage