import React, { useState } from 'react';
import '../components/Navbar.css'
import'../style/allcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../components/LoginForm'
import Location from './Location';

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const[moviename , setmovie]=useState();
  const handleclick = (e)=>{
       setmovie(e.target.value);
   
       }
      
       const handleSearch = (e) => {
        e.preventDefault();
        if (moviename) {
          window.location.href = `/movie/${moviename}`;
        }
    };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

   const togglePopup = () => {
     setIsPopupOpen(!isPopupOpen);
   };
  return (
    <div className="navbar">
      <div>
        <nav className="fnav">
          <div className="left">
            <img
              src="/logo-no-background.png"
              alt="logo"
              onClick={() => (window.location.href = "/")}
            />
            <form className="inp" onSubmit={handleSearch}>
              <FontAwesomeIcon icon={faSearch} id="icon" />

              <input
                type="text"
                placeholder=" Search for Movies, Events, Plays, Sports"
                value={moviename}
                onChange={handleclick}
              />
            </form>
          </div>
          <div className="right">
            <div className="navbar-location" onClick={togglePopup}>
              Location ⬇
            </div>
            <Location isOpen={isPopupOpen} onClose={togglePopup} />
            <button className='btnsignin' onClick={handleLoginClick}>Sign In</button>
            {showLogin && <LoginForm handleClose={handleClose} />}
            <i className="fa-solid fa-bars" />
          </div>
        </nav>
        <nav className="sec-nav">
          <div className="s-left">
            <a href="/movie">Movies</a>
            <a href="/stream">Stream</a>
            <a href="/stream">Events</a>
            <a href="/plays">Plays</a>
            <a href="/activity">Activities</a>
          </div>
          <div className="s-right">
            <a href="/listyourshow">ListYourShow</a>
            <a href="/corporate">Corporates</a>
            <a href="/">Offer</a>
            <a href="/">Gift Cards</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar
