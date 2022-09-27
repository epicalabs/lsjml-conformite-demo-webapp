import React, { useContext } from 'react'
import TitlePage from '../Components/TitlePage'
import functionalitiesIcon from '../../assets/FunctionalitiesIcon.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import shoppingIcon from '../../assets/shoppingIcon.png'
import inventoryIcon from '../../assets/inventoryIcon.png'
import qualityIcon from '../../assets/qualityIcon.png'
import reportIcon from '../../assets/reportIcon.png'

import './Functionalities.css'
import AuthContext from '../Context/AuthContext'

const Functionalities = () => {

    const {auth} = useContext(AuthContext)
    const {role} = auth
    
  return (
    <motion.section id='Functionalities' initial={{x: 300}} animate={{x:0}}>
        <TitlePage icon={functionalitiesIcon} title={'Fonctionnalités'}/>
        <hr id='functionalities-bar'/>
        <div id='functionalities-options'>
            {(role === 'Achats' || role === 'Administrateur') &&
                <>
                    <Link to={'achats'}>
                        <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                            <div className="home-options-item-frame">
                                <img src={shoppingIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                            </div>
                            <div className='home-options-item-text'>
                                <h1 className='home-options-item-text-title'>Achats</h1>
                            </div>
                        </motion.article>
                    </Link>
                    <Link to={'inventaire'}>
                        <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                            <div className="home-options-item-frame">
                                <img src={inventoryIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                            </div>
                            <div className='home-options-item-text'>
                                <h1 className='home-options-item-text-title'>Inventaire</h1>
                            </div>
                        </motion.article>
                    </Link>
                </>
            }
            {(role === 'Qualité' || role === 'Utilisateur' || role === 'Administrateur') &&
                <Link to={'qualite/demander'}>
                    <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                        <div className="home-options-item-frame">
                            <img src={qualityIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                        </div>
                        <div className='home-options-item-text'>
                            <h1 className='home-options-item-text-title'>Qualité</h1>
                        </div>
                    </motion.article>
                </Link>
            }
            {(role === 'Qualité' || role === 'Achats' || role === 'Administrateur') &&
                <Link to={'rapports'}>
                    <motion.article className="functionalities-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                        <div className="home-options-item-frame">
                            <img src={reportIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                        </div>
                        <div className='home-options-item-text'>
                            <h1 className='home-options-item-text-title'>Rapports</h1>
                        </div>
                    </motion.article>
                </Link>
            }
        </div>
    </motion.section>
  )
}

export default Functionalities