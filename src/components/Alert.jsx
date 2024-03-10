const Alert = ({ message, type }) => {
  let alertClass = "alert";


  if (type === "error") {
    alertClass += " alert-danger";
  } else if (type === "success") {
    alertClass += " alert-success";
  }

  return (
    <div className={alertClass}>{message}</div>
  );
}

export default Alert;
