import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'

const Main = () => {
    <main>

    </main>
}

export const HomePage = ({modulo}) => {

  return (
    <>
        <Sidebar></Sidebar>
        <Main>{modulo}</Main>
    </>
  )
}
