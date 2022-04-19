import React, { useEffect, useState } from "react";
import netflixLogo from './images/netflix-logo.png';
import netflixAvatar from './images/netflix-avatar.png';

function Nav() {

    const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return ()=>{
        window.removeEventListener('scroll', ()=>{})
    }

  }, []);

  return (
    <div className={`nav-main ${show && "nav-main-black"} `}>
      <img className="nav-logo" src={netflixLogo} alt="netflix-logo" />
      <img className="nav-avatar" src={netflixAvatar} alt="netflix-logo" />
    </div>
  );
}

export default Nav;