import React from 'react'
import './ProductForm.css'
import { motion } from 'framer-motion'
import ProductImage from '../../../../assets/product-image.jpg'

const ProductForm = () => {
  return (
    <section id='product-form'>
      <h1>Entrée De Produit</h1>
      <hr />
      <div id='product-form-top'>
        <div id='product-form-top-left'>
          <p>No. Product</p>
          <input type="text" />
          <p>Manufacturier</p>
          <input type="text" />
          <p>Description:</p>
          <textarea name="product-description" id="product-description" cols="33" rows="5"/>
          <p>Udm:</p>
          <select name="udm" id="">
            <option value="">--- Select an option ---</option>
          </select>
          <p>Product specifique:</p>
          <select name="ps" id="">
            <option value="">--- Select an option ---</option>
          </select>
          <p>Categorie:</p>
          <select name="ps" id="">
            <option value="">--- Select an option ---</option>
          </select>
          <p>Sous Categorie:</p>
          <select name="ps" id="">
            <option value="">--- Select an option ---</option>
          </select>
          <p>Prix Unitaire</p>
          <input type="text" />
        </div>
        <div id='product-form-top-right'>
          <p>Fourniseur</p>
          <table>
            <thead>
              <tr>
                <th className='table-left'>Fournisseur</th>
                <th className='table-right'>Cod Produit Fornisseur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>''</td>
                <td>''</td>
              </tr>
            </tbody>
          </table>
          <p>Stock minimun</p>
          <input type="text" />
          <p>Stock initial</p>
          <input type="text" />
          <div id='product-form-bottom-right'>
            <div>
              <p>Image Produit</p>
              <img src={ProductImage} alt="Img-Product" className='product-image' />
              <p>Stock disponible</p>
              <input type="text" />
            </div>
            <div id='product-form-buttons'>
              <motion.button className='product-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Nouvel Enregistrement</motion.button>
              <motion.button className='product-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Entrée de Produit</motion.button>
              <motion.button className='product-form-buttons-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>Supprimer le produit</motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductForm