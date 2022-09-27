import React from 'react'
import './Identifiants.css'
import usersIcon from '../../assets/usersIcon.png'
import TitlePage from '../Components/TitlePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Identifiants = () => {
  return (
    <section id='identifiants'>
        <TitlePage icon={usersIcon} title={'Identifiants'}/>
        <hr id='home-bar'/>
        <div id='identifiants-box'>
            <div>
                <table id='identifiants-table'>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Nom_Utilisateur</th>
                            <th>Usager</th>
                            <th>Pass</th>
                            <th>Niveau de sécurité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mauricio Bernal</td>
                            <td>JB</td>
                            <td>****</td>
                            <td>Administrateur</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Freddy</td>
                            <td>Freddy</td>
                            <td>****</td>
                            <td>Délégué qualité</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Laura Jara</td>
                            <td>Laura</td>
                            <td>****</td>
                            <td>Délégué aux achats</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Carlos Rincón</td>
                            <td>Charly</td>
                            <td>****</td>
                            <td>Utilisateur</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="text" placeholder='Nom_utilisateur'/></td>
                            <td><input type="text" placeholder='Usager '/></td>
                            <td><input type="text" placeholder='Pass '/></td>
                            <td>
                                <select name="" id="">
                                    <option value="selected">-- Niveau de sécurité --</option>
                                    <option value="Administrateur">Administrateur</option>
                                    <option value="Qualite">Délégué qualité</option>
                                    <option value="Achats">Délégué aux achats</option>
                                    <option value="Utilisateur">Utilisateur</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='identifiants-box-button'>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}><FontAwesomeIcon icon={faPlus}/> Ajouter un utilisateur</motion.button>
            </div>
        </div>
    </section>
    )
}

export default Identifiants