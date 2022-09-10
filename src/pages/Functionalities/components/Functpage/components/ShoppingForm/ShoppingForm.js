import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'

import './ShoppingForm.css'

const ShoppingForm = () => {
  return (
    <section id='shopping'>
        <div id='shopping-top'>
            <div id='shopping-top-left'>
                <div>
                    <p>Fornisseurs:</p>
                    <select name="" id="">
                        <option value="888">888</option>
                        <option value="777">777</option>
                        <option value="555">555</option>
                    </select>
                </div>
                <div>
                    <p>Nom. Fournisseur:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Nro. Facture:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Date d'entrée:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Reçu par:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Observations:</p>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>
            <div id='shopping-top-right'>
                <div id='shopping-top-right-top'>
                    <div>
                        <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Stock Actuel</motion.button>
                        <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Rechercher un registre</motion.button>
                        <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}><FontAwesomeIcon icon={faArrowRightFromBracket}/></motion.button>
                    </div>
                    <div>
                        <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Consultation Rapide de Produit</motion.button>
                    </div>
                </div>
                <div id='shopping-top-left-bottom'>
                    <p>Méthode de paiement</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
        <div id='shopping-center'>
            <h1>Produit</h1>
            <table>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>U. Mesure</th>
                        <th>Entrée</th>
                        <th>Valeur</th>
                        <th>Valeur Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <select name="" id="">
                                <option value="">option</option>
                            </select>
                        </th>
                        <th>option</th>
                        <th>option</th>
                        <th>option</th>
                        <th>option</th>
                    </tr>
                    <tr>
                        <th>option</th>
                        <th>option</th>
                        <th>option</th>
                        <th>option</th>
                        <th>option</th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id='shopping-bottom'>
            <div id='shopping-bottom-left'>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Imprimer Rem</motion.button>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Supprimer Rem</motion.button>
            </div>
            <div id='shopping-bottom-right'>
                <div>
                    <p>Sous Total:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Tax:</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Total Achat</p>
                    <input type="text" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShoppingForm