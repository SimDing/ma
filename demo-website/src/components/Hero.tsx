import React, { useId } from 'react';
import './Hero.css';
import './BannerButton.css'
import { Link } from 'react-router-dom';

function Hero() {
    const linkId = useId();
    return (
        <header className="Hero">
            <div className="Hero-banner">
            <h1 className="Hero-banner-title">Samsung Store</h1>
            <Link id={linkId} to="c/galaxy">
                <div className="banner-btn" style={{textDecoration: 'none'}}>Shop now</div>
            </Link>  
            </div>
        </header>
    );
}

export default Hero;