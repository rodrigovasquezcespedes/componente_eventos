import Formulario from './Formulario';
import SocialButton from './SocialButton';
import { faFacebook, faGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


const Registro = ({ setAlertMessage }) => {
  return (
    <>
      <div className="container d-flex  justify-content-center align-items-center vh-100">
        <div className="text-center p-4 col-5  bg-light border rounded-3">
          <h3>Crear una Cuenta</h3>
          <SocialButton facebook={faFacebook} github={faGithub} instagram={faSquareInstagram} />
          <label>o usar tu email para registrarte</label>
          <Formulario setAlertMessage={setAlertMessage} />
        </div>
      </div>
    </>
  )
}

export default Registro