import React from 'react'
import './Identifiants.css'
import usersIcon from '../../assets/usersIcon.png'
import TitlePage from '../Components/TitlePage'

const Identifiants = () => {
  return (
    <section id='identifiants'>
        <TitlePage icon={usersIcon} title={'Identifiants'}/>
        <hr id='home-bar'/>
        <div id='identifiants-box'>
            <table id='identifiants-table'>
                <thead>
                    <tr>
                        <th>Identifiant</th>
                        <th>Nom_Utilisateur</th>
                        <th>Usager</th>
                        <th>Pass</th>
                        <th>Nivel_Seguridad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Mauricio Bernal</th>
                        <th>JB</th>
                        <th>****</th>
                        <th>Administrator</th>
                    </tr>
                    <tr>
                        <th>10</th>
                        <th>Freddy</th>
                        <th>Freddy</th>
                        <th>****</th>
                        <th>Administrator</th>
                    </tr>
                    <tr>
                        <th>11</th>
                        <th>Laura Jara</th>
                        <th>Laura</th>
                        <th>****</th>
                        <th>Administrator</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    )
}

export default Identifiants