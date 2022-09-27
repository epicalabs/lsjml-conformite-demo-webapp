import React from 'react'
import './ClientForm.css'
import { motion } from 'framer-motion'

const ClientForm = () => {
  return (
    <section id='client-form'>
      <h1>Entrée Clients</h1>
      <hr />
        <p>Identifient:</p>
        <input type="text" />
        <p>Nom et prenom du client:</p>
        <input type="text" />
        <p>Adresse:</p>
        <input type="text" />
        <p>Téléphone:</p>
        <input type="text" />
        <p>Adresse e-mail:</p>
        <input type="text" />
        <p>Province:</p>
        <input type="text" />
        <p>Ville:</p>
        <input type="text" />
        <div id='client-form-buttons'>
          <motion.button className='supplier-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Supprimer le registre</motion.button>
          <motion.button className='supplier-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Nouveau Client</motion.button>
        </div>
    </section>
  )
}

export default ClientForm