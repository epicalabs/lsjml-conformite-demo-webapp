import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import parametersIcon from '../../assets/ParametersIcon.png'
import TitlePage from '../Components/TitlePage'

import './Parameters.css'

const Parameters = () => {

  const [barColor, setBarColor] = useState('product')

  return (
    <motion.section id='parameters' initial={{x: 300}} animate={{x:0}}>
      <TitlePage icon={parametersIcon} title={'Paraméters'}/>
      <nav id='parameters-nav'>
        <hr className={barColor}/>
        <ul>
          <li>
            <Link to='productForm'>
              <motion.button onClick={() => setBarColor('product')} 
                className='btn product' 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 1 }}>
                produit
              </motion.button>
            </Link>
          </li> |
          <li>
            <Link to='supplierForm'>
              <motion.button onClick={() => setBarColor('supplier')} 
                className='btn supplier'
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 1 }}>
                fournisseur
              </motion.button>
            </Link>
          </li> |
          <li>
            <Link to='clientForm'>
              <motion.button onClick={() => setBarColor('client')} 
                className='btn client'
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 1 }}>
                clients
              </motion.button>
            </Link>
          </li> |
          <li>
            <Link to='categories'>
              <motion.button onClick={() => setBarColor('categories')} 
                className='btn categories'
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 1 }}>
                catégories
              </motion.button>
            </Link>
          </li>
        </ul>
      </nav>
      <motion.section className={`form-box ${barColor}`} initial={{x: 300}} animate={{x:0}}>
        <Outlet/>
      </motion.section>
    </motion.section>
    
  )
}

export default Parameters