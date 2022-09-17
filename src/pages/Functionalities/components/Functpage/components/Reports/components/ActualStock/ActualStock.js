import React from 'react'

import './ActualStock.css'

const ActualStock = () => {
  return (
    <section id='actualStock'>
      <div id='actualStock-product'>
        <h1>Stock Actualle</h1>
        <div>
          <p>code barres</p>
          <p>produits</p>
        </div>
      </div>
      <div id='actualStock-table'>
        <table>
          <thead>
            <tr>
              <td></td>
              <th>Stock Min</th>
              <th>Stock Actual</th>
              <th>Réapprovisionner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cintas Aislantes para electricidad</th>
              <th></th>
              <th></th> 
              <th></th> 
            </tr>
            <tr>
              <th>Paquettes Abacard P30 Pour La Détection de Sperme Por Les Laboratoires Judiciaires</th>
              <th>1000</th>
              <th>673</th>
              <th>327</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div id='actualStock-footer'>
        <hr />
        <div>
          <p>13 Septembre 2022</p>
          <p>Pág 1 de 1</p>
        </div>
      </div>
    </section>
  )
}

export default ActualStock