import React from 'react'
import { useOutletContext } from 'react-router-dom'

import './DemanderForm1.css'

const DemanderForm1 = () => {
    const [inputs] = useOutletContext();
    
  return (
    <div className='demander-form'>
            <div id='demander-form-top'>
                <div id='demander-form-top-lside'>
                    <div>
                        <p className='demander-form-key'>Nom, prénom: </p>
                        {inputs ?  <p>Carlos</p> : <input type="text" />}
                    </div>
                    <div>
                        <p className='demander-form-key'>Service de détection: </p>
                        <input type="text" />
                    </div>
                    <div>
                        <p className='demander-form-key'>Description sommaire (titre): </p>
                        <input type="text" />
                    </div>
                </div>
                <div id='demander-form-top-rside'>
                    <div>  
                        <p className='demander-form-key'>Date de détection: </p>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div id='demander-form-bottom'>
                <p className='demander-form-key'>Présentatio de la situation:</p>
                <textarea name="" id="" cols="122" rows="5"></textarea>
                <p className='demander-form-key'>Estimation de l'ampleur de la situation problématique, au dela de ce qui a été détecté par la non-conformité:</p>
                <textarea name="" id="" cols="122" rows="5" placeholder="(par exemple: est-ce qu'il est possible que la situation non-conforme ait affecté d'autres résultats, d'autres appareils? etc)"></textarea>
                <div>
                    <p className='demander-form-key'>Nom du responsable:</p>
                    <p className='demander-form-key'>Date:</p>
                </div>
            </div>
            {inputs &&
                <div id='demander-form-table'>
                    <p><strong>Correction effectuées</strong> (utiliser des feuilles suplémentaires au besoin)</p>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th id='demander-form-table-responsable'>Responsable</th>
                                <th id='demander-form-table-description'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td><input type="date" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td><input type="date" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            <div id='demander-form-footer'>
                <button>Approuver</button>
            </div>
        </div>
  )
}

export default DemanderForm1