import React, { useEffect, useState } from 'react';
import '../GalleryPage.css';
import '../common.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from '../libs/ScrollSmoother.min.js';

import imgVopros from '../img/vopros.png';
import imgWork1k from '../img/work/1k.png';
import imgWork4k from '../img/work/4k.png';
import imgWork3k from '../img/work/3k.png';
import imgWork5k from '../img/work/5k.png';
import imgWork2k from '../img/work/2k.png';
import imgWork6k from '../img/work/6k.png';

const GalleryPage = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const images = document.querySelectorAll('img');
        let imagesToLoad = images.length;

        images.forEach((img) => {
            if (img.complete) {
                imagesToLoad--;
            } else {
                img.addEventListener('load', () => {
                    imagesToLoad--;
                    if (imagesToLoad === 0) {
                        setImagesLoaded(true);
                    }
                });
            }
        });

        if (imagesToLoad === 0) {
            setImagesLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        ScrollTrigger.refresh();

        let smoother = ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true,
        });

        gsap.fromTo('.hero-section', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: '820',
                scrub: true,
            },
        });

        let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
        itemsL.forEach((item) => {
            gsap.fromTo(item, { opacity: 0, x: -50 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true,
                },
            });
        });

        let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
        itemsR.forEach((item) => {
            gsap.fromTo(item, { opacity: 0, x: 50 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: 'top',
                    scrub: true,
                },
            });
        });

        ScrollTrigger.refresh();

        return () => {
            smoother.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [imagesLoaded]);

    return (
        <div className="wrapper">
            <div className="content">
                <header className="hero-section">
                    <img data-speed=".6" className="hero" src={imgVopros} alt="Alt" />
                    <div className="container">
                        <div data-speed=".75" className="main-header">
                            <h1 className="main-title">ИЗВИНИТЕ,<br></br> ВЫ НЕ ВИДЕЛИ ЛОСЕВА</h1>
                        </div>
                    </div>
                </header>
                <div className="portfolio">
                    <div className="container">
                        <main className="gallery">
                            <div data-speed=".9" className="gallery__left">
                                <img className="gallery__item" src={imgWork1k} alt="Alt" />
                                <img className="gallery__item" src={imgWork4k} alt="Alt" />
                                <div className="text-block gallery__item">
                                    <h2 className="text-block__h">ИМПРЕССИОНИСТ В МОНУМЕНТАЛЬНОМ ГОРОДЕ</h2>
                                    <p className="text-block__p">В основе живописного метода В. Н. Лосева — импрессионистское видение мира. Он был одним из немногих художников города, отказавшиеся от изображения и романтизации войны. Для него город — дом, а горожане — соседи.</p>
                                </div>
                                <img className="gallery__item" src={imgWork3k} alt="Alt" />
                            </div>
                            <div data-speed="1.1" className="gallery__right">
                                <div className="text-block gallery__item">
                                    <h2 className="text-block__h">ГЕНИЙ МЕСТА</h2>
                                    <p className="text-block__p">Советский художник Виктор Лосев (1926 — 1995) потерял около 300 своих работ, когда их несанкционированно сожгли в подвале магазина в 1969 году. Это событие стало переломным. Он начал создавать и раздавать горожанам миниатюры, изображающие родной Волгоград, чтобы его работы долго хранились в домах людей.</p>
                                </div>
                                <img className="gallery__item" src={imgWork5k} alt="Alt" />
                                <img className="gallery__item" src={imgWork2k} alt="Alt" />
                                <img className="gallery__item" src={imgWork6k} alt="Alt" />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
