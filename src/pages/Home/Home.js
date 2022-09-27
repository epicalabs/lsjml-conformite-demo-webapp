import React, { useEffect, useState } from 'react'
import './Home.css'
import parametersIcon from '../../assets/ParametersIcon.png'
import functionalitiesIcon from '../../assets/FunctionalitiesIcon.png'
import usersIcon from '../../assets/usersIcon.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Home = () => {
    
    const {auth} = useContext(AuthContext);
    const [role, setRole] = useState(null)

    useEffect(() => {
        if (auth) {
            const {role} = auth
            console.log(role);
            setRole(role)
        }
    }, [auth])

  return (
    <motion.section id='home' initial={{x: 300}} animate={{x:0}}>
        <h1 id='home-title'>Accueillir! Que veux-tu faire?</h1>
        <hr id='home-bar'/>
        <div id='home-options'>
        {role && role === 'Administrateur' &&
            <Link to={'/identifiants'}>
                <motion.article className="home-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                        <div className="home-options-item-frame">
                            <img src={usersIcon} alt="Users-icon" className='home-options-item-frame-users'/>
                        </div>
                        <div className='home-options-item-text'>
                            <h1 className='home-options-item-text-title'>Identifiants</h1>
                        </div>
                </motion.article>
            </Link>
        }
        {role && (role === 'Achats' || role === 'Administrateur') &&
            <Link to={'/parameters'}>
                <motion.article className="home-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <div className="home-options-item-frame">
                        <img src={parametersIcon} alt="Parameters-icon" className='home-options-item-frame-parameters'/>
                    </div>
                    <div className='home-options-item-text'>
                        <h1 className='home-options-item-text-title'>Paraméters</h1>
                    </div>
                </motion.article>
            </Link>
        }
        {role && (role === 'Qualité' || role === 'Achats' || role === 'Utilisateur' || role === 'Administrateur') &&
            <Link to={'/fonctionalites'}>
                <motion.article className="home-options-item" whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <div className="home-options-item-frame">
                        <img src={functionalitiesIcon} alt="Functionalities-icon" className='home-options-item-frame-functionalities'/>
                    </div>
                    <div className='home-options-item-text'>
                        <h1 className='home-options-item-text-title'>Fonctionnalités</h1>
                    </div>
                </motion.article>
            </Link>   
        }
        </div>
    </motion.section>
  )
}

export default Home