import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
     <div className="title">
       <div className="left">
         <img className='logo' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
         <h1>React Mall</h1>
        </div>
        </div>
     <div className="types">
     <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Child</li>
        <li>Beatuy</li>
     </ul>
     </div>
    
    <div className="search">
        <input type="text" placeholder='Search ....' />
    </div>
    <div className="right">
      <div className="signin">
        <button>SignIn/SignUp</button>
      </div>
         <div className="cart">
         <button>Cart</button>
        </div>
     </div>
    </div>
  )
}

export default Header