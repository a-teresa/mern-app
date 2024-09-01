import React from 'react';
import logoleg from '../../assets/logoleg.png';
const footYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='footer p-3 bg-slate-950 footer-center text-white'>
        <div>
            <img src={logoleg} style={{ width: '120x', height: '120px' } }/>
            <p>&copy; FarmShop {footYear}</p>
        </div>
        
      
    </footer>
  )
}
