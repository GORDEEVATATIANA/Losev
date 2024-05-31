import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../HomePage.css';
import '../common.css';

import logo from '../img/logotip1.svg';
import sloy1 from '../img/sloy1.jpg';
import sloy2 from '../img/sloy2.png';
import contur from '../img/contur.png';
import layer6 from '../img/layer-6.png';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = e => {
            document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -0.005}deg`);
            document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * 0.01}deg`);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const navigateToGallery = () => {
        navigate('/gallery');
    };

    return (
        <div>
            <img className="logo" src={logo} alt="fireSpot"/>
            <section className="layers">
                <div className="layers__container">
                    <div className="layers__item layer-1" style={{ backgroundImage: `url(${sloy1})` }}></div>
                    <div className="layers__item layer-2" style={{ backgroundImage: `url(${sloy2})` }}></div>
                    <div className="layers__item layer-3">
                        <div className="hero-content">
                            <h1>МУЗЕЙ ИМ. ЛОСЕВА<span>ВИРТУАЛЬНАЯ КАРТИННАЯ ГАЛЕРЕЯ</span></h1>
                            <div className="hero-content__p">ЗНАМЕНИТЫЙ ВОЛГОГРАДСКИЙ ХУДОЖНИК</div>
                            <button onClick={navigateToGallery} className="button-start">ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
                        </div>
                    </div>
                    <div className="layers__item layer-4">
                        <canvas className="rain"></canvas>
                    </div>
                    <div className="layers__item layer-5" style={{ backgroundImage: `url(${contur})` }}></div>
                    <div className="layers__item layer-6" style={{ backgroundImage: `url(${layer6})` }}></div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
