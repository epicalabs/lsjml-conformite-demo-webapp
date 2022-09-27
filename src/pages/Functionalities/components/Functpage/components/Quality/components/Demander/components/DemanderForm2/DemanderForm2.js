import React from 'react'

import './DemanderForm2.css'

const DemanderForm2 = () => {
  return (
    <div className="demander-form">
        <p className='demander-form-key'>Analyse de l'opportunité d'ouvrir une Demande d'action corrective (FQ-11-ADM-003)</p>
        <textarea name="" className="demander-form-textarea" cols="122" rows="5" placeholder='(Analyse des causes de la tituation non conforme, présence répétitive de non-conformités similaires dans le passé, etc)'></textarea>
        <div id='demander-form-textarea-bottom'>
            <div id='demander-form-textarea-bottom-decision'>
                <p>Décision:</p>
                <p id='demander-form-textarea-bottom-decision-overtune'>Overture d'une Action corrective</p>
            </div>
            <div id='demander-form-textarea-bottom-checkbox'>
                <input type="checkbox" id='Oui'/>
                <p>Oui</p>
                <input type="checkbox" id='Non'/>
                <p>Non</p>
            </div>
            <div>
                <p>Numéro de l'Action corrective:</p>
                <p>Nom du responsable:</p>
            </div>
        </div>
        <div id='demander-form-derogations'>
            <p>Dérogations / information client</p>
            <textarea name="" className="demander-form-textarea" cols="122" rows="4"></textarea>
        </div>
        <div id='demander-form-closure'>
            <p className='demander-form-title'><strong>clôture de la non-conformité</strong></p>
            <div className="demander-form-box">

            <div id='demander-form-closure-checkbox'>
                <div className='yellow'>
                    <p>Corrections effectuées efficaces</p>
                    <div id='demander-form-closure-checkbox-area'>
                        <p>Oui</p>
                        <input type="checkbox" name="Oui-closure" id="Oui-closure" />
                        <p>Non</p>
                        <input type="checkbox" name="Oui-closure" id="Non-closure" />
                    </div>
                </div>
                <p>(«non» implique un suivi via les actions correctives ou l'analyse de risque)</p>
            </div>
            <div className='demander-form-closure-date'>
                <p><strong>Date:</strong></p>
                <p><strong>Nom du responsable:</strong></p>
            </div>
                <div id='demander-form-closure-ncType'>
                    <div id='demander-form-closure-ncType-title'>
                        <p><strong>Type de NC:</strong></p>
                    </div>
                    <div id='demander-form-closure-ncType-checkbox'>
                        <div>
                            <p>1. Systéme qualité</p>
                            <input type="checkbox" name="" id="" />                    
                        </div>
                        <div>
                            <p>2. Personnel</p>
                            <input type="checkbox" name="" id="" />                     
                        </div>
                        <div>
                            <p>3. Consommable  <br /><small>(solution, contaminée, etc)</small></p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>4. Analyses/méthodes</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>5. Instruments</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>6. Traçabilité</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>7. Informatique</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>8. Piéces</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>9. Résultats</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>10. Autres</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='demander-form-evaluation'>
            <p className='demander-form-title'><strong>Évaluation des risques</strong> (á remplir par le Coordonnateur Qualité, aprés fermeture de la NC):</p>
            <div className='demander-form-box'>
                <p>Estimation du risque toujours présent, <strong>aprés correction et clôture</strong> (utiliser la PQ-15 pour remplir cette section)</p>
                <div id='demander-form-evaluation-estimates'>
                    <p>Estimation de la fréquence potentielle future (niveaux 1 á 5):</p>
                    <p>Estimation des conséquences potentielles future (niveaux 1 á 5):</p>
                </div>
                <p>Niveau de risque final estimé</p>
                <div id='demander-form-evaluation-levels'>
                    <div className='green'>
                        <p>1. Faible</p>
                        <input type="checkbox" name="" id="" />                  
                    </div>
                    <div className='yellow'>
                        <p>2. Modéré</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='orange'>
                        <p>3. Substantiel</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='red'>
                        <p>4. Grave ou </p>
                        <p className='f-white'> Extréme</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
                <div>
                    <p>Commentaires (au besoin):</p>
                    <textarea name="" className="demander-form-textarea" cols="117" rows="5"></textarea>
                </div>
                <div className='demander-form-closure-date'>
                    <p><strong>Date:</strong></p>
                    <p><strong>Nom du responsable:</strong></p>
                </div>
            </div>
        </div>
        <div id='demander-form-footer'>
            <button>Approuver</button>
        </div>
    </div>
  )
}

export default DemanderForm2