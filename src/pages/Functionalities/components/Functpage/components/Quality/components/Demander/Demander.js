import React from 'react'

import './Demander.css'

const Demander = () => {
  return (
    <div id='demander-box'>
        <div id='demander-number'>
           <p id='demander-number-key'>Numero de NC:</p> 
        </div>
        <div id='demander-form'>
            <div id='demander-form-top'>
                <div id='demander-form-top-lside'>
                    <div>
                        <p>Nom, prénom: </p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Service de détection: </p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Description sommaire (titre): </p>
                        <input type="text" />
                    </div>
                </div>
                <div id='demander-form-top-rside'>
                    <div>  
                        <p>Date de détection: </p>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div id='demander-form-bottom'>
                <p>Présentatio de la situation:</p>
                <textarea name="" id="" cols="122" rows="5"></textarea>
                <p>Estimation de l'ampleur de la situation problématique, au dela de ce qui a été détecté par la non-conformité:</p>
                <textarea name="" id="" cols="122" rows="5" placeholder="(par exemple: est-ce qu'il est possible que la situation non-conforme ait affecté d'autres résultats, d'autres appareils? etc)"></textarea>
                <div>
                    <p>Nom du responsable:</p>
                    <p>Date:</p>
                </div>
            </div>
            <div id='demander-form-footer'>
                <button>Approuver</button>
            </div>
        </div>
    </div>
  )
}

export default Demander