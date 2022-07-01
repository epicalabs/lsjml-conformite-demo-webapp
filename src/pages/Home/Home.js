import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import QuebecLogo from '../../assets/Quebec-logo.png'
import ClientForm from './components/ClientForm/ClientForm'
import ProductForm from './components/ProductForm/ProductForm'
import SupplierForm from './components/SupplierForm/SupplierForm'
import './Home.css'

const Home = () => {

  const [barColor, setBarColor] = useState('')

  return (
    <Router>
      <header>
        <div id="header-logo">
          <img src={QuebecLogo} alt="Software-logo" />
        </div>
        <div id='header-nav'>
          <nav>
            <ul>
              <li>
                <Link to='/ProductForm'>
                  <motion.button onClick={() => setBarColor('product')} 
                    className='btn product' 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }}>
                    Entrada de producto
                  </motion.button>
                </Link>
              </li> |
              <li>
                <Link to='/SupplierForm'>
                  <motion.button onClick={() => setBarColor('supplier')} 
                    className='btn supplier'
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }}>
                    Entrada de proveedor
                  </motion.button>
                </Link>
              </li> |
              <li>
                <Link to='/ClientForm'>
                  <motion.button onClick={() => setBarColor('client')} 
                    className='btn client'
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }}>
                    Entrada de clientes
                  </motion.button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className={barColor}/>
      </header>
      <div className={`form-box ${barColor}`}>
        <Routes>
          <Route path='/ProductForm' element={<ProductForm/>}/>
          <Route path='/SupplierForm' element={<SupplierForm/>}/>
          <Route path='/ClientForm' element={<ClientForm/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default Home