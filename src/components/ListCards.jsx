import React from 'react'
import Card from './Card'
import book from '../assets/Book.svg'
import user from '../assets/User.svg'
import bookOpen from '../assets/BookOpen.svg'

const ListCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        <Card title="total de ordenes" valor="100" porcentaje="+12" transcurso="mensual" img={book} />
        <Card title="total de clientes" valor="80" porcentaje="+4" transcurso="mensual" img={user}  />
        <Card title="total de ordenes completados" valor="90" porcentaje="-0.89" transcurso="mes" img={bookOpen}  />
    </div>
  )
}

export default ListCards