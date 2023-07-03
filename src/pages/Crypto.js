import React from 'react'
import TableComponent from '../components/TableComponent'
import { Outlet } from 'react-router-dom'
import Filter from '../components/Filter'
const Crypto = () => {
  return (
    <section
    className='w-[80%] h-full flex flex-col mt-25 mb-24 relative'
    >
      <Filter/>
      <TableComponent/>
      <Outlet/>
    </section>
  )
}

export default Crypto
