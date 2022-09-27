import React from 'react'
import { Link, Outlet, useOutletContext} from 'react-router-dom'

import './Demander.css'

const Demander = () => {
    const [isClose, inputs] = useOutletContext();
    return (
    <div className={`demander-box ${isClose && 'isClose'}`}>
        <div id='demander-number'>
           <p id='demander-number-key'>Numero de NC:</p>
           {inputs ?
           <p id='demander-number-value-active'>0001</p>
           :
           <p id='demander-number-value'></p>
           } 
        </div>
        {inputs && 
            <div id='demander-form-types'>
                <Link to={'formulaire1'}>
                    <button>formulaire 1</button>
                </Link>
                <Link to={'formulaire2'}>
                    <button>formulaire 2</button>
                </Link>
            </div>
        }
        <Outlet context={[inputs]}/>
    </div>
  )
}

export default Demander