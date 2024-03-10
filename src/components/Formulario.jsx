import SocialButton from "./SocialButton"
import { useState } from 'react';
import Alert from './Alert'; 
import ButtonRegistro from "./ButtonRegistro";

const Formulario = (props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacionContrasena, setConfirmacionContrasena] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || email.trim() === '' || contrasena.trim() === '' || confirmacionContrasena.trim() === '') {
      setAlertMessage('Todos los campos son requeridos.');
      setAlertType('error');
      return;
    }

    if (/\d/.test(nombre)) {
      setAlertMessage('El nombre no puede contener números.');
      setAlertType('error');
      return;
    }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setAlertMessage('El correo electrónico no tiene un formato válido.');
    setAlertType('error');
      return;
  }

  if (contrasena !== confirmacionContrasena) {
    setAlertMessage('Las contraseñas no coinciden.');
    setAlertType('error');
      return;
  }

    // Si pasa todas las validaciones, se puede enviar el formulario
    setAlertMessage('Validacion Exitosa');
    setAlertType('success'); 
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmacionContrasena('');
  };

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
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
         <ButtonRegistro/>
        </div>
        <div className="m-2">
        <Alert message={alertMessage} type={alertType} />
        </div>
        
      </form>
    </>
  )
}

export default Formulario;
