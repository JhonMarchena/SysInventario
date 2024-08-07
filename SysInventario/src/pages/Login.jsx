import { Link} from 'react-router-dom'
import '../styles/Login.css'

export function Login() {
    return(
        <section className="Pform">
         <div className="formulario">
                    
                    <h1>Login</h1>
                    
                    <div className='form-content'>

                        <div className='inputs'>
                            <label>Usuario</label>
                            <input type="text" required/>
                        </div>


                        <div className='inputs'>
                            <label htmlFor="">Contraseña</label>
                            <input type="password" required/>
                        </div>

                        <button>Login</button>
            
                    </div>
                    <section className='links'><Link to="/" className='fontlink'>Volver al inicio</Link></section>
               </div>

            </section>

    )
}


