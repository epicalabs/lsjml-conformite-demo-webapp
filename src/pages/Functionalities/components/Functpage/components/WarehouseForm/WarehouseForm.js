import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { motion } from 'framer-motion'
import './WarehouseForm.css'

const WarehouseForm = () => {
  return (
    <section id='warehouse'>
      <div id='warehouse-top'>
        <div id='warehouse-top-left'>
          <div id='warehouse-top-left-lside'>
            <div>
              <p>Sortir Numero:</p>
              <input type="text" />
            </div>
            <div>
              <p>ID Client:</p>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
        <div id='warehouse-top-center'>
          <div>
            <p>Date:</p>
            <p>2022-09-06</p>
          </div>
          <div>
            <p>Nom du client:</p>
            <select name="" id="">
              <option value="Mauricio">Mauricio</option>
            </select>
          </div>
        </div>
        <div id='warehouse-top-right'>
          <h1>No Remission</h1>
          <div>
            <p>utilisater</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div id='warehouse-center'>
        <div id='warehouse-center-top'>
          <div>
            <h1>Produits</h1>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Stock Actualle</motion.button>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Rechercher Registre</motion.button>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}><FontAwesomeIcon icon={faArrowRightFromBracket}/></motion.button>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Mettre à jour</motion.button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Unité Messure</th>
              <th>QT</th>
              <th>PRIX</th>
              <th>MontTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </th>
              <th>Option</th>
              <th>Option</th>
              <th>Option</th>
              <th>Option</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div id='warehouse-bottom'>
        <div id='warehouse-bottom-left'>  
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Imprimer Remission</motion.button>
            <h2><FontAwesomeIcon icon={faPrint}/></h2>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Voir Remission</motion.button>
            <h2><FontAwesomeIcon icon={faMagnifyingGlass}/></h2>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Nuevelle Remission</motion.button>
            <h2><FontAwesomeIcon icon={faIdCard}/></h2>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Éliminer Remission</motion.button>
            <h2><FontAwesomeIcon icon={faTrash}/></h2>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Rapport General</motion.button>
          </div>
        </div>
        <div id='warehouse-bottom-center'>
          <div id='warehouse-bottom-center-top'>
            <div>
              <p>Sous-total: </p>
              <input type="text" />
            </div>
            <div>
              <p>Tax: </p>
              <input type="text" />
            </div>
            <div>
              <p>Montant Total: </p>
              <input type="text" />
            </div>
          </div>
          <div id='warehouse-bottom-center-bottom'>
            <div>
              <p>Paiement:</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div id='warehouse-bottom-right'>
          <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Consulter Produit</motion.button>
          <motion.button whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{scale:1, backgroundColor: '#d1d1d1'}}>Consulter Remissions</motion.button>
        </div>
      </div>
    </section>
  )
}

export default WarehouseForm