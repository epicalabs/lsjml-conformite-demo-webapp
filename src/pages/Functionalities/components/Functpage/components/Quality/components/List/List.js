import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

import './List.css'
import { Outlet } from 'react-router-dom'

const List = () => {
  const [isClose, setIsClose] = useState(true)
  let inputs = true;
  
  return (
    <div id='list-box'>
        <div className="list-accordion" onClick={() => setIsClose(!isClose)}>
          <div className="list-accordion-info">
            <div>
              <p className='list-accordion-info-key'>Condition:</p>
              <p className='list-accordion-info-value-condition approved'>passé</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Numero de NC:</p>
              <p className='list-accordion-info-value'>0001</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Nom, prénom:</p>
              <p className='list-accordion-info-value'>Carlos</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Date de détection:</p>
              <p className='list-accordion-info-value'>19-09-2022</p>
            </div>
          </div>
          <div className="list-accordion-arrow">
            <p>
              <FontAwesomeIcon icon={faPlus}/>
            </p>
          </div>
        </div>
        <div className="list-accordion-request">
          <Outlet context={[isClose, inputs]}/>
        </div>
        <div className="list-accordion">
          <div className="list-accordion-info">
            <div>
              <p className='list-accordion-info-key'>Condition:</p>
              <p className='list-accordion-info-value-condition onhold'>En attente</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Numero de NC:</p>
              <p className='list-accordion-info-value'>0002</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Nom, prénom:</p>
              <p className='list-accordion-info-value'>Gusteau</p>
            </div>
            <div>
              <p className='list-accordion-info-key'>Date de détection:</p>
              <p className='list-accordion-info-value'>17-09-2022</p>
            </div>
          </div>
          <div className="list-accordion-arrow">
            <p>
              <FontAwesomeIcon icon={faPlus}/>
            </p>
          </div>
        </div>
    </div>
  )
}

export default List