import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Reports.css'

const Reports = () => {
  return (
    <section id='reports'>
        <div id='reports-buttons'>
            <Link to={'actualStock'}>
                <button>Rapport Stock Actualle</button>
            </Link>
        </div>
        <div id='reports-content'>
            <Outlet/>
        </div>
    </section>
  )
}

export default Reports