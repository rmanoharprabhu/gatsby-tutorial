import { Link } from "gatsby"
import React from "react"
import Layout from "./components/Layout"
import homestyles from './styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={homestyles.header}>
        <div>
          <h2>Portfolio</h2>
          <h3>Details of Projects, Movies, Reading, Expenses</h3>
          <p>Based in India</p>
          <Link className={homestyles.btn} to="/movies">Movies Watched</Link>
        </div>
      </section>
    </Layout>
  )
}
