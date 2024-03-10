import SocialButton from "./SocialButton"
import { useState } from 'react';
import Alert from './Alert'; 

const Formulario = (props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacionContrasena, setConfirmacionContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || email.trim() === '' || contrasena.trim() === '' || confirmacionContrasena.trim() === '') {
      setError('Todos los campos son requeridos.');
      return;
    }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('El correo electrónico no tiene un formato válido.');
      return;
  }

  if (contrasena !== confirmacionContrasena) {
      setError('Las contraseñas no coinciden.');
      return;
  }

    // Si pasa todas las validaciones, se puede enviar el formulario
    setError('Formulario enviado');
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmacionContrasena('');
  };

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
        <div className="m-2">
        <Alert message={alertMessage} />
        </div>
        
      </form>
    </>
  )
}

export default Formulario;
