import React from 'react'

export const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  
  const {nombre,propietario,email,fecha,sintomas,id} = paciente

  const handleEliminar=()=>{
    const respuesta = confirm('Deseas eliminar este paciente?');
    console.log(respuesta)
    if (respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className='bg-white mx-5 shadow-md px-5 py-10 rounded-xl mb-5'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
      <span className='font-normal normal-case'>{nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
      <span className='font-normal normal-case'>{propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
      <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
      <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
      <span className='font-normal normal-case'>{sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>
      <button type='button'
        onClick={()=>setPaciente(paciente)}
      className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white text-bold rounded-lg uppercase'
      >
        Editar
      </button>
      <button type='button'
        onClick={handleEliminar}
        className='py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white text-bold rounded-lg uppercase'>
        Eliminar
      </button>
    </div>
  </div>
  )
}
