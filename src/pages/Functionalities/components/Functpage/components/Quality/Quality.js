import React from 'react'
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import AuthContext from '../../../../../Context/AuthContext';

import './Quality.css'

const Quality = () => {
    let isClose = false,
    inputs = false;

    const {auth} = useContext(AuthContext)
    const {role} = auth
  return (
    <section id='quality'>
        <div id='quality-title'>
            <h1>Fiche de Non-Conformité</h1>
            <hr />
        </div>
        <nav id='quality-buttons'>
            <ul>
                {(role === 'Qualité' || role === 'Utilisateur' || role === 'Administrateur') &&
                    <Link to={'demander'}>
                        <li>Demander</li>
                    </Link>
                }
                {(role === 'Qualité' ||  role === 'Administrateur') &&
                    <Link to={'list/demandeList'}>
                        <li>Liste de demandes</li>
                    </Link>
                }
            </ul>
        </nav>
        <section id='quality-content'>
            <Outlet context={[isClose, inputs]}/>
        </section>
    </section>
  )
}

export default Quality