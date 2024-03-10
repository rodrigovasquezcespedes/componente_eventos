import Formulario from './Formulario';
import { faFacebook,faGithub,faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


const Registro = () => {
  return (
    <>
      <div className="container d-flex  justify-content-center align-items-center vh-100">
        <div className="text-center p-4 bg-light border rounded-3">
          <Formulario facebook={faFacebook} github={faGithub} instagram={faSquareInstagram} />
        </div>
      </div>
    </>
  )
}

export default Registro