import React from 'react'
import './Style.css'
const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("signUp")
    window.location.reload()
  }
  const deleteAccount = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className='Navbar'>
      <div className='Nav_left'>
        <h1>EMI Calculator </h1>
      </div>
      <div className='Nav_right'>
        <p>Wellcome {localStorage.getItem('name')}</p>
        <button onClick={logout} className="logout">LogOut</button>
        <button onClick={deleteAccount} className="delete">Delete</button>
      </div>
    </div>
  )
}

export default Navbar