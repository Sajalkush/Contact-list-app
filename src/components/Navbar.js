import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    
    return (
        
        <nav className='navbar navbar-expand-lg navbar-dark ' style={{backgroundColor: '#5cb55c'}}>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5' style={{ color: 'black',fontFamily: 'Arial, sans-serif',fontSize:'23px' }}>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar