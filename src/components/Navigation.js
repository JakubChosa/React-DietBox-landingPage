import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle(){
    setIsOpen(prevState => !prevState)
  }
  
  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}
