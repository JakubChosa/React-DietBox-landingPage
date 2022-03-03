import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </>
  )
}
