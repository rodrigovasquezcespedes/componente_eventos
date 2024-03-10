import Registro from './components/Registro'
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert'

function App() {
const [alertMessage, setAlertMessage] = useState('');
  return (
    <>
      <Registro setAlertMessage={setAlertMessage} />
      <Alert message={alertMessage} />
    </>
  )
}

export default App

