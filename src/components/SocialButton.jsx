import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const SocialButton = () => {
  return (
    <div className=" m-3 d-flex justify-content-center">
          <div className='rounded-circle fs-2 m-2 px-2 border border-dark'>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className='rounded-circle fs-2 m-2 px-2 border-dark border border-dark'>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className='rounded-circle fs-2 m-2 px-2 border-dark border border-dark'>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
  )
}

export default SocialButton