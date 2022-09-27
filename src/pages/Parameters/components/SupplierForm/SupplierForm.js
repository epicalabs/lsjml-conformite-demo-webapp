import React from 'react'
import './SupplierForm.css'
import { motion } from 'framer-motion'


const SupplierForm = () => {
  return (
    <section id='supplier-form'>
      <h1>Entrée Du Fournisseur</h1>
      <hr />
        <p>ID Fornisseur:</p>
        <input type="text" />
        <p>Nom Du Fournisseur:</p>
        <input type="text" />
        <p>Adresse:</p>
        <input type="text"/>
        <p>Téléphone:</p>
        <input type="text"/>
        <p>Adresse e-mail:</p>
        <input type="text"/>
        <p>Contact:</p>
        <input type="text" />
        <p>NAS:</p>
        <input type="text" />
        <div id='supplier-form-buttons'>
          <motion.button className='supplier-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Nouveau</motion.button>
          <motion.button className='supplier-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Sortir</motion.button>
          <motion.button className='supplier-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Eliminer</motion.button>
        </div>
    </section>
  )
}

export default SupplierForm