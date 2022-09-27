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
                        <th>Code</th>
                        <th>Identification de la catégorie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>110104</td>
                        <td>Consomable</td>
                    </tr>
                    <tr>
                        <td>119303</td>
                        <td>Consomable Critique</td>
                    </tr>
                    <tr>
                        <td>122334</td>
                        <td>Expertise</td>
                    </tr>
                    <tr>
                        <td>112304</td>
                        <td>Fornisseur De Laboratoire</td>
                    </tr>
                    <tr>
                        <td>123123</td>
                        <td>Forniture De Bureau</td>
                    </tr>
                    <tr>
                        <td>123489</td>
                        <td>Forniture de Laboratorie</td>
                    </tr>
                    <tr>
                        <td>163729</td>
                        <td>Maintenance</td>
                    </tr>
                    <tr>
                        <td>157439</td>
                        <td>Petit Équipement</td>
                    </tr>
                    <tr>
                        <td>194763</td>
                        <td>Trousse Médicolégale</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Categories