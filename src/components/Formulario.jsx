import React, { useEffect, useState } from 'react'
import { Error } from './Error';

export const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)


  useEffect(() => {

    if(Object.keys(paciente).length===0) return;
     
    setNombre(paciente.nombre);
    setPropietario(paciente.propietario)
    setEmail(paciente.email);
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  

  }, [paciente]) 
  

  const generarId=()=>{
    const ramdom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    
    return fecha+ramdom;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('Hay un campo vacio')
      setError(true);
      return;

    }
      console.log('Todos llenos')
      setError(false);

      const objetoPaciente={
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
       

      }

      if(paciente.id){
        objetoPaciente.id= paciente.id;
        const pacientesActualizados=pacientes.map(pacienteState=>
          pacienteState.id===paciente.id?objetoPaciente:pacienteState 
        )

        setPacientes(pacientesActualizados);
        setPaciente({});

      }else{
        objetoPaciente.id= generarId();

        setPacientes((pacientes)=>[...pacientes,objetoPaciente]);
      }

      //Recetear fomulario
      setNombre('');
      setPropietario('');
      setFecha('');
      setEmail('');
      setSintomas('');
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguiminto Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Adminstralos</span>
      </p>

      <form onSubmit={handleSubmit}className='bg-white shadow-md rounded-md py-10 px-5 mb-10'>

          {error && <Error mensaje='Todos los campos son obligatorios'/> }

        <div className='mb-5'>
          <label className='block text-gray uppercase font-bold' htmlFor='nombre'>
              Nombre Mascota
          </label>
          <input type="text"
                  id='nombre'
                  placeholder='Nombre de la Mascota'
                  value={nombre}
                  onChange={({target})=>setNombre(target.value)}
                  className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray uppercase font-bold' htmlFor='propietario'>
              Nombre Propietario
          </label>
          <input type="text"
                  id='propietario'
                  placeholder='Nombre Propietario'
                  value={propietario}
                  onChange={({target})=>setPropietario(target.value)}
                  className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray uppercase font-bold' htmlFor='email'>
              Email
          </label>
          <input type="email"
                  id='email'
                  placeholder='Email Contacto Propietatio'
                  value={email}
                  onChange={({target})=>setEmail(target.value)}
                  className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray uppercase font-bold' htmlFor='alta'>
              Alta
          </label>
          <input type="date"
                  id='alta'
                  value={fecha}
                  onChange={({target})=>setFecha(target.value)}
                  
                  className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray uppercase font-bold' htmlFor='sintomas'>
              Sintomas
          </label>
           <textarea  
           id='sintomas'
             className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
             placeholder='Describe los sintomas'
             value={sintomas}
             onChange={({target})=>setSintomas(target.value)}
             />
         
        </div>
        <input type="submit" 
      
        className='w-full bg-indigo-600 text-white uppercase font-bold p-3 hover:bg-indigo-700 cursor-pointer transition-all'   
        value={paciente.id?"Editar Paciente":'Agregar Paciente'}/>

      </form>
    </div>
  )
}
