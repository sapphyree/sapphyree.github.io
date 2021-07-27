import React from "react"
import "../styles/global.scss"
import Hero from "../components/hero"

export default function Full({ children }) {
  return (
    <>
    <Hero />
    {children}
    </>
  )
}
