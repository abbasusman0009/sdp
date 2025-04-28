import React from 'react'
import { Footer } from "../components/Footer"
import { Header } from "../components/header/Header"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="animate-fadeIn p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
