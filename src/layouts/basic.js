import React from "react"
import "../styles/global.scss"
import Nav from "../components/nav"
import Footer from "../components/footer"

export default function Full({ children }) {
  return (
    <Layout>
      <Section>{children}</Section>
      <Footer />
    </Layout>
  )
}

export function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export function Section({ children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}