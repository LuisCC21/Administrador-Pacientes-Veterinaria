
import { useEffect, useState } from 'react'

import {Header }from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {
 
  const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});
  
/*   useEffect(() => {
    const obtenerLS = ()=>{
      const pacientesLocal =JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLocal)

    }
    obtenerLS()

  }, []) */



  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));

  }, [pacientes])
  
  

const eliminarPaciente=id=>{
  const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id);
  setPacientes(pacientesActualizados);

}
  return (  
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario 
        setPacientes={setPacientes}
        paciente={paciente}
        pacientes={pacientes}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
