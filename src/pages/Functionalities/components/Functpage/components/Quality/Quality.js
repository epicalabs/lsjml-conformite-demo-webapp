import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Quality.css'

const Quality = () => {
  return (
    <section id='quality'>
        <div id='quality-title'>
            <h1>Fiche de Non-Conformité</h1>
            <hr />
        </div>
        <nav id='quality-buttons'>
            <ul>
                <Link to={'demander'}>
                    <li>Demander</li>
                </Link>
                <Link to={'list'}>
                    <li>Liste de demandes</li>
                </Link>
            </ul>
        </nav>
        <section id='quality-content'>
            <Outlet/>
        </section>
    </section>
  )
}

export default Quality