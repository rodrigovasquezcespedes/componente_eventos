import SocialButton from "./SocialButton"
import { useState } from 'react';
import Alert from './Alert'; 

const Formulario = (props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacionContrasena, setConfirmacionContrasena] = useState('');
  const [error, setError] = useState('');

  

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
        <h3>Crear una Cuenta</h3>
        <SocialButton facebook={props.facebook} github={props.github} instagram={props.instagram}/>
        <label>o usar tu email para registrarte</label>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="confirmar contraseña" value={confirmacionContrasena} onChange={(e) => setConfirmacionContrasena(e.target.value)}/>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        {error && <Alert message={error} />}
      </form>
    </>
  )
}

export default Formulario;
