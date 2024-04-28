import { Link} from 'react-router-dom'
import '../styles/Login.css'

export function Login() {
    return(
                <div className="formulario">
                    
                    <h1>Login</h1>
                    
                    <div className='form-content'>

                        <div className='inputs'>
                            <label htmlFor="">Usuario</label>
                            <input type="text" required/>
                        </div>


                        <div className='inputs'>
                            <label htmlFor="">Contraseña</label>
                            <input type="password" required/>
                        </div>

                        <button>Login</button>
                    
                    </div>

                    <Link to="/">Volver al inicio</Link> 
                
                </div>
    )
}


