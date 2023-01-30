import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/img.gif'
import './Home.css'
const Home = () => {
  return (
    <div className='container'>
       <div className='con_left'>
        <p className='text'><span>EMI</span> constitutes the <span>principal</span> amount <br/> along with the <span>accrued interest</span>.</p>
       <Link to='/calculator'><button className='con_btn'>Start your Calculation</button></Link>
       </div>
       <div className='con_right'>
        <img src={img1} alt='image' className='img'/>
       </div>
    </div>
  )
}

export default Home