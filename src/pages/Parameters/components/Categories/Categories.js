import React from 'react'

import './Categories.css'

const Categories = () => {
  return (
    <section id='categories'>
        <h1>Categories</h1>
        <hr />
        <div id='categories-box'>
            <table id='categories-box-table'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Identificación de Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>110104</th>
                        <th>Consomable</th>
                    </tr>
                    <tr>
                        <th>119303</th>
                        <th>Consomable Critique</th>
                    </tr>
                    <tr>
                        <th>122334</th>
                        <th>Expertise</th>
                    </tr>
                    <tr>
                        <th>112304</th>
                        <th>Fornisseur De Laboratoire</th>
                    </tr>
                    <tr>
                        <th>123123</th>
                        <th>Forniture De Bureau</th>
                    </tr>
                    <tr>
                        <th>123489</th>
                        <th>Forniture de Laboratorie</th>
                    </tr>
                    <tr>
                        <th>163729</th>
                        <th>Maintenance</th>
                    </tr>
                    <tr>
                        <th>157439</th>
                        <th>Petit Équipement</th>
                    </tr>
                    <tr>
                        <th>194763</th>
                        <th>Trousse Médicolégale</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Categories