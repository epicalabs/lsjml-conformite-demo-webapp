import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthContext from '../../../../../Context/AuthContext'
import './Reports.css'

const Reports = () => {
    const {auth} = useContext(AuthContext)
    const {role} = auth
    return (
    <section id='reports'>
        <div id='reports-buttons'>
            {(role === 'Achats' || role === 'Administrateur') &&
                <Link to={'actualStock'}>
                    <button>Rapport Stock Actualle</button>
                </Link>
            }
            {(role === 'Qualité' || role === 'Administrateur') &&
                <Link to={'riskAnalysis'}>
                    <button>Analyse Risque</button>
                </Link>
            }        
        </div>
        <div id='reports-content'>
            <Outlet/>
        </div>
    </section>
  )
}

export default Reports