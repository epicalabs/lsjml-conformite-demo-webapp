import React from 'react'
import TitlePage from '../Components/TitlePage'
import functionalitiesIcon from '../../assets/FunctionalitiesIcon.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import usersIcon from '../../assets/usersIcon.png'

import './Functionalities.css'

const Functionalities = () => {
    
  return (
    <motion.section id='Functionalities' initial={{x: 300}} animate={{x:0}}>
        <TitlePage icon={functionalitiesIcon} title={'Fonctionnalités'}/>
        <hr id='functionalities-bar'/>
        <div id='functionalities-options'>
            <Link to={'achats'}>
                <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <div className="home-options-item-frame">
                        <img src={usersIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                    </div>
                    <div className='home-options-item-text'>
                        <h1 className='home-options-item-text-title'>Achats</h1>
                    </div>
                </motion.article>
            </Link>
            <Link to={'inventaire'}>
                <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <div className="home-options-item-frame">
                        <img src={usersIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                    </div>
                    <div className='home-options-item-text'>
                        <h1 className='home-options-item-text-title'>Inventaire</h1>
                    </div>
                </motion.article>
            </Link>
            <Link to={'quality'}>
                <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <div className="home-options-item-frame">
                        <img src={usersIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                    </div>
                    <div className='home-options-item-text'>
                        <h1 className='home-options-item-text-title'>Qualité</h1>
                    </div>
                </motion.article>
            </Link>
        </div>
    </motion.section>
  )
}

export default Functionalities