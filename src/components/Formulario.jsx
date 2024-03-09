import SocialButton from "./SocialButton"

const Formulario = () => {
  return (
    <>
      <form className="m-4">
        <h3>Crear una Cuenta</h3>
        <SocialButton/>
        <label>o usar tu email para registrarte</label>
        <div className="mb-3">

          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="tuemail@ejemplo.com" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="contraseña" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="confirmar contraseña" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </>
  )
}

export default Formulario